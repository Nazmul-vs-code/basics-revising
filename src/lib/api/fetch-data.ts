
const baseUrl = 'http://localhost:3000'

const fetchData = async (endpoint:string) => {
    const data = await fetch(`${baseUrl}${endpoint}`);
    const result = await data.json()
    return await result
}

export default fetchData;