import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProducTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>{title || product.title}</span>
  );
};
