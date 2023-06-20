import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useAdmin = () => {
   const {user}=useAuth();
//    console.log(user);
   const {  data: isAdmin,isLoading: isAdminLoading} = useQuery({
        
    queryKey: ['isAdmin',user],
    queryFn: async()=>{
        const res=await fetch(`http://localhost:5000/users/admin/${user?.email}`)
        return res.json()
    }
  })
  return [isAdmin,isAdminLoading]
};

export default useAdmin;