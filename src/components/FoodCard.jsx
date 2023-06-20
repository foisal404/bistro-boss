import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const FoodCard = ({item}) => {
  const [,refetch]=useCart();
    const {_id,name,recipe,image,price,category}=item
    const {user}=useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();
    const handleCart=(item)=>{
      // console.log(item);
      if(user&& user?.email){
        // console.log(user);
        const item={itemId:_id,email:user?.email,name,image,price}
        fetch("http://localhost:5000/carts",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            refetch();
            Swal.fire({
              title: 'Food add to the cart',
              icon: 'success',
            }
              )
          }
        })
      }
      else{
        navigate('/login',  {state: {from: location}})
      }

    }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="food"
          />
        </figure>
        <div className="card-body text-center">
            <p className="bg-slate-900 text-white absolute px-5 top-5 right-5">${price}</p>
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary mx-auto" onClick={()=>handleCart(item)}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
