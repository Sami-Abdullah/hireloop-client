import { serverFetch } from "../core/server";




export const getCompanies=async (recruiterId)=>{
  return await serverFetch(`/api/my/company?recruiterId=${recruiterId}`)
  
}


