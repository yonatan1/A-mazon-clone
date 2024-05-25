import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../../Api/endPoint";

import classes from "./Results.module.css";
import Productcard from "../../Product/Productcard";

function Results() {
  const [results, SetResults] = useState([]);
  const { CategoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${ProductUrl}/products/category/${CategoryName.toLowerCase()}`)
      .then((res) => {
        SetResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [CategoryName]);
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{CategoryName}</p>
        <hr />
        <div className={classes.products_Container}>
          {results?.map((Product) => (
            <Productcard
              key={Product.id}
              Product={Product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
