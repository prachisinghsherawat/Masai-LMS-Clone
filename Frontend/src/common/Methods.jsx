
import axios from "axios"

const baseUrl = "http://localhost:8080";



export const postApi = (baseUrl,paramDetails,payload)=>{ 

    axios.post(baseUrl+paramDetails,payload)

}

export const getApi = (baseUrl,paramDetails)=>{ 

    axios.get(baseUrl+paramDetails)

}

export const updateApi = (baseUrl,paramDetails,payload)=>{ 

    axios.patch(baseUrl+paramDetails,payload)

}

export const deleteApi = (baseUrl,paramDetails)=>{ 

    axios.delete(baseUrl+paramDetails)

}