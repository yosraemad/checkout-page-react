const CartItem = (props) => {
  return (
    <div className={props.className}>
      <div className={props.className}>
        <img alt={props.name} src={props.image} />
        <div>
          <p>{props.name}</p>
          <p className={props.idClassName}>{"#" + props.id}</p>
        </div>
      </div>
      <p>{"$" + props.price}</p>
    </div>
  );
};

export default CartItem;
