
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { IoLocationSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function Checker(props) {

    const seed = useSelector((state) => state.application.seed);

    const [checkerState, setCheckerState] = useState([]);
    
    useEffect(() => {
        const jsonUrl = props.url;
        axios.get(jsonUrl).then ((response) => {
            const allSlots = response.data.values;
            setCheckerState(allSlots);
        }) 
    }, [seed]);
    
    
    return (
        <section className='sect'>
        <div className='container'><h1>{props.name}</h1></div>
        <div className="container list">
            {
                
                
                checkerState.map ((item) => {

                    let logo = item.event_type.logo;

                    if (!logo.includes('https://')) {
                        logo = "https://heroleague.ru" + logo;
                    }

                    return (
                            <div className="card shadow">
                                <div className="card-body" >

                                    <div className="card-body__left">
                                        <div className="card-body__city">
                                            <IoLocationSharp />
                                            {item.city.name_ru} 
                                        </div>
                                        <div className="card-body__type">
                                            {item.title}
                                        </div>
                                        <div className="card-body__price">
                                            {item.price} &#8381;
                                        </div>
                                        <div className="card-body__count-title">
                                            Cлотов:
                                        </div>
                                        <div className="card-body__count">
                                            {/* {(item.tickets_left.athlete < 0) ? 0 : item.tickets_left.athlete} / {item.limits.athlete} */}
                                            {
                                                // (item.tickets_left.athlete <= 0) ? <span className='red'>0/{item.limits.athlete}</span> : <span className='green'>{item.tickets_left.athlete + '/' + item.limits.athlete}</span> 
                                                (item.tickets_left.athlete <= 0) ? <span className='red'>0</span> : <span className='green'>{item.tickets_left.athlete}</span> 
                                            }
                                        </div>
                                    </div>

                                    <div className="card-body__right">
                                        <div className="card-body__logo">
                                            <img src={logo} alt="" width="100%"/>
                                        </div>
                                    </div>




                                </div>
                            </div>
                    )
                })
            }
        </div>
      </section>
       
    )
}

export default Checker;