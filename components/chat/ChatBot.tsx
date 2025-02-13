"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message! Our team will get back to you soon.", 
        isUser: false 
      }]);
    }, 1000);
    
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg border border-primary/20 overflow-hidden">
          <div className="p-4 border-b border-primary/20">
            <h3 className="text-lg font-semibold text-white">FOY Assistant</h3>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-primary text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-primary/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-primary rounded-full text-white hover:bg-primary/80 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg hover:bg-primary/80 transition-colors"
      >
        F
      </button>
    </div>
  );
}