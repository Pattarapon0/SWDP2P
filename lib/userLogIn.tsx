import dotenv from 'dotenv'
dotenv.config()
export default async function userLogIn(email:string,password:string){
   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,{
        method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
   })
   if(!res.ok) {
    throw new Error("Something went wrong")
   }
   const data = await res.json()
   return data
}