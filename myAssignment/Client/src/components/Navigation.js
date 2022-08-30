import axios from "axios";
import{NavLink} from 'react-router-dom';
import { UilShoppingCart, UilUserCircle } from '@iconscout/react-unicons';


const Navigation = () => {

    
    return(
        <>
            <div className="navContainer">
                               
                <ul>
                <li><div className="logo">SKY SKATES.</div></li>
                <div className="list">
                <li><NavLink exact activeclassname="active" to="/Home"><button className="icon icon1">Home</button></NavLink></li>
                    <li><NavLink activeclassname="active" to="/Shop"><button className="icon icon2">Shop</button></NavLink></li>
                    <li><NavLink activeclassname="active" to="/Admin"><button className="icon icon3">Admin</button></NavLink></li>
                    <li><NavLink activeclassname="active" to="/Cart"><button className="icon icon3"><UilShoppingCart size="18"/></button></NavLink></li>
                    <li><NavLink activeclassname="active" to="/"><button className="icon logout">Log out</button></NavLink></li>


                </div>
                </ul>

                <hr/>

       
            </div>
        </>

    );


}
export default Navigation