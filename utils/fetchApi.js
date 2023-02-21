import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';




export const fetchApi = async (url)=> {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '67bd71670cmshf203db53ac87abbp15d6ecjsn111ce2acd05a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}