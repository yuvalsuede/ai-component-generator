import {OpenAIStream, OpenAIStreamPayload} from "../../utils/OpenAIStream";

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var from OpenAI");
}

export const config = {
    runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
    const {prompt, framework } = (await req.json()) as {
        prompt?: string;
        framework?: any;
    };

    if (!prompt) {
        return new Response("No prompt in the request", {status: 400});
    }
    const payload: OpenAIStreamPayload = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "user",
                "content": `Please write the following HTML code as ${framework?.label} component:\n\n ${prompt}`
            }
        ],
    };

    const stream = await OpenAIStream(payload);
    return new Response(stream);
};

export default handler;
