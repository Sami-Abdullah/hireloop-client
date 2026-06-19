const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const serverMutation = async (path, payload )=>{
  const res = await fetch(`${baseURL}${path}`,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
      
    },
    body: JSON.stringify(payload)
  })
  return await res.json()
}

export const serverFetch= async(path)=>{
  const res = await fetch (`${baseURL}${path}`)
  return await res.json()
}