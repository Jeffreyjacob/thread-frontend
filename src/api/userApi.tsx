import { useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { Logout } from "../Redux/feature/authSlice"


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useGetUser = ()=>{
    const dispatch = useDispatch()
    const getUser = async ()=>{
        const res = await fetch(`${API_BASE_URL}/api/user`,{
            method:"GET",
            credentials:"include"
        })
        const data = await res.json()
        if(!res.ok){
            if(data.message === "Unauthorized: No token provided" || res.statusText === "Unauthorized"){
               dispatch(Logout())
            }
           throw new Error("Failed to get User")
        }
        return data
    }
    const {data:GetUser,isLoading,refetch,isRefetching} = useQuery({
        queryKey:["authUser"],
        queryFn:getUser,
        retry:false
    })
    return {GetUser,isLoading,refetch,isRefetching}
}

