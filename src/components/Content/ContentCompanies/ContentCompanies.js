import { Fragment } from "react";
import ContentCompany from "./ContentCompany";

import "./ContentCompanies.css";
import CompanyLogo1 from "../../../assets/dungeon.png";
import CompanyLogo2 from "../../../assets/Vector-2.png";
import CompanyLogo3 from "../../../assets/Vector-1.png";

const ContentCompanies = () => {
  const head1 = "UAE Free Zone Company";
  const head2 = "Dubai Local Companies";
  const head3 = "Offshore Compamies";
  const altImg = "CompanyLogo";
  const p1 =
    "Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.";
  const p2 =
    "The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.";
  const p3 =
    "You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the process";
  return (
    <Fragment>
      <div className="containerCompanies">
        <ContentCompany
          className="companyCol1"
          src={CompanyLogo1}
          h3={head1}
          alt={altImg}
          text={p1}
        />
        <ContentCompany
          className="companyCol2"
          src={CompanyLogo2}
          h3={head2}
          alt={altImg}
          text={p2}
        />
        <ContentCompany
          className="companyCol3"
          src={CompanyLogo3}
          h3={head3}
          alt={altImg}
          text={p3}
        />
      </div>
    </Fragment>
  );
};

export default ContentCompanies;
