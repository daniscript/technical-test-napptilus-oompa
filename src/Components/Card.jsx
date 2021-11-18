import React from 'react';

const Card = ({oompaItem, handleProductDetail}) => {

    const {id, image, first_name, last_name, gender, profession} = oompaItem;
    return ( 
        <div className="card-container" onClick={()=>{handleProductDetail(id)}}>
            <div className="image">
                <img src={image} alt="oompa" className="ommpa-img" />
            </div>
            <div className="name-container">
                <p className="title-text">
                    {`${first_name} ${last_name}`}
                </p>
            </div>
            <div className="gender-container">
                <p className="gender-text">
                    {gender}
                </p>
            </div>
            <div className="profession-container">
                <p className="profession-text">
                    {profession}
                </p>
            </div>
        </div>
        );
}
 
export default Card;