import { useState } from "react";
import { ProductInCardProps, ProductProps } from "../interfaces/interfaces";
export const useShoppingCart = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: ProductInCardProps;
  }>({});

  const onProductCountChange = ({
    product,
    count,
  }: {
    product: ProductProps;
    count: number;
  }) => {
    setShoppingCard((prevShopping) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevShopping;
        return rest;
      }

      return {
        ...prevShopping,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCard,
    onProductCountChange,
  };
};
