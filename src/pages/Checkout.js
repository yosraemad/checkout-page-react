import Bottom from "../components/Checkout Components/Bottom/Bottom";
import CheckoutContent from "../components/Checkout Components/CheckoutContent";
import PageHeader from "../components/Layout/PageHeader";

const CheckoutPage = () => {
  return (
    <div>
      <PageHeader text="Shipping and Payment" isCheckout={true} />
      <CheckoutContent />
      <Bottom />
    </div>
  );
};

export default CheckoutPage;
