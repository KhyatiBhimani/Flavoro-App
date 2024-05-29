import React from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart,decrementQty,incrementQty } from "../Redux/Slices/CartSlice";
import toast, { Toaster } from 'react-hot-toast';

const ItemCart = ({id, name, qty, price, img }) => {
  const dispatch =useDispatch()
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2  mb-3">
      <img src={img} className="w-[50px] h-[50px]"></img>
      <div className="leading-5" >
        <div className="flex justify-between items-center">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <MdDelete onClick={()=> {dispatch(removeFromCart({id,img,name,price,qty}));
      toast(`${name} Removed from Cart!`, {
        icon: '👏',
      });}} className="absolute right-7 text-gray-600 cursor-pointer"/>
        </div>

        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <GoPlus onClick={()=>qty > 1?dispatch(incrementQty({id})) :  (qty = 0)}  className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all  ease-linear cursor-pointer" />
            <span className="">{qty}</span>
            <LuMinus onClick={()=>qty > 1? dispatch(decrementQty({id})) :  (qty = 0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all  ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
