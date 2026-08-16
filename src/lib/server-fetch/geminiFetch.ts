


export const geminiFetch = async (userMeeage) => {
    const result = await fetchData('/api/gemini-clone', 'POST', userMeeage);
    return result;
} 