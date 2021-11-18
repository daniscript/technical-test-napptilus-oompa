import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Routes, useNavigate} from 'react-router-dom';
import getData from "./Actions/GetData";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Detail from './Routes/Detail'


function App() {

  const [oompaList, setOompaList] = useState([]);
  const [searchResultList, setSearchResultList] = useState([]);
  const navigate = useNavigate();
  

  useEffect( ()=> {
    (async ()=> {
      const oompaListData = await getData.getOompaList();
      setOompaList(oompaListData);
      setSearchResultList(oompaListData);
    })()
  }, [])



  const handleProductDetail = async (id) => {
    const oompaListData = await getData.getOompaDetail();
    navigate(`/detail/${id}`);
  }

  const handleSearch = input => {
    const searchList = oompaList.filter( item => {
      const {first_name, last_name, profession} = item;
      return `${first_name}${last_name}${profession}`.toLowerCase().includes(input);
    });
    setSearchResultList(searchList);
  }



  return (

  <div className='App'>
      <Navbar search={handleSearch}/>
      <Routes>
        <Route  path='/' element={ <Home oompaList={searchResultList} handleProductDetail={handleProductDetail} />} />
        <Route  path='/detail/:id' element={ <Detail oompaList={oompaList}/>} /> 
      </Routes>
    </div>

  );
}

export default App;
