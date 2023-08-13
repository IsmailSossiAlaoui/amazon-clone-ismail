import React from "react";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: any) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden "
          >
            <div className="w-full h-[260px] relative">
              <Image
                src={image}
                width={300}
                height={300}
                alt="product image"
                className="w-full h-full object-contain scale-90 hover:scale-100 transition-transform duration-300"
              />

              <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md  flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300 ">
                <span onClick={() => dispatch(addToCart({_id:_id,
                brand : brand,
                category: category,
                image: image,
                description:description,
                isNew : isNew,
                oldPrice:oldPrice,
                price:price,
                title:title,
                quantity:1,
                }))} className="w-full h-full  border-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                  <HiShoppingCart />
                </span>
                <span onClick={() => dispatch(addToFavorite({_id:_id,
                brand : brand,
                category: category,
                image: image,
                description:description,
                isNew : isNew,
                oldPrice:oldPrice,
                price:price,
                title:title,
                quantity:1,
                }))} className="w-full h-full  border-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                  <FaHeart />
                </span>
              </div>
              {isNew && (
                <p className="absolute top-0 right-0 text-amazon_blue text-xs tracking-wide animate-bounce">
                  save {(oldPrice - price).toFixed(2)}$ !
                </p>
              )}
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1 h-50">
              <p className="text-xs text-gray-500 tracking-wide ">{category}</p>
              <p className="text-base font-medium h-10">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through">{oldPrice}$</span>
                <span className="text-amazon_blue font-semibold">{price}$</span>
              </p>

              <p className="text-xs text-gray-600 text-justify h-14 ">
                {description.substring(0, 100)}
              </p>
              <button
                onClick={() => dispatch(addToCart({_id:_id,
                brand : brand,
                category: category,
                image: image,
                description:description,
                isNew : isNew,
                oldPrice:oldPrice,
                price:price,
                title:title,
                quantity:1,
                }))}
                className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2 "
              >
                add to cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
