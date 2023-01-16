import classes from "./ContentPrice.module.css";
import PriceFormationList from "./PriceFormationList";

const DUMMY_LIST = [
  {
    list: "Attestation Charges",
  },
  {
    list: "Registered Agent",
  },
  {
    list: "Registered Office",
  },
  {
    list: "Varal Administrative",
  },
  {
    list: "Preparing Statutory File",
  },
  {
    list: "Liasing with Registration Authorities",
  },
  {
    list: "Due Diligence Appraisal",
  },
  {
    list: "Keeping The Register",
  },
  {
    list: "Seal Charges",
  },
  {
    list: "Certificate of Good Standing",
  },
];

const ContentPrice = (props) => {
  return (
    <div className={`${classes.ContentPriceContainer} ${props.className}`}>
      <h3>{props.offerName}</h3>
      <div className={`${classes.pricePayment}`}>
        <h2>{props.price}</h2>
        <p>One Time Payment</p>
      </div>
      <h4>{props.offerName} New Company formation includes</h4>
      <div className={`${classes.priceList}`}>
        {DUMMY_LIST.map((list, index) => {
          return (
            <PriceFormationList
              // listClass={`${classes.priceList}`}
              className={`${classes.imgChange}`}
              key={index}
              lists={list.list}
            />
          );
        })}
      </div>
      <div className={`${classes.priceButton}`}>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default ContentPrice;
