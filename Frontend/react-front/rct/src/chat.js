import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Navbar3 from './Navbar3'
import './chat.css'

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (msg) => {
        setMessages((prevMessages) => [...prevMessages, { ...msg, type: 'incoming' }]);
        scrollToBottom();
      });
    }
  }, [socket]);



  const sendMessage = () => {
    if (message.trim() !== '') {
      const msg = {
        user: name,
        message: message.trim(),
      };

      setMessages((prevMessages) => [...prevMessages, { ...msg, type: 'outgoing' }]);
      setMessage('');
      scrollToBottom();

      if (socket) {
        socket.emit('message', msg);
      }
    }
  };

  const scrollToBottom = () => {
    // Implement your scrolling logic here (e.g., using refs or state)
  };

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };

  const renderMessages = () => {
    return messages.map((msg, index) => (
      <div key={index} className={`message ${msg.type}`}>
        <h4>{msg.user}</h4>
        <p>{msg.message}</p>
      </div>
    ));
  };
  useEffect(() => {
    // Check if the name is already set on page load
    if (!name) {
      // Prompt user to set name
      const enteredName = prompt('Please enter your name:');
      if (enteredName) {
        setName(enteredName);
      }
    }
  }, [name]);

  return (
    <>
    
    <Navbar3/>
    <div>
    <div id='khu'>     
        <box style={{backgroundColor:'#ffe2e2',position:'absolute', top:'50vh', left:'90vh'}}>
      {name && (

        <div>
                    
          <div className="message__area">{renderMessages()}</div>
          <textarea
            id="textarea"
            value={message}
            onChange={handleTextareaChange}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
        </div>
      )}
      </box>
      </div>
      </div>
      </>
  );
};

export default Chat;
