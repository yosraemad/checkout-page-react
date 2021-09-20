import PageHeader from "../components/Layout/PageHeader";
import CartItems from "../components/Shopping Cart Components/Cart Items/CartItems";
import OrdersDetails from "../components/Shopping Cart Components/Orders Details/OrdersDetails";

const ShoppingCartPage = () => {
  return (
    <div>
      <PageHeader text="Shopping Cart" isCheckout={false} />
      <CartItems />
      <OrdersDetails />
    </div>
  );
};

export default ShoppingCartPage;
