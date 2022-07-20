import "./LandingPage.css";
<<<<<<< HEAD
import { AuthContextProvider, useAuthContext } from "../../contexts/auth";
=======
import HeroImage from "../assets/heroImg.jpg";
import TilesIcon1 from "../assets/tiles-icon1.svg";
import TilesIcon2 from "../assets/tiles-icon2.svg";
import TilesIcon3 from "../assets/tiles-icon3.svg";
import TilesIcon4 from "../assets/tiles-icon4.svg";
import { useAuthContext } from "../../contexts/auth";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  const { user } = useAuthContext();

  return (
    <div className="landing-page">
      <div className="hero">
        <img className="hero-img"></img>
        <h1 className="title">Life Tracker</h1>
        <h2 className="cta">Helping you take back control of your world</h2>
      </div>
    </div>
  );
}
