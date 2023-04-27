import { createContext } from "react";
import { useProduct } from "../hooks/useProducts";
import styles from "../styles/styles.module.css";
import { ProducTitle } from "./ProducTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product,value });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProducTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
