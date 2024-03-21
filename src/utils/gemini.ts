import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function summarise(prompt) {
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        return text
    } catch (error) {
        console.error("error summarising:", error);
    }
}

