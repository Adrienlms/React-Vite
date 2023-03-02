import React, { useState } from "react";
import cartIcon from "../assets/icon-cart-white.svg";
import closeIcon from "../assets/icon-close-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { data } from "../constants/images";

const Product = ({ price, qty, setQty }: { price: number, qty: number, setQty: (value: React.SetStateAction<number>) => void }) => {
  const products = [...data];
  const [value, setValue] = useState(0);

  const [modal, setModal] = useState(true);

  const largeImage = products[value].largeImg;

  const fixedPrice = price.toFixed(2);

  const totalPrice = (parseFloat(fixedPrice) * qty);
  const totalPriceFixed = totalPrice.toFixed(2);

  const decrease = () => {
    if (qty === 0) {
      return;
    }
    setQty((prev) => prev - 1);
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const goBack = () => {
    value === 0 ? setValue(0) : setValue((prev) => prev - 1);
  };

  const goForward = () => {
    value === products.length - 1
      ? setValue(products.length - 1)
      : setValue((prev) => prev + 1);
  };

  return (
    <main>
      <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="hidden md:block large-image">
            <img
              onClick={toggleModal}
              className="object-cover cursor-pointer rounded-xl w-[400px] h-[400px]"
              src={largeImage}
              alt="snekers-photo"
            />
          </div>
          <div className="md:hidden large-image">
            <img
              onClick={goBack}
              className="bg-white rounded-full p-4 absolute top-[15%] left-6 cursor-pointer"
              src={prevIcon}
              alt="go-back"
            />
            <img
              className="w-[100%] h-[300px] object-cover"
              src={largeImage}
              alt="snekers-photo"
            />
            <img
              onClick={goForward}
              className="bg-white rounded-full p-4 absolute top-[15%] left-[82%] cursor-pointer"
              src={nextIcon}
              alt="go-forward"
            />
          </div>
        </div>
          <div className="small-images hidden md:flex mt-7 justify-between w-[400px]">
            {data.map((img, idx) => {
              return (
                <div key={img.id} className="single-image">
                  <img
                    onClick={() => setValue(idx)}
                    className="w-[80px] cursor-pointer rounded-xl transition-all hover:opacity-25 hover:border-[3px] border-orange"
                    src={img.smallImg}
                    alt="product-photo"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`${
            modal ? "hidden" : "hidden md:block"
          } absolute -top-[20%] right-0 -bottom-[20%] left-0 bg-lightBlack`}
        >
          <div
            className={
              "basis-1/2 flex flex-col justify-between absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"}>
                
              <div className="size mb-6">
              <p className="text-[14px] tracking-wider uppercase font-[700] mb-2">
                Size
              </p>
              <div className="flex items-center">
                <button className="size-button selected">7</button>
                <button className="size-button">8</button>
                <button className="size-button">9</button>
                <button className="size-button">10</button>
                <button className="size-button">11</button>
              </div>
            </div>
      
            <div className="qty mb-6">
              <p className="text-[14px] tracking-wider uppercase font-[700] mb-2">
                Quantity
              </p>
              <div className="flex items-center">
                <button className="qty-button" onClick={decrease}>
                  -
                </button>
                <input
                  type="text"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="qty-input"
                />
                <button
                  className="qty-button"
                  onClick={() => setQty((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
      
            <div className="total-price mb-6">
              <p className="text-[14px] tracking-wider uppercase font-[700] mb-2">
                Total Price
              </p>
              <p className="text-lg font-[700]">${totalPriceFixed}</p>
            </div>
      
            <button className="add-to-cart-button flex items-center">
              <img src={cartIcon} alt="cart-icon" className="mr-2" />
              Add to cart
            </button>
      
            <p className="text-[14px] mt-4 tracking-widest font-light">
              Free shipping and returns
            </p>
          </div>
        </div>
      </main>
    );
  };
export default Product;