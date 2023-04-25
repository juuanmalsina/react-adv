import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  const imageToShow = img || product.img;
  return (
    <img
      className={styles.productImg}
      src={imageToShow ? imageToShow : noImage}
      alt="coffe mug"
    />
  );
};
