
import axios from "axios"

const baseUrl = "http://localhost:8080";

export const postApi = (baseUrl,paramDetails,payload)=>{ 

    axios.post(baseUrl+paramDetails,payload)

}