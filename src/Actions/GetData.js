import Call from "../Utils/Call";

const URL_OOMPA_API_LIST = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas';
const URL_OOMPA_API_DETAIL = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus​/oompa-loompas/';
const ONE_DAY_MILISECONDS = 60*60*24*1000;

const getData = {
    getOompaList(pageIndex){
        return ( async ()=> {
            const cachedList = localStorage.getItem('storedOompaList');
            const cachedListJSON = cachedList && JSON.parse(cachedList);
            const lastDateMlSeconds = cachedListJSON && new Date().getTime(cachedListJSON.date);
            const isDeprecatedDate = lastDateMlSeconds && (new Date().getTime() - lastDateMlSeconds) > ONE_DAY_MILISECONDS;
            if (isDeprecatedDate || !cachedList) {
                const oompaList = await Call(URL_OOMPA_API_LIST);
                if(cachedList) {
                    const oompaListStore = oompaList && {date: new Date(), oompaList: [...oompaList, ...cachedList.results]}
                }
                const oompaListStore = oompaList && {date: new Date(), oompaList: [...oompaList.results]}
                oompaListStore && localStorage.setItem('storedOompaList', JSON.stringify(oompaListStore));
                return oompaListStore && oompaListStore.oompaList;
            }
            return cachedListJSON && cachedListJSON.oompaList;
        })()
    },

    getOompaDetail(id){
        return ( async ()=> {
            const cachedOompaDetailList  = JSON.parse(localStorage.getItem('storedOompaDetailList'));
            const elementIndex = cachedOompaDetailList && cachedOompaDetailList.findIndex(( item )=> item.id === id);

                if(!cachedOompaDetailList) {
                    const oompaDetailtData = await Call(`${URL_OOMPA_API_DETAIL}${id}`);
                    const oompaDetailStore =  oompaDetailtData && {date: new Date(), oompaDetail: {...oompaDetailtData}};
                    oompaDetailStore && localStorage.setItem('storedOompaDetailList', JSON.stringify([{...oompaDetailStore}]));
                    return oompaDetailtData & oompaDetailtData;

                } else if(elementIndex === -1 ){
                    const oompaDetailtData = await Call(`${URL_OOMPA_API_DETAIL}${id}`);
                    const oompaDetailStore =  oompaDetailtData && {date: new Date(), oompaDetail: {...oompaDetailtData}};
                    const oompaDetailListStore = oompaDetailStore && [...cachedOompaDetailList, {...oompaDetailStore}];
                    oompaDetailStore && localStorage.setItem('storedOompaDetailList', JSON.stringify(oompaDetailListStore));
                    return oompaDetailtData & oompaDetailtData;

                } else if (this.checkIsDeprecated(cachedOompaDetailList[elementIndex].date)) {
                    const oompaDetailtData = await Call(`${URL_OOMPA_API_DETAIL}${id}`);
                    const oompaDetailStore =  oompaDetailtData && {date: new Date(), oompaDetail: {...oompaDetailtData}};
                    const storeOompaDetailList = cachedOompaDetailList[elementIndex] = {date: new Date(), oompaDetail: {...oompaDetailStore}};
                    storeOompaDetailList && localStorage.setItem('storedOompaDetailList', JSON.stringify(storeOompaDetailList));
                    return oompaDetailtData & oompaDetailtData;;
                }
                return cachedOompaDetailList.find(item => item.id);
        })()
    },

    checkIsDeprecated(lastCachedDate){
        const lastDateMlSeconds = lastCachedDate && new Date().getTime(lastCachedDate);
        const isDeprecatedDate = lastDateMlSeconds && (new Date().getTime() - lastDateMlSeconds) > ONE_DAY_MILISECONDS;
        return isDeprecatedDate;
    }
}

export default getData;