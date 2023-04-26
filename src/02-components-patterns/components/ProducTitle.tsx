import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface ProducTitleProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProducTitle = ({ title, className, style }: ProducTitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title || product.title}
    </span>
  );
};
