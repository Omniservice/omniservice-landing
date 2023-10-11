import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {Button } from "react-bootstrap";
// import SectionOneImg from "../../assets/images/section-one-img.png";
// import SectionTwoImg from "../../assets/images/section-two-img.png";
// import SectionThreeImg from "../../assets/images/section-three-img.png";
import { useNavigate } from "react-router-dom";
import {
  Robot,
} from "react-bootstrap-icons";
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
          <div className="inner-content chat-wrapper">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9 chat-rows">
              <div className="chat-container">
                <ul className="chat-box chatContainerScroll">
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <Robot size={50} color="#2f95dc" />

                      <div className="chat-name">Bot</div>
                    </div>
                    <div className="chat-text">Hello, I&lsquo;m Bot.
                      <br />How can I help you today?</div>
                    <div className="chat-hour"><span className="fa fa-check-circle"></span></div>
                  </li>
                  <li className="chat-right">
                    <div className="chat-hour"> <span className="fa fa-check-circle"></span></div>
                    <div className="chat-text-user">Hi, ETC
                      <br /> I need more information about Developer Plan.</div>
                    <div className="chat-avatar">
                      <div className="chat-name"></div>
                    </div>
                  </li>
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <Robot size={50} color="#2f95dc" />

                      <div className="chat-name">Bot</div>
                    </div>
                    <div className="chat-text">Are we meeting today?
                      <br />Project has been already finished and I have results to show you.</div>
                    <div className="chat-hour"> <span className="fa fa-check-circle"></span></div>
                  </li>
                  <li className="chat-right">
                    <div className="chat-hour"> <span className="fa fa-check-circle"></span></div>
                    <div className="chat-text-user">Well I am not sure.
                      <br />I have results to show you.</div>
                    <div className="chat-avatar">
                      <div className="chat-name"></div>
                    </div>
                  </li>
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <Robot size={50} color="#2f95dc" />

                      <div className="chat-name">Bot</div>
                    </div>
                    <div className="chat-text">The rest of the team is not here yet.
                      <br />Maybe in an hour or so?</div>
                    <div className="chat-hour"> <span className="fa fa-check-circle"></span></div>
                  </li>
                  <li className="chat-right">
                    <div className="chat-hour"> <span className="fa fa-check-circle"></span></div>
                    <div className="chat-text-user">Have you faced any problems at the last phase of the project?</div>
                    <div className="chat-avatar">
                      <div className="chat-name"></div>
                    </div>
                  </li>
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <Robot size={50} color="#2f95dc" />

                      <div className="chat-name">Bot</div>
                    </div>
                    <div className="chat-text">Actually everything was fine.
                      <br />Im very excited to show this to our team.</div>
                    <div className="chat-hour"><span className="fa fa-check-circle"></span></div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <Image
              src={SectionOneImg}
              alt="Omni Service Logo"
              className="section-img"
            /> */}
          </div>
        </div>
      </section>
      {/* <section className="main-container-section">
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
      </section> */}
      {/* <section className="main-container-section  bg-landing-section-a">
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
      </section> */}
      <Footer />
    </div>
  );
}

export default Home;
