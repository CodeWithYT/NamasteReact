import { useState } from "react";
import { LOGO, CART, WISHLIST, SWIGGY } from "../utils/Images";
import { data } from "../utils/data";
import Search from "./Search";

const Header = ({api, freshList, setFreshList, originalData}) => {
    return (
        <div className="header">
            <div className="left-container">
                <div className="image-container">
                    <img src={SWIGGY} alt="logo" />
                </div>
            </div>
            <div className="right-container">
                <Search 
                    originalData = {originalData}
                    freshList = {freshList}
                    setFreshList = {setFreshList}
                />
                <div className="profile-container">
                </div>
                <img src= { WISHLIST } alt="wish-list"></img>
                <img src= { CART } alt="cart"></img>
            </div>
        </div>
    )
}
export default Header;