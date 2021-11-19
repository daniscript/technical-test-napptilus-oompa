import React from 'react';
import '../styles/card.scss'

const Card = ({oompaItem, handleProductDetail}) => {
    const {id, image, first_name, last_name, gender, profession} = oompaItem;
    return ( 
        <div className="card-container" onClick={()=>{handleProductDetail(id)}}>
           
            <img src={image} alt="oompa" className="ommpa-img" />
            <div className="text-content">
                    <p className="name">
                        {`${first_name} ${last_name}`}
                    </p>
                    <p className="gender-text">
                        {gender === 'F' ? 'Woman' : 'Man'}
                    </p>
                    <p className="profession-text">
                        {profession}
                    </p>
            </div>
     
        </div>
        );
}
 
export default Card;