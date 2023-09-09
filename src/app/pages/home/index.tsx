import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Image, Button } from "react-bootstrap";
import SectionOneImg from "../../assets/images/section-one-img.png";
import SectionTwoImg from "../../assets/images/section-two-img.png";
import SectionThreeImg from "../../assets/images/section-three-img.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const toSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="main-container">
      <section className="main-container-section bg-landing-section-a">
        <Header />
        <div className="d-flex flex-wrap align-items-center justify-content-between content-inner-section">
          <div className="inner-content">
            <p className="section-heading">Be reachable always</p>
            <p className="section-heading-p2"> Improve customer satisfaction</p>
            <p className="section-text">
              Support your customers all around the world 24/7 in any language,
              on any channel (web chat, social media, or messaging apps )
            </p>
            <p className="section-text">
              Differentiate your business with GPT omnichannel multilingual
              conversational intelligent agent for customer support and sales.
            </p>
            <Button
              className="submit-btn p-3 sora-regular btn btn-primary"
              onClick={toSignUp}
            >
              Get started today
            </Button>
          </div>
          <div className="inner-content">
            <Image
              src={SectionOneImg}
              alt="Omni Service Logo"
              className="section-img"
            />
          </div>
        </div>
      </section>
      <section className="main-container-section">
        <div className="d-flex flex-wrap align-items-center justify-content-between content-inner-section">
          <div className="inner-content">
            <Image
              src={SectionTwoImg}
              alt="Omni Service Logo"
              className="section-img"
            />
          </div>
          <div className="inner-content text-right">
            <p className="section-heading text-42">
              Reinvent customer service and automate sales
            </p>
            <p className="section-text">
              Welcome to Omniservice, the future of customer support. Our
              AI-powered virtual agents speak multiple languages and can assist
              your customers on any channel, 24/7.
            </p>
            <p className="section-text">
              Are you tired of the limitations of traditional customer support?
              Omniservice is here to revolutionize the industry with our
              omnichannel conversational virtual agents.
            </p>
            <p className="section-text">
              Omniservice virtual agents can handle a wide range of customer
              inquiries, from simple FAQs to complex transactions. Plus, our
              advanced NLP technology ensures accurate and natural language
              processing.
            </p>
            <Button
              className="submit-btn p-3 sora-regular btn btn-primary"
              onClick={toSignUp}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="main-container-section  bg-landing-section-a">
        <div className="d-flex flex-wrap align-items-center justify-content-between content-inner-section">
          <div className="inner-content">
            <p className="section-heading text-42">Voice and Chat</p>
            <p className="section-text">
              With Omniservice&apos;s voice and chat capabilities, you can provide
              exceptional customer experiences and build lasting relationships
              with your customers.
            </p>
            <Button
              className="submit-btn p-3 sora-regular btn btn-primary"
              onClick={toSignUp}
            >
              Learn More
            </Button>
          </div>
          <div className="inner-content  text-right">
            <Image
              src={SectionThreeImg}
              alt="Omni Service Logo"
              className="section-img"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
