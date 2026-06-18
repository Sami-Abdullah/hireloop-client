'use server'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const createJob = async (newJobdata)=>{
  console.log(newJobdata,'at creaqtea job');
  const result = await fetch(`${baseURL}/api/jobs`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(newJobdata),

  })
  return await result.json()
}

export const deleteJob = async (id) => {
  const result = await fetch(`${baseURL}/api/jobs/${id}`, { method: 'DELETE' })
  return await result.json()
}

export const updateJob = async (id, data) => {
  const result = await fetch(`${baseURL}/api/jobs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await result.json()
}