import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SmartDataSquad() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    
    const userMessage = { text: prompt, sender: "user" };
    setMessages([...messages, userMessage]);
    setPrompt("");

    // Simulating AI response
    setTimeout(() => {
      const botMessage = { text: `🤖 AI: ${prompt} response`, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 to-white p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        className="w-full max-w-2xl"
      >
        <Card className="bg-white shadow-xl rounded-2xl p-8 text-black">
          <CardContent className="space-y-6">
            <h1 className="text-3xl font-extrabold text-center text-orange-600">Smart Data Squad</h1>
            <div className="h-80 overflow-y-auto bg-gray-50 p-4 rounded-lg space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg w-fit max-w-xs ${msg.sender === "user" ? "bg-orange-500 ml-auto text-white" : "bg-gray-100"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 text-black bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            />
            <Button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg mt-4"
            >
              <Send size={20} /> Send
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
