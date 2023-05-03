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
        className="bg-dark"
        style={{ backgroundColor: "#70d1f8" }}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductCard.Image
              className="custom-image"
              style={{ boxShadow: "0px 0px 0px 0px grey" }}
            />
            <ProductCard.Title style={{ fontWeight: "bold" }} />
            <ProductCard.Buttons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}> -2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}> +2</button>
            )}
            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
      {/* <div>
        <code>{JSON.stringify(shoppingCard, null, 5)}</code>
      </div> */}
    </div>
  );
};
