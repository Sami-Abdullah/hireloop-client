const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const getJobs = async ()=>{
  const result = await fetch(`${baseURL}/api/jobs`)
  return await result.json()
}
export const getComapnyJobs = async (companyId,status)=>{
  const result = await fetch(`${baseURL}/api/company/jobs?companyId=${companyId}&status=${status}`)
  return await result.json()
}