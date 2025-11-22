import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;
  return (
      <section className="pt-8 md:pt-16 pb-8 md:pb-16 lg:py-32 min-h-screen flex items-center">

      <div className="container mx-auto pt-[40px]" >
        {/* image and text wrapper */}
         <div className="flex flex-col lg:flex-row items-center  border-2 p-6 rounded-md shadow-2xl gap-8">

          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="w-full max-w-xs lg:max-w-sm" src={image} alt={title} />

          </div>
          {/* text */}
           <div className="flex-1 text-center lg:text-left border-gray-500 border-2 p-4 rounded-md drop-shadow-2xl">

            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-2xl text-blue-500 font-medium mb-6">$ {price}</div>
            <p className="mb-8 bg-gray-200 rounded-md  font-semibold  px-2">{description}</p>
            <button onClick={()=>addToCart(product, product.id)} className='bg-black py-4 px-8 text-white rounded-md border-gray-400 hover:bg-blue-500 hover:text-black hover:text-semibold'>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;