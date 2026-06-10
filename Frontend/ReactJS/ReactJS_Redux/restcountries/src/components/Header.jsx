import React from 'react'
import { useState, useEffect } from 'react';
import { IoMoon } from "react-icons/io5";

import { Link } from 'react-router-dom';

import { switchTheme } from '../store/applicationSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  // const [theme, setTheme] = useState('light');
  const theme = useSelector((state) => state.application.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  },[theme]);

  return (
    <section className="shadow header ">
        <div className="container flex-sp-b">
                    <div className="header__name">
                       <Link to="/restcountries/"> Where is world?</Link>
                    </div>
                    <div className="header__switch" onClick={()=>dispatch(switchTheme())}>
                    <IoMoon /> {theme}
                    </div>
        </div>
    </section>
  )
}
