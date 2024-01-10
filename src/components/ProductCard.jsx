import React, { useEffect } from 'react'
import { useQuery } from 'react-query';

function ProductCard({item, setCartItem}) {
    const [isSaved, setIsSaved] = React.useState(false);
    useEffect(() => {
        if (localStorage.getItem('cartItems')) {
          const cartItems = JSON.parse(localStorage.getItem('cartItems'));
          if (cartItems.includes(item.id)) {
            setIsSaved(true);
          } else {
            setIsSaved(false);
          }
        } else {
          localStorage.setItem('cartItems', JSON.stringify([]));
        }
      }, [item.id]);

    const addToCart = async (item) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        setCartItem(cartItems)
        if (!isSaved) {
            cartItems.push(item);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          setIsSaved(true);
         }
      };
  return (
    <div className="rounded-xl relative hover:scale-105 duration-500 cursor-pointer">
    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
      <p className=" font-bold text-2xl px-2 pt-4">{item.name}</p>
      <p className="px-2">{`${item?.price_sign} ${item.price}`}</p>
      <button
        onClick={() => addToCart(item)}
        className="border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md"
      >
       Add to Cart
      </button>
    </div>
    <img
      className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      src={item.api_featured_image}
      alt={item.name}
    />
  </div>
  )
}

export default ProductCard
