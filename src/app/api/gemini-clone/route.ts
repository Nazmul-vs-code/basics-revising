import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai"


const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMIN_API_KEY;

const MODEL = 'gemini-3.5-flash-lite'

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const prompt = data.prompt;

        if (!prompt) {
            return NextResponse.json({ message: "Message not found!" }, { status: 404 })
        }

        const generativeAi = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
        const result = await generativeAi.models.generateContent({
            model: MODEL,
            contents: prompt
        });

        const sumary = result.text;
        return NextResponse.json({ sumary })

    } catch (err: unknown) {
        console.log(err);
        const errorMessage = err instanceof Error ? err.message : "Server Error";

        return NextResponse.json(
            {
                error: errorMessage
            },
            { status: 500 }
        )
    }
}