
import Checker from "./Checker"

import Info from "./Info"

export const List = () => {

    return (
        <>

                {/* <Info text="Какая справка требуется для участия в велогонке?" link="https://faq.heroleague.ru/knowledge-bases/4/articles/23904-kakaya-spravka-trebuetsya-dlya-uchastiya-v-velogonke" /> */}

                
                {/* <Checker url="https://heroleague.ru/api/event_format/event/doroga2026" name="Дорога Жизни 25 января"/> */}
                {/* <Checker url="https://heroleague.ru/api/event_format/event/zabeg2026_498817" name="Забег РФ"/> */}

                {/* <Checker url="https://heroleague.ru/api/event_format/event/gonka2026_498817_1306" name="Гонка героев"/> */}
                <Checker url="https://heroleague.ru/api/event_format/event/zabeg2026_498817" name="Забег.РФ"/>
                <Checker url="https://heroleague.ru/api/event_format/event/gonka2026_498817_1306" name="Гонка героев 13 июня"/>

                
                              
           
         
        </>
    )
    
    }
    
    export default List
