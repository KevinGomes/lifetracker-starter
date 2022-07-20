import "./NavLinks.css"
import { Link } from "react-router-dom"
<<<<<<< HEAD
import NotFound from "components/NotFound/NotFound"
import { AuthContextProvider, useAuthContext} from "../../contexts/auth"
=======
import { useAuthContext} from "../../contexts/auth";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d

export default function NavLinks(props){

    const { user, logOutUser } = useAuthContext();

    if(user.id > 0){
        let capitalizedName = user.first_name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
        return(
            <div className="nav-links">
                <div className="Links">
                    <Link to="/activity" className="link">Activity</Link>
                    <Link to="/nutrition" className="link">Nutrition</Link>
<<<<<<< HEAD
                    <Link to="/*" className="link">Exercise</Link>
                    <Link to="/*" className="link">Sleep</Link>
=======
                    <Link to="/exercise" className="link">Exercise</Link>
                    <Link to="/sleep" className="link">Sleep</Link>
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
                </div>
                <div className="Buttons-logged-in">
                    <a href="/"><button className="logout-button" onClick={logOutUser}>Log Out</button></a>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="nav-links">
                <div className="Links">
                    <Link to="/login" className="link">Activity</Link>
                    <Link to="/login" className="link">Nutrition</Link>
                    <Link to="/login" className="link">Exercise</Link>
                    <Link to="/login" className="link">Sleep</Link>
                </div>
                <div className="Buttons">
                    <Link to="/login"><button className={Object.keys(user) > 0 ? "hidden" : "logout-button"}>Login</button></Link>
                    <Link to="/register"><button className="logout-button">Register</button></Link>
                </div>
            </div>
        )
    }
}