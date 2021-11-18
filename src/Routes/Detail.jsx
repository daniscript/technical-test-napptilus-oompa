import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getData from '../Actions/GetData';


const Detail = () => {
    debugger
    const { id } = useParams();
    const [oompa, setOompa] = useState({})
debugger
    useEffect(()=>{
        ( async()=>{
            debugger
            const oompaDetail = await getData.getOompaDetail(id);
            setOompa(oompaDetail)
        })()
    },[])

    return ( 
        <div className="detail-container">
            <div className="picture-container">
               
            </div>
        </div>
        );
}
 
export default Detail;