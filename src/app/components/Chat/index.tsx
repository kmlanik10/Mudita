// Chat.tsx

import React, { FormEvent, ChangeEvent, useState,useEffect } from "react";
import Messages from "./Messages";
import { useChat } from "ai/react";
import ReactLoading from 'react-loading';
import { Button } from "../Context/Button";

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setData,setMessages } = useChat();

  
  const [loading, setLoading] = useState(true);

  return (
    <div id="chat" className="flex flex-col w-full lg:w-3/5 mr-4 mx-5 lg:mx-0">
      <div className="flex flex-col items-start lg:flex-row w-full lg:flex-wrap p-2">
        <p className="mt-2 text-white font-bold text-xl">
          Tell us things you hope to accomplish today and we will help you!
        </p>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center mt-4">
            <div className="flex flex-col justify-center items-center w-full">
              <ReactLoading type={`bars`} width={`30%`} />
            </div>
        </div>
      )}
      {
        
        <div className={`w-full pr-1 pl-1 ${isLoading ? "opacity-0 transition-all duration-1500 ease-out" : "opacity-100 transition-all duration-1500 ease-in"}`}>
          <form
            onSubmit={handleSubmit}
            className="mt-5 mb-5 relative bg-gray-700 rounded-lg"
          >
            <input
              type="text"
              className={`input-glow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline pl-3 pr-10 bg-gray-600 border-gray-600 transition-shadow duration-200 `}
              value={input}
              onChange={handleInputChange}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              Press ⮐ to send
            </span>
          </form>
        </div>
      }
      {
        messages.length > 0  && (
          <div className={`w-full pr-1 pl-1 ${isLoading ? "opacity-0 transition-all duration-1500 ease-out" : "opacity-100 transition-all duration-1500 ease-in"}`}>
            <Messages messages={messages} />
            <Button
              className="w-full mt-5 my-2 uppercase active:scale-[98%] transition-transform duration-100"
              style={{
                backgroundColor: "#4f6574",
                color: "white",
              }}
              onClick={() => {
                setData(undefined); // This clears the data
                setMessages([]); // This clears all messages
              }} // Clear the chat
            >
              Clear the chat and start over!
            </Button>
          </div>
        )
      }      
    </div>
  );
};

export default Chat;
