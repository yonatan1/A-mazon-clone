    import React from "react";
    import Rating from "@mui/material/Rating";
    import CurrencyFormat from "../currencyFormat/CurrencyFormat";
    import classes from "./Proudct.module.css";

    function Productcard({Product}) {
        const {image,title,id,rating,Price}=Product;
        return (
        <div className={`${classes.card_container}`}>
            <a href="">
                <img src={image} alt="" />
            </a>
            <div>
                <h3>{title}</h3>
            <div className={classes.rating}>
                {/* {rating} */}
                <Rating value={rating.rate} precision={0.1} />
                {/* count */}
                <small>{rating.count}</small>
            </div>
            <div>
                <CurrencyFormat amount={Price} />
            </div>
            <button className={classes.button}>
                add to cart
                </button>
            
            </div>
        </div>
        );
    };

    export default Productcard
