import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from "./useAxiosSecure";

const useCart=()=>{
    const {user}=useContext(AuthContext);
    console.log(user?.email);
    // const [axiosSecure]=useAxiosSecure();
    const token=localStorage.getItem("ACCESS_TOKEN")

    const {  data: cart=[],refetch} = useQuery({
        
        queryKey: ['carts',user?.email],
        // enabled: !loading,
        queryFn: async()=>{
            const res=await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers:{
                    authorization:`bearer ${token}`
                }
            })
            return res.json()
        }
        // queryFn: async()=>{
        //     const res=await axiosSecure(`/carts?email=${user?.email}`)
        //     console.log(res);
        //     return res.data;
        // }
      })

      return [cart,refetch]
}
export default useCart;