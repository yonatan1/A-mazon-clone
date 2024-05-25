import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Productcard from "../../Product/Productcard";
import { ProductUrl } from "../../../Api/endPoint";
import Loader from "../../Loader/Loader";

function ProductDetail() {
  const [Product, setProduct] = useState({});
  const [isLoading, setIsLoding] = useState(false);
  const { ProductId } = useParams();

  useEffect(() => {
    setIsLoding(true);
    axios
      .get(`${ProductUrl}/Products/${ProductId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoding(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoding(false);
      });
  }, [ProductId]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <Productcard
          Product={Product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
