import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";
import { MessageCircle } from 'lucide-react'; // You can also use any other icon library
import './ChatbotIcon.css';
import { useNavigate } from "react-router-dom";

const ChatbotIcon = () => {
    const navigate = useNavigate();

    const openChat = () => {
        navigate('/chat');
    };

    return (
        <div className="chatbot-icon" onClick={openChat}>
            <MessageCircle size={28} />
        </div>
    );
};


const Home = () => {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />
                        <div className="home__img"></div>
                        <Data />
                    </div>
                    <Scroll />
                </div> 
            </section>
            <ChatbotIcon /> {/* <-- Always floating */}
        </>
    )
}

export default Home;
