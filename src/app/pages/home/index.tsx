import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {Button } from "react-bootstrap";

// import { useNavigate } from "react-router-dom";
import {
  Robot,
} from "react-bootstrap-icons";
interface Chat {
  type: string;
  msg: string;
  agentName: string;
}
function Home() {
  const toSignUp = () => {
    window.location.href = "https://www.app.omniservice.com.ng/signup";
  };

  const [chat] = React.useState<Chat[]>([
    {type:"agent", msg:"Hello, I'm Lisa from SecureGuard Insurance. How can I assist you today with your insurance needs?", agentName:"Lisa"},
    {type:"user", msg:"Hi, Lisa. I'd like to inquire about my insurance policy and make a change.", agentName:""},
    {type:"agent", msg:"Certainly, I can help with that. Could you please provide me with your policy details?", agentName:"Lisa"},
    {type:"user", msg:"Of course, here's my policy number, AD0898765443 and I'd like to update my coverage.", agentName:""},
    {type:"agent", msg:"Thank you. Let me check your policy details. It may take a moment.", agentName:"Lisa"},
    {type:"user", msg:"No problem, take your time.", agentName:""},
    {type:"agent", msg:"I've reviewed your policy, and I can certainly help you update your coverage. What changes would you like to make?", agentName:"Lisa"},
    {type:"user", msg:"I'd like to increase my coverage for home insurance.", agentName:""},
    {type:"agent", msg:"Not a problem. Let's discuss your options. What specific changes are you looking to make to your home insurance coverage?", agentName:"Lisa"},
    {type:"user", msg:"I'd like to add coverage for natural disasters, such as floods and earthquakes.", agentName:""},
    {type:"agent", msg:"Understood. Let me update your policy to include those additional coverages. It may take a moment to process", agentName:"Lisa"},
    {type:"user", msg:"I appreciate your assistance with this.", agentName:""},
    {type:"agent", msg:"our policy has been successfully updated. Is there anything else I can assist you with regarding your insurance needs today?", agentName:"Lisa"},
    {type:"user", msg:"That's all for now. Thank you for your help, Lisa.", agentName:""},
    {type:"agent", msg:"You're welcome. If you have any more questions or need further assistance in the future, don't hesitate to reach out. Have a great day!", agentName:"Lisa"},
  ]);
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
                  { chat.map((item, index)=>{
                    if(item.type==="agent"){
                      return(
                        <li className="chat-left" key={index}>
                          <div className="chat-avatar">
                            <Robot size={50} color="#2f95dc" />
                            <div className="chat-name">{item.agentName}</div>
                          </div>
                          <div className="chat-text">{item.msg}</div>
                          <div className="chat-hour"><span className="fa fa-check-circle"></span></div>
                        </li>
                      );
                    }
                    if(item.type==="user"){
                      return(
                        <li className="chat-right" key={index}>
                          <div className="chat-hour"> <span className="fa fa-check-circle"></span></div>
                          <div className="chat-text-user">{item.msg}</div>
                          <div className="chat-avatar">
                            <div className="chat-name"></div>
                          </div>
                        </li>
                      );
                    }
                  
                  }) 
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
