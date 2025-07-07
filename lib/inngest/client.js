import { Inngest } from "inngest";

export const inngest = new Inngest({
    id:"askally", 
    name: "AskAlly",
credentials: {
    gemini: {
        apiKey: process.env.GEMINI_API_KEY,
    },
}});