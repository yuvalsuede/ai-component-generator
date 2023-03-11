import { useCallback, useState } from "react";
import { ChatGPTMessage } from "../utils/OpenAIStream";

export function removeCodeWrapping(str: string) {
    if (str.startsWith("```") && str.endsWith("```")) {
        return str.slice(3, -3);
    } else {
        return str;
    }
}

export function useChatGPT(clear: () => void) {
    const [isLoading, setLoading] = useState(false);
    const [conversation, setConversation] = useState<ChatGPTMessage[]>([]);
    const [generatedCode, setGeneratedCode] = useState("");

    function makeMessage(role: 'user' | 'assistant', content: string): ChatGPTMessage {
        return {
            role,
            content
        };
    }

    const generateUI = useCallback(async (prompt: string) => {
        setLoading(true);
        const request = makeMessage('user', prompt);
        setConversation(sofar => [...sofar, request]);

        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages: [...conversation, request]
            }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        // This data is a ReadableStream
        const data = response.body;
        if (!data) {
            return;
        }

        const reader = data.getReader();
        const decoder = new TextDecoder();
        const { value } = await reader.read();

        const rawValue = decoder.decode(value);
        const reply = makeMessage('assistant', rawValue);
        setConversation(sofar => [...sofar, reply]);

        const code = removeCodeWrapping(rawValue);
        setGeneratedCode(code);
        clear();
        setLoading(false);
    }, [conversation]);

    const restart = useCallback(() => {
        setConversation([]);
        setGeneratedCode("");
        setLoading(false);
        clear();
    }, []);

    return { isLoading, generateUI, generatedCode, restart };

}
