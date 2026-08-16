const baseUrl = 'http://localhost:3000'

export const fetchData = async (endpoint:string, method='POST', prompt:string ) => {
    const data = await fetch(`${baseUrl}${endpoint}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt
        })
    })

    const res = await data.json();
    return res;
}