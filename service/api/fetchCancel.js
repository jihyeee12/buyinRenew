import axios from "axios"

export const fetchCancel = async (id) => {
    return await axios.get(`/v2/cancelation-detail?cancelation=${id}`, {headers: {'Contents-type': 'application/json','user': 'AppIDEtest'}})
  }