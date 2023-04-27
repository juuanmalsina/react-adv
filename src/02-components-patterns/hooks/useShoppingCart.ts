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
      const productInCard: ProductInCardProps = prevShopping[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;

        return {
          ...prevShopping,
          [product.id]: productInCard,
        };
      }

      const { [product.id]: toDelete, ...rest } = prevShopping;

      return rest;
    });
  };

  return {
    shoppingCard,
    onProductCountChange,
  };
};
