import { createContext } from "react";
import { useProduct } from "../hooks/useProducts";
import styles from "../styles/styles.module.css";
import { ProducTitle } from "./ProducTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export interface ProductCardProps {
  children: React.ReactNode;
  product: ProductProps;
  className?: string;
  style?: React.CSSProperties;
}
export interface ProductProps {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: ProductProps;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
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
