import { createContext } from "react";
import { useProduct } from "../hooks/useProducts";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";
import { ProducTitle } from './ProducTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProducTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
