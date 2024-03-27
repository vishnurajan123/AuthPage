import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"
const reqHeader={
    "device-id":"d12121",
    "app-type":"web"
  }

export const registerAPI=async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/api/1.0/auth/signup`,user,reqHeader)
}
export const loginAPI=async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/api/1.0/auth/login`,user,reqHeader)
}
