import { useDispatch, useSelector } from "react-redux" 
import {switchTheme} from "../store/applicationSlice";
import { useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

export const ThemeSwitcher = () => {
    const theme = useSelector((state) => state.application.theme);
    const dispatch = useDispatch();
    
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
      },[theme]);
    

    return (
        <>
            <span onClick={()=>dispatch(switchTheme())}>
                {
                    (theme == "dark")? <IoMoonOutline /> : <IoMoon />
                }

                &nbsp;{theme}&nbsp;
                theme</span> 
        </>
    )
}

export default ThemeSwitcher