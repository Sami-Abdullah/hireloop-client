'use server'

import { serverMutation } from "../core/server"


export const createCompany = async (payload)=>{

  const res = await serverMutation('/api/my/company',payload)
  return res
}

export const uploadLogo = async (data)=>{
  const formData = new FormData();
  formData.append('image',data)
  const res =await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,{
    method:'POST',
    body:formData
  })
  return await res.json()
}