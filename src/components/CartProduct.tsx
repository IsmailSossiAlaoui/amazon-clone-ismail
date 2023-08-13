import Image from "next/image";
import React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";
interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
interface cartProductsProps {
  item: Item;
}

const CartProduct = ({ item }: cartProductsProps) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4
     w-full h-fit py-10 md:pl-10 p-2 flex-col md:flex-row">
      <Image
        className="object-contain "
        width={150}
        height={150}
        src={item.image}
        alt="productImage"
      />
      <div className="flex items-center px-2 gap-4 w-full justify-between ">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-600">
            
            <span className="font-semibold text-amazon_blue">
            Unit Price {item.price}$
            </span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuMinus />
              </span>
            </div>
            <div
              onClick={() => dispatch(deleteProduct(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" /> <p>remove</p>
            </div>
          </div>
        </div>
        <div className="text-sm md:text-lg font-semibold text-amazon_blue">
                {((item.price)*(item.quantity)).toFixed(2)}$
        </div>
      </div>
    </div>
  );
};

export default CartProduct;