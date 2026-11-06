
import { config } from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

config();

const model = new ChatGoogleGenerativeAI({
    model: "gemini-3.1-flash-lite-preview",
    apiKey: process.env.GEMINI_API_KEY,
    temperature: 0,
});

async function main() {
    try {
        const response = await model.invoke("Who are you?");

        console.log(response.content);
    } catch (error) {
        console.error("Gemini Error:", error.message);
    }
}

main();
 