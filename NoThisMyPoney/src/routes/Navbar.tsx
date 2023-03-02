import React, { useState } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/icon-cart.svg";
import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";
import avatarImg from "../assets/image-avatar.png";
import smallImg1 from "../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/icon-delete.svg";
import { Link} from "react-router-dom";

import Home from "./Home";
import Collections from "./Collections";
import Product from "./Product";
import About from "./About";
import SignIn from "./SignIn";

const Navbar = () => {
  const price = 125;
  const[qty, setQty] = useState(0);

  const [toggle, setToggle] = useState(true);
  const [toggleCart, setToggleCart] = useState(true);

  const fixedPrice : number = price;

  const totalPrice : number = fixedPrice * qty;

  const totalPriceFixed : string = totalPrice.toFixed(2);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="w-[100%] py-[15px] pr-[30px] mx-auto md:border-b-2 flex justify-between items-center">
      <div className="left flex space-x-4">
        <img
          onClick={toggleHandler}
          className="md:hidden object-contain cursor-pointer"
          src={menuIcon}
          alt="menu"
        />
        <Link to="/">
        <img
          className="w-[100%] h-[30px] md:pr-[100px] cursor-pointer"
          src={logo}
          alt="sneakers-logo"
        />
        </Link>

        <ul className="hidden md:flex space-x-10">
          <li>
            <Link to="/" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Accueil</Link>
          </li>
          <li>
            <Link to="/collections" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Collections</Link>
          </li>
          <li>
            <Link to="/product" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Produits</Link>
          </li>
          <li>
          <Link to="/about" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Contact</Link>
          </li>
        </ul>
      </div>

      <ul
        className={`${
          toggle ? "hidden" : "block"
        } md:hidden bg-white absolute top-0 left-0 z-10 w-[70%] h-[100vh] pt-[100px] pl-6 space-y-6 font-[700] text-[18px]`}
      >
        <img
          onClick={toggleHandler}
          className="-mt-[75px] mb-14 md:hidden object-contain cursor-pointer"
          src={closeIcon}
          alt="menu"
        />
          <li>
            <Link to="/" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Accueil</Link>
          </li>
          <li>
            <Link to="/collections" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Collections</Link>
          </li>
          <li>
            <Link to="/product" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Produits</Link>
          </li>
          <li>
          <Link to="/about" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Contact</Link>
          </li>
          <li>
          <Link to="/signIn" className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black">Login</Link>
          </li>
      </ul>

      <div className="right flex space-x-5 md:space-x-10 items-center relative">
        <span
          className={`${
            qty > 0 ? "flex" : "hidden"
          } bg-orange px-2 text-[10px] rounded-[12px] text-white absolute top-0 left-7 md:left-12 md:top-2`}
        >
          {qty}
        </span>
        <img
          onClick={() => setToggleCart((prev) => !prev)}
          className="h-[20px] cursor-pointer"
          src={cartIcon}
          alt="cart-icon"
        />
        
        <Link to="/signIn">
        <img
          className="h-[30px] md:h-[50px] cursor-pointer transition-all hover:border-4 rounded-full border-orange"
          src={avatarImg}
          alt="avatar-image"
        />
        </Link>
      </div>

      {qty !== 0 ? (
        <div
          className={`${
            toggleCart ? "hidden" : "block"
          } cart-container transition-all z-10 w-[350px] md:w-[370px] bg-white shadow-2xl rounded-lg py-8 absolute top-[11%] left-3 md:top-[12%] md:left-[65%]`}
        >
          <p className="pl-5 font-[700]">Cart</p>
          <hr className="my-4" />
          <div className="details flex justify-between px-5">
            <div className="small-img-container mb-4">
              <img className="w-[50px] rounded-lg" src={smallImg1} alt="" />
            </div>
            <div className="text">
              <p className="text-darkGrayishBlue">
                Fall limited edition sneakers
              </p>
              <span className="text-darkGrayishBlue mr-2">${fixedPrice}</span>
              <span className="text-darkGrayishBlue mr-2">x</span>
              <span className="text-darkGrayishBlue mr-2">{qty}</span>
              <span className="font-[700]">${totalPriceFixed}</span>
            </div>
            <div className="remove-container">
              <img
                onClick={() => setQty(0)}
                className="h-[20px] mt-3 cursor-pointer"
                src={deleteIcon}
                alt="remove-from-cart"
              />
            </div>
          </div>
          <button className="bg-orange text-white mx-5 block rounded-lg py-4 w-[90%] transition-all hover:opacity-50">
            Checkout
          </button>
        </div>
      ) : (
        <div
          className={`${
            toggleCart ? "hidden" : "block"
          } cart-container transition-all z-10 w-[350px] md:w-[370px] h-[240px] bg-white shadow-2xl rounded-lg py-8 absolute top-[11%] left-3 md:top-[12%] md:left-[65%]`}
        >
          <Link to="/panier"><p className="pl-5 font-[700]">Votre Panier</p></Link>
          <hr className="my-4" />
          <div className="details flex justify-center mt-14">
            <p className="font-[700] text-darkGrayishBlue">
              Votre panier est vide
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
