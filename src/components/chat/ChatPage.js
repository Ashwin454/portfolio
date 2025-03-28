import React, { useState } from "react";
import axios from "axios";
import "./ChatPage.css";

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! How can I help you?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages(prev => [...prev, userMessage]);

        try {
            const response = await axios.post("http://localhost:5000/api/chat", {
                inputs: input
            });
            console.log(response);

            // Get bot reply safely from the given format
            const botReply = response?.data?.data?.[0]?.generated_text || "Sorry, I couldn't understand.";
            setMessages(prev => [...prev, { sender: "bot", text: botReply }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { sender: "bot", text: "Error fetching response" }]);
        }

        setInput("");
    };

    return (
        <div className="chat-container">
            <h2 style={{ padding: "10px" }}>AI Chatbot</h2><hr />
            <div className="chat-box">
                {messages.slice().reverse().map((msg, idx) => (
                    <div
                        key={idx}
                        className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatPage;
