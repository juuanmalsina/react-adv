import { ProductCard } from "../components/ProductCard";
import "../styles/custom-styles.css";
const product = {
  id: "1",
  title: "coffee",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>

      <ProductCard
        product={product}
        className="bg-dark text-white"
        style={{ backgroundColor: "#70d1f8" }}
      >
        <ProductCard.Image className="custom-image" style={{boxShadow:'0px 0px 0px 0px grey'}} />
        <ProductCard.Title style={{fontWeight:'bold'}} />
        <ProductCard.Buttons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};
