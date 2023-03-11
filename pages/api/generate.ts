import {OpenAIStream, OpenAIStreamPayload} from "../../utils/OpenAIStream";

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var from OpenAI");
}

export const config = {
    runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
    const {prompt} = (await req.json()) as {
        prompt?: string;
    };

    if (!prompt) {
        return new Response("No prompt in the request", {status: 400});
    }

    const payload: OpenAIStreamPayload = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "user",
                "content": "create next.js + tailwind css code for button 200 x 100, light purple background, generate text on it. Please create a complete next.js component"
            },
            {
                "role": "assistant", "content": `
                    import React from 'react';
                    const MyComponent = () => {
                      return (
                        <div className="flex flex-col items-center justify-center h-screen">
                          <h1 className="text-3xl font-bold mb-4">Hello World</h1>
                          <p className="text-lg mb-4">Welcome to my Next.js component using Tailwind CSS</p>
                          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Click Me</button>
                        </div>
                      );
                    };
                    export default MyComponent;
                `
            },
            {
                "role": "user",
                "content": "Please create html code with inline css that creates the following component, Material UI look and feel, return only code"
            },
            {"role": "user", "content": "DO NOT wrap the returned code with ```"},
            {"role": "user", "content": prompt},
        ],
    };

    const stream = await OpenAIStream(payload);
    return new Response(stream);
};

export default handler;
