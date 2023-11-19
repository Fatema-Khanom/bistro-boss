import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {image,price,name,recipe}=item ;
    const {user}= useAuth
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart=food=>{
            console.log(food);

            if (user && user.email) {
                //send cart item to the database

            }

            else {
                Swal.fire({
                    title: "You are not Logged In",
                    text: "Please login to add to the cart?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, login!"
                }) .then((result) => {
                    if (result.isConfirmed) {
                        //   send the user to the login page
                        navigate("/login", { state: { from: location } })
                    }
                });

            }
    
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center ">
                <h2 className="card-title">{name}</h2>
                <p className="h-20">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart(item)}  className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;