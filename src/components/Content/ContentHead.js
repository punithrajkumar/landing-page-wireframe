import { Fragment } from "react";

import "./ContentHead.css";
import ILLUSTRATION from "../../assets/ILLUSTRATION.png";
import ContentPlayImg from "../../assets/Group 117.png";

const ContentHead = () => {
  return (
    <Fragment>
      <div className="contentContainer">
        {/* first row first column*/}
        <div className="contentHead">
          <p className="contentTopic">Claim a Free Quote</p>
          <h1>
            <span className="underline">Get started </span>on fulfilling your
            Dubai or UAE dream.
          </h1>
        </div>
        {/* second row first column*/}
        <div className="contentHead2">
          <p className="contentTopic">UAE & Offshore Company</p>
          <div className="contentParagraph">
            <h3>
              We provide you with information about UAE or Offshore Company
              Registration & help you setup your company with a bank account and
              visas.
            </h3>
          </div>
        </div>
        {/* third row first column*/}
        <div className="contentButton">
          <div className="contentButtonCenter">
            <button>Start a Company</button>
            <button>Renew a Company</button>
          </div>
        </div>
        {/* first row second column upto third row*/}
        <div className="contentImage">
          <img src={ILLUSTRATION} alt="an image" />
        </div>
        {/* fourth row */}
        <div className="contentMid">
          <p>Watch the video about UAE or Offshore Company Registration</p>
          <a href="#" className="logoDown">
            <img src={ContentPlayImg} alt="a logo" />
          </a>
        </div>
        {/* fifth row */}
        <div className="contentFooter">
          <h2>
            <span className="underline">Dedicated </span>
            <br />
            to our mission we are
          </h2>
          <div className="contentParagraph2">
            <p>
              Our services include Company Formation & Renewals, Trust &
              Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote
              Management, Stock Trading Platforms, Ownership Solutions.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentHead;
