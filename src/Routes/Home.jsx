import React from 'react';
import Card from '../Components/Card'



const Home = ({ oompaList, handleProductDetail }) => {
    return ( 
        <> 
            {oompaList.map( (oompaItem) => {
                return <Card key={oompaItem.id} oompaItem={oompaItem} handleProductDetail={handleProductDetail}/>
            })}
        </> 
    );
}
 
export default Home; 