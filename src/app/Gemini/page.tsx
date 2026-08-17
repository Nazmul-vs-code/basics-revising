'use client'

import { geminiFetch } from "@/lib/server-fetch/geminiFetch";
import { useState } from "react";
import { SiGooglegemini } from "react-icons/si";

const Page = () => {

    const [messages, setMessages] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const prompt = e.target.userMessage.value;

        const result = await geminiFetch(prompt);

        console.log(result, ": result from Gemini");

        setMessages(prev => [
            ...prev,
            {
                prompt: prompt,
                response: result.summary
            }
        ]);

        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-base-200 py-10">

            <div className="mx-auto w-full max-w-2xl px-4">

                {/* Header */}
                <div className="mb-6 text-center">
                    <div className="flex justify-center items-center gap-2">
                        <SiGooglegemini className="text-2xl text-primary" />

                        <h1 className="text-2xl font-bold">
                            Gemini AI
                        </h1>
                    </div>

                    <p className="text-sm text-base-content/60">
                        Ask anything and get an AI-powered response.
                    </p>
                </div>


                {/* Chat */}
                <div className="rounded-2xl bg-base-100 p-5 shadow-lg space-y-4">

                    {/* Initial Gemini message */}
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-primary/10 text-base-content">
                            Hello! How can I help you today?
                        </div>
                    </div>


                    {/* Conversations */}
                    {messages.map((message, index) => (
                        <div key={index} className="space-y-3">

                            {/* User */}
                            <div className="chat chat-end">
                                <div className="chat-bubble bg-primary text-primary-content">
                                    {message.prompt}
                                </div>
                            </div>

                            {/* Gemini */}
                            <div className="chat chat-start">
                                <div className="chat-bubble bg-primary/10 text-base-content">
                                    {message.response}
                                </div>
                            </div>

                        </div>
                    ))}


                    {/* Input */}
                    <form
                        className="join w-full mt-6"
                        onSubmit={onSubmit}
                    >
                        <input
                            type="text"
                            name="userMessage"
                            placeholder="Ask Gemini..."
                            className="input input-bordered join-item w-full"
                        />

                        <button
                            type="submit"
                            className="btn btn-primary join-item"
                        >
                            Send
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Page;