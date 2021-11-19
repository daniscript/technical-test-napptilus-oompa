import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getData from '../Actions/GetData';
import '../styles/detail.scss'

const Detail = () => {
    debugger
    const { id } = useParams();
    const [oompaDetail, setOompaDetail] = useState(null)
    useEffect(()=>{
        ( async()=>{
            const oompaDetailData = await getData.getOompaData(id);
            setOompaDetail(oompaDetailData)
        })()
    },[])

    return ( 
       oompaDetail && <div className="detail-container">
                        <div className="image-container">
                            <img src={oompaDetail.image} alt="" className="ommpa-detail-container" />
                        </div>
                       <div className="text-content">
                            <div className="fullname">
                                {`${oompaDetail.first_name} ${oompaDetail.last_name}`}
                            </div>
                            <div className="gender">
                            {oompaDetail.gender === 'F' ? 'Woman' : 'Man'}
                            </div>
                            <div className="profession">
                                {oompaDetail.profession}
                            </div>
                            <div className="song">
                                <div className="song-text">
                                    {
                                    oompaDetail.favorite.song.substring(oompaDetail.favorite.song.length / 1.4)
                                    }
                                </div>
                            </div>
                       </div>
                </div>
        );
}
 
export default Detail;