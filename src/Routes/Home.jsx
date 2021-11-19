import React from 'react';
import Card from '../Components/Card';
import '../styles/home.scss';



const Home = ({ oompaList, handleProductDetail }) => {
    
    return ( 
        <div className="home-container">
            <div className="title-container">
                <div className="title">
                    Find your Oompa Loompa
                </div>
                <div className="subtitle">
                    There are more than 100k
                </div>
            </div>
            <div className="card-warp">
                <> 
                    {oompaList.length && oompaList.map( (oompaItem, index) => {
                        return <Card key={index} oompaItem={oompaItem} handleProductDetail={handleProductDetail}/>
                    })}
                </>
            </div>

        </div>

    );
}
 
export default Home; 