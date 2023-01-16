import BlogHead from "./BlogHead";
import "./ContentFooter.css";
import ContentProcess from "./ContentProcess";
import TopicModule from "./TopicModule";
import ButtonImage from "../../../assets/Group 34.png";
import SM1 from "../../../assets/Vector-5.png";
import SM2 from "../../../assets/Vector-6.png";
import SM3 from "../../../assets/Vector-7.png";
import SM4 from "../../../assets/Vector-8.png";

const ContentFooter = () => {
  const BlogHeadTitle1 =
    "Read about our blogs for more information on our processes";
  const BlogHeadTitle2 = "Get to know the whole us and more of our services";
  const BlogHeadTitle3 = "Satisfied We are When Our Customers Are Happy";
  const q1 =
    "I am very happy with them. I’ll continue to use their services in future & highly recommend them to anyone,";
  const q2 =
    "Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity,";
  const q3 =
    "Your advise was so complete that I actually realized how beneficial this would be to my clients and my business.";
  const a1 = "Muhib Abrar";
  const a2 = "Colin Saldahna";
  const a3 = "Mark Swann";
  const hPT1 = "How to start a company formation in Dubai";
  const hPT2 = "How to start an Offshore company formation in Dubai";
  const hPT3 = "SEO Dubai: Who benefits the most?";

  return (
    <div className="contentFooterContainer">
      <div className="Services">
        <span>
          <h3>Services</h3>
        </span>
        <h3>Products</h3>
        <h3>Solutions</h3>
        <h3>Assurance</h3>
        <h3>FAQ</h3>
        <h3>Working at Varal-Singhania</h3>
      </div>
      <div className="Policies">
        <span>
          <h3>Policies</h3>
        </span>
        <h3>Privacy Policy</h3>
        <h3>Terms & Conditions</h3>
      </div>
      <div className="About">
        <span>
          <h3>About</h3>
        </span>
        <h3>About Us</h3>
        <h3>Contact Us</h3>
      </div>
      <div className="Address">
        <span>
          <h3>Address</h3>
        </span>
        <h3 className="addressBottom">
          608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah Lake Towers
          Dubai United Arab Emirates
        </h3>
        <h3>Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]</h3>
        <h3>M: +971 55 794 2016</h3>
        <h3>O: +971 4 447 2061</h3>
      </div>
      <div className="Subscribe">
        <span>
          <h3>Subscribe Now</h3>
        </span>
        <h3>
          Subscribe now to receive our Newsletters about amazing opportunities
          in Dubai
        </h3>
        <div className="footerInput">
          <div className="footerSubInput">
            <input type="text" placeholder="Enter email address" />
            <button>
              <img src={ButtonImage} />
            </button>
          </div>
        </div>
      </div>
      <div className="socialMedia">
        <img src={SM1} />
        <img src={SM2} />
        <img src={SM3} />
        <img src={SM4} />
      </div>
      <div className="bH1">
        <BlogHead BlogHeadTitle={BlogHeadTitle1} />
      </div>
      <div className="bH2">
        <BlogHead BlogHeadTitle={BlogHeadTitle2} />
      </div>
      <div className="bH3">
        <BlogHead BlogHeadTitle={BlogHeadTitle3} />
      </div>
      <div className="hPC1">
        <ContentProcess headProcess={hPT1} />
      </div>
      <div className="hPC2">
        <ContentProcess headProcess={hPT2} />
      </div>
      <div className="hPC3">
        <ContentProcess headProcess={hPT3} />
      </div>
      <div className="qH1">
        <TopicModule quote={q1} author={a1} />
      </div>
      <div className="qH2">
        <TopicModule quote={q2} author={a2} />
      </div>
      <div className="qH3">
        <TopicModule quote={q3} author={a3} />
      </div>

      <div className="footerPage">
        <h4> Varaluae 2021 &#169; All Right Reserved</h4>
      </div>
    </div>
  );
};

export default ContentFooter;
