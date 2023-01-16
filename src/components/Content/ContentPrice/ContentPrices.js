import ContentPrice from "./ContentPrice";
import "./ContentPrices.css";

const ContentPrices = () => {
  const hPN1 = "AJMAN OFFSHORE";
  const hPN2 = "RAK ICC";
  const hPN3 = "SHARJAH MEDIA CITY";
  const hP1 = "$2,997";
  const hP2 = "$2,997";
  const hP3 = "$4,124";
  return (
    <div className="ContentPricesContainer">
      <ContentPrice className="CP1" offerName={hPN1} price={hP1} />
      <ContentPrice className="CP2" offerName={hPN2} price={hP2} />
      <ContentPrice className="CP3" offerName={hPN3} price={hP3} />
    </div>
  );
};

export default ContentPrices;
