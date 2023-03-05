export interface OpenAIStreamPayload {
  model: string;
  messages: any[];
}

export async function OpenAIStream(payload: OpenAIStreamPayload) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  const stream = await res.json();

  try {

    return stream?.choices[0]?.message?.content || ''

  } catch (e) {
      return e
  }
}
