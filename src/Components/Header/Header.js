import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../../DataProvider/Dataprovider";

const Header = () => {
  const [{ basket }, disptasch] = useContext(DataContext);
  const [location, setLocation] = useState({});
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  useEffect(() => {
    fetch("https://ipapi.co/8.8.8.8/json/")
      .then(function (response) {
        response.json().then((jsonData) => {
          setLocation(jsonData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon log"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>{location?.country_name}</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value=""> All</option>
            </select>
            <input type="text" />
            <FaSearch size={25} />
          </div>
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to=" ">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
