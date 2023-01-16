import ContentBadge from "./ContentBadge";
import "./ContentBadges.css";
import Arrow from "../../../assets/Vector.png";
import BadgeImg1 from "../../../assets/Group.png";
import BadgeImg2 from "../../../assets/ILLUSTRATION 03  1.png";
import BadgeImg3 from "../../../assets/Group-1.png";
import BadgeImg4 from "../../../assets/Group-2.png";

const ContentBadges = () => {
  const bH1 = "Advice & Guidance";
  const bH2 = "Bank Account Setup";
  const bH3 = "Registration Document Perparation";
  const bH4 = "UAE Company Visas";
  const bP1 =
    "All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today.";
  const bP2 =
    "There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parents strategies and have changed local requirements overnight in the past. But we are here to help you.";
  const bP3 =
    "Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.";
  const bP4 =
    "Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.";
  return (
    <div className="contentBadgesContainer">
      <div className="ContentBadgeQuote">
        <h3>
          Learn the ways in which you can benefit from a UAE/Offshore Company.
          Then get started on fulfilling your UAE dream.
        </h3>
        <a href="#">Claim a Free Quote</a>
      </div>
      <div className="ContentBadge1">
        <ContentBadge head={bH1} text={bP1} src={BadgeImg1} arrowImg={Arrow} />
      </div>
      <div className="ContentBadge2">
        <ContentBadge head={bH2} text={bP2} src={BadgeImg2} arrowImg={Arrow} />
      </div>
      <div className="ContentBadge3">
        <ContentBadge head={bH3} text={bP3} src={BadgeImg3} arrowImg={Arrow} />
      </div>
      <div className="ContentBadge4">
        <ContentBadge head={bH4} text={bP4} src={BadgeImg4} arrowImg={Arrow} />
      </div>

      <div className="ContentBadgeService">
        <h3>
          We have gathered a team of professionals to craft adequate services
          you can rely on for a friction free setup in UAE.
        </h3>
        <div className="ContentBadgeServiceFooter">
          <a href="">More about our services</a>
          <img src={Arrow} alt="arrow sign" />
        </div>
      </div>
    </div>
  );
};

export default ContentBadges;
