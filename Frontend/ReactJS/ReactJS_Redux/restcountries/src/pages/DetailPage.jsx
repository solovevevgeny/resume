import React from 'react'
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import Detail from '../components/Detail';

import axios from 'axios';

import {useState, useEffect} from "react";
import ControlsBack from '../components/ControlsBack';


 

const DetailPage = () => {
  const [cntr, setCntr] = useState({});
  const [loaded, setLoaded] = useState(false);

  const params = useParams();
  const country = params.country;

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/name/'+country+'?fields=name,flags,population,region,subregion,currencies,languages,capital,tld')
    .then ((response) => {
        setCntr(response.data[0]);
        setLoaded(true)
    })
},[country])

  if (loaded) {
        return (
          <div>
              <Header />
              <ControlsBack />

              <Detail data={cntr} />
          </div>
        )
  }
 
}
export default DetailPage;