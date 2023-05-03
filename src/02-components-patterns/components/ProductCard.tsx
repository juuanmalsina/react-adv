import { createContext } from "react";
import { useProduct } from "../hooks/useProducts";
import styles from "../styles/styles.module.css";
import { ProducTitle } from "./ProducTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          reset,
          increaseBy,
        })}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProducTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
