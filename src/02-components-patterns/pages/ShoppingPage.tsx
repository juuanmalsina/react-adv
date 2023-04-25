import { ProductCard } from "../components/ProductCard";

const product = {
  id: "1",
  title: "coffee",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>

      <ProductCard product={product}>
        <>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </>
      </ProductCard>
    </div>
  );
};
