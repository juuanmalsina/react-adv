import { ProductProps } from "../interfaces/interfaces";

export const product1: ProductProps = {
    id: "1",
    title: "coffee mug - card",
    img: "images/coffee-mug.png",
  };
  
  export const product2: ProductProps = {
    id: "2",
    title: "coffee mug - meme",
    img: "images/coffee-mug2.png",
  };
  
  export const products: ProductProps[] = [product1, product2];