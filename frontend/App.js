import { useState, useEffect } from "react";

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("/api/instagram-messages")
            .then((res) => res.json())
            .then((data) => setMessages(data));
    }, []);

    return (
        <div>
            <h1>Instagram チャットシステム</h1>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
