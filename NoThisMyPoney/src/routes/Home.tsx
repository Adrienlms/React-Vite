import React, { useState } from "react";
import cartIcon from "../assets/icon-cart-white.svg";
import closeIcon from "../assets/icon-close-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { data } from "../constants/images";
import Navbar from "./Navbar";
import shop from "../assets/shop.jpg";
import converse from "../assets/converse.jpg";


const About = () => {

  return (
    <main>
      <Navbar/>

      <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[50px] relative">
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="hidden md:block large-image">
            <img
              className="object-cover cursor-pointer rounded-xl w-[auto] h-[auto]"
              src={shop}
              alt="snekers-photo"
            />
          </div>
        </div>
        <div className="description p-6 md:basis-1/2 md:py-[40px]">
          <p className="text-orange text-[24px] tracking-widest uppercase font-[700] mb-6">
            NoThisPoney
          </p>
          
          <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
          Tous les produits sont authentifiés par nos experts avant d'être envoyés. Tous les Produits de NoThisPoney Sont Authentifiés par nos Experts Avant de Vous Être Envoyés. 15000 avis certifiés. Service clients à Paris. Sneakers limitées. Contact mail et téléphone.
          </p>
          <button className="add-btn border-none bg-orange-600 rounded-lg text-white font-[700] px-[70px] py-[40px] mt-4 md:mt-0 md:py-0 md:text-[14px] transition-all btn-shadow hover:opacity-50">
              Contactez nous
            </button>
        </div>
      </div>


      <div className="main-wrapper flex flex-col md:flex-row md:px-[200px]  md:py-[50px] relative">
      <div className="description p-6 md:basis-1/2 md:py-[40px]">
          <p className="text-orange text-[24px] tracking-widest uppercase font-[700] mb-6">
            NoThisPoney
          </p>
          
          <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
          Tous les produits sont authentifiés par nos experts avant d'être envoyés. Tous les Produits de NoThisPoney Sont Authentifiés par nos Experts Avant de Vous Être Envoyés. 15000 avis certifiés. Service clients à Paris. Sneakers limitées. Contact mail et téléphone.
          </p>
          <button className="add-btn border-none bg-orange-600 rounded-lg text-white font-[700] px-[70px] py-[40px] mt-4 md:mt-0 md:py-0 md:text-[14px] transition-all btn-shadow hover:opacity-50">
              Contactez nous
            </button>
        </div>
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="hidden md:block large-image">
            <img
              className="object-cover cursor-pointer rounded-xl w-[auto] h-[auto]"
              src={converse}
              alt="snekers-photo"
            />
          </div>
        </div>
        
      </div>

    </main>
  );
};

export default About;
