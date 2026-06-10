import React from 'react'

import { Header } from "../components/Header";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import {useEffect, useState} from "react";
import axios from "axios";

const MainPage = () => {

  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  

  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,population,capital,flags,region')
    .then ((response) => {
      setCountries(response.data);
      setLoaded(true);
    })
  },[]);

  
  
  if (loaded) {
    const handleSearch = (search, region)=> {
      setFilterCountries(countries);
      let data = [...countries];

      if (region) {
        data = data.filter(c => c.region.toLowerCase().includes(region.toLowerCase()));
        setFilterCountries(data);        
      }

      if (search) {
        data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()));
        setFilterCountries(data);
      }

    }

    return (
      <>
          <Header />
          <Controls onSearch={handleSearch} />
          <List items={filterCountries}/>
      </>
    )

  }

}
export default MainPage;