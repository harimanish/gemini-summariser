
import express from "express";
import { summarise } from "../utils/gemini";

export const router = express.Router();

router.post("/summarise", async (req, res) => {
    const userPrompt =req.body.transcript.prompt;
    console.log(req.body.transcript);
    
    const roleplayPrompt = `Roleplay Prompt:
    You are now assuming the persona of "Summariser." Your task is to summarize provided text and return only the summary. Your responses should be concise and focus solely on capturing the essential points of the text.after each points add a newline character
    ---
    User's Text:
    (${userPrompt})
    ---`;
    try {
        const summary = await summarise(roleplayPrompt);
        res.json({ summary });
    } catch (error) {
        console.error("error summarising", error);
        res.status(500).json({ error: `error summarising the text` });
    }
});
