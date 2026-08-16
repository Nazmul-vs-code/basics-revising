import { fetchData } from "./fetch";



export const geminiFetch = async (userMeeage:string) => {
    const result = await fetchData('/api/gemini-clone', 'POST', userMeeage);
    return result;
} 