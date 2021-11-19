import Call from "../Utils/Call";

const URL_OOMPA_API = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas';
const ONE_DAY_MILISECONDS = 60*60*24*1000;

const getData = {
    getOompaData(index, pageType){
        return ( async ()=> {
            const oompaListCached = localStorage.getItem(`${URL_OOMPA_API}${pageType === 'home' ? '/?page=' : '/'}${index}`);
            let oompaData = oompaListCached && JSON.parse(oompaListCached);
            if(!oompaData || this.checkIsDeprecated(oompaData.date)) {
                    oompaData = await Call(`${URL_OOMPA_API}${pageType === 'home' ? '/?page=' : '/'}${index}`);
                    const oompaListStr = JSON.stringify({date: new Date(), ...oompaData});
                    localStorage.setItem(`${URL_OOMPA_API}${pageType === 'home' ? '/?page=' : '/'}${index}`, oompaListStr);
            }
            return pageType === 'home' ? oompaData.list.results : oompaData
        })()
    },

    checkIsDeprecated(lastCachedDate){
        const lastDateMlSeconds = lastCachedDate && new Date().getTime(lastCachedDate);
        const isDeprecatedDate = lastDateMlSeconds && (new Date().getTime() - lastDateMlSeconds) > ONE_DAY_MILISECONDS;
        return isDeprecatedDate;
    }
}

export default getData;