const baseUrl = 'http://localhost:3000'

const fetchData = async (endpoint, method='POST', clientData ) => {
    const data = await fetch(`${baseUrl}${endpoint}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            clientData
        })
    })

    const res = await data.json();
    return res;
}