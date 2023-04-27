import { products } from "../data/data";
import { ProductCard } from "../components/ProductCard";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { shoppingCard, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            className="bg-dark"
            style={{ backgroundColor: "#70d1f8" }}
            onChange={onProductCountChange}
            value={shoppingCard[product.id]?.count || 0}
          >
            <ProductCard.Image
              className="custom-image"
              style={{ boxShadow: "0px 0px 0px 0px grey" }}
            />
            <ProductCard.Title style={{ fontWeight: "bold" }} />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCard).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            value={product.count}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      {/* <div>
        <code>{JSON.stringify(shoppingCard, null, 5)}</code>
      </div> */}
    </div>
  );
};
