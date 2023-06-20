import { Helmet } from "react-helmet";
import SectionTitles from "../../../components/SectionTitles";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";

const MyCart = () => {
    const [cart,refetch]=useCart();
    // console.log(cart);
    const handleDelate=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/carts/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.deletedCount>0){
                refetch();
            }
        })
    }
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      {/* <SectionTitles
        subHeading={"Hurry Up!"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitles> */}
      <div className="overflow-x-auto w-full px-20">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item,idx)=><tr key={item._id}>
                    <th>
                      {idx+1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td className="text-end">${item.price}</td>
                    <th>
                      <button className="btn btn-ghost text-rose-50 bg-red-400" onClick={()=>handleDelate(item._id)}><FaTrash/></button>
                    </th>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
