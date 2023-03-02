import React, { useState } from "react";
import cartIcon from "../assets/icon-cart-white.svg";
import closeIcon from "../assets/icon-close-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { data } from "../constants/images";
import Navbar from "./Navbar";

const About = () => {
  const price = 125;
  const products = [...data];
  const [value, setValue] = useState(0);

  const[qty, setQty] = useState(0);

  const [modal, setModal] = useState(true);

  const largeImage = products[value].largeImg;

  const fixedPrice : number = price;

  const totalPrice : number = fixedPrice * qty;

  const totalPriceFixed : string = totalPrice.toFixed(2);

  const decrease = () => {
    if (qty === 0) {
      return;
    }
    {
      setQty((prev:any) => prev - 1);
    }
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
      <Navbar/>
      <div>

        
      

        <div className="description p-6 md:basis-1/2 md:py-[40px] ">
          <p className="text-orange-600 text-[14px] tracking-widest uppercase font-[700] mb-8 flex justify-center">
            Contactez nous
          </p>
          <p><hr className="hover:border-b-2 border-orange hover:pb-[53px]"/></p>
          <p className="text-[19px] mt-20 mb-6 flex justify-center">NoThisMyPoney</p>
          <p className="text-[17px] flex justify-center">26 Av. Tony Garnier 3ème étage, 69007 Lyon</p>
          <p className="text-[17px]  mb-6 flex justify-center"><a href="tel:+336 12 34 56 78">+33 6 12 34 56 78</a></p>
          <div className="flex justify-center">
            <a href="mailto:arthur.danon@ecole-isitech.fr">
            <button className="add-btn border-none bg-orange-600 rounded-lg text-white font-[700] px-[70px] py-[181px] mt-4 md:mt-0 md:py-0 md:text-[14px] transition-all btn-shadow hover:opacity-50">
              Envoyer un mail
            </button>
            </a>
          </div>
          </div>
        </div>
    </main>
  );
};

export default About;
