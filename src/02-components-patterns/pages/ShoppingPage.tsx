import { product1 as product } from "../data/data";
import { ProductCard } from "../components/ProductCard";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>

      <ProductCard
        key={product.title}
        product={product}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />

          </>
        )}
      </ProductCard>
    </div>
  );
};
