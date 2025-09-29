import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';
import './App.css'

//5k. Create a "Clear" button. Clicking it removes all chat messages on the
//website and updates 'messages' in localStorage to [].

 function App() {
            //more destructured
            const [chatMessages, setChatMessages] =  useState(JSON.parse(localStorage.getItem('messages')) || []);
           // const chatMessages = array[0]; current state
            //const setChatMessages = array[1]; function to update state
           // const [chatMessages, setChatMessages] = array; shorthand

            useEffect(() => {
                Chatbot.addResponses({
                    'tangina': 'tangina mo rin',
                    'gago': 'gago ka rin'
                });
            }, []);

            useEffect(() => {
                localStorage.setItem('messages', JSON.stringify(chatMessages));
            }, [chatMessages]);

            return (
                <div className="app-container">
                    {chatMessages.length === 0 && 
                        <p className="welcome-text"> 
                            Welcome to the chatbot project! Send a message using the textbox below.
                        </p>
                    }
                    <ChatMessages 
                        chatMessages={chatMessages}
                    />
                    <ChatInput 
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />
                </div>
            );
        }      

export default App
