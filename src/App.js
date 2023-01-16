import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Dot1 from "./assets/Ellipse 7.png";
import Dot2 from "./assets/Ellipse 8.png";
import Dot3 from "./assets/Ellipse 9.png";
import Dot4 from "./assets/Ellipse 11.png";
import Dot5 from "./assets/Ellipse 12.png";
import Dot6 from "./assets/Ellipse 13.png";
import Dot7 from "./assets/Ellipse 14.png";
import Dot8 from "./assets/Ellipse 15.png";
import Dot9 from "./assets/Ellipse 16.png";
import Dot10 from "./assets/Ellipse 19.png";
import Dot11 from "./assets/Ellipse 19-1.png";
import Dot12 from "./assets/Ellipse 20.png";
import Dot13 from "./assets/Ellipse 21.png";
import Dot14 from "./assets/Ellipse 23.png";
import Dot15 from "./assets/Ellipse 24.png";
import Dot16 from "./assets/Ellipse 25.png";
import Dot17 from "./assets/Ellipse 26.png";
import Dot18 from "./assets/Ellipse 27.png";
import Dot19 from "./assets/Ellipse 28.png";

import ContentHead from "./components/Content/ContentHead";
import ContentCompanies from "./components/Content/ContentCompanies/ContentCompanies";
import ContentBadges from "./components/Content/ContentBadge/ContentBadges";
import ContentPrices from "./components/Content/ContentPrice/ContentPrices";
import ContentFooter from "./components/Content/ContentFooter/ContentFooter";
import ContentTextPrice from "./components/Content/ContentTextPrice";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        <ContentHead />
        <ContentCompanies />
        <ContentBadges />
        <ContentTextPrice />
        <ContentPrices />
        <ContentFooter />
        {/* <img className="dot1" src={Dot1} alt="Dot1" />
        <img className="dot2" src={Dot2} alt="Dot2" />
        <img className="dot3" src={Dot3} alt="Dot3" />
        <img className="dot4" src={Dot4} alt="Dot4" />
        <img className="dot5" src={Dot5} alt="Dot5" />
        <img className="dot6" src={Dot6} alt="Dot6" />
        <img className="dot7" src={Dot7} alt="Dot7" />
        <img className="dot8" src={Dot8} alt="Dot8" />
        <img className="dot9" src={Dot9} alt="Dot9" />
        <img className="dot10" src={Dot10} alt="Dot10" />
        <img className="dot11" src={Dot11} alt="Dot11" />
        <img className="dot12" src={Dot12} alt="Dot12" />
        <img className="dot13" src={Dot13} alt="Dot13" />
        <img className="dot14" src={Dot14} alt="Dot14" />
        <img className="dot15" src={Dot15} alt="Dot15" />
        <img className="dot16" src={Dot16} alt="Dot16" />
        <img className="dot17" src={Dot17} alt="Dot17" />
        <img className="dot18" src={Dot18} alt="Dot18" />
        <img className="dot19" src={Dot19} alt="Dot19" /> */}
      </div>
    </Fragment>
  );
}

export default App;
