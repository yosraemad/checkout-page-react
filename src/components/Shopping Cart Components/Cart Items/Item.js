const Item = (props) => {
  return (
    <>
      <div className={props.detailsClassName}>
        <img alt="product" src={props.image} />
        <div>
          <p>{props.name}</p>
          <p className={props.idClassName}>{"#" + props.id}</p>
        </div>
      </div>
      <p>{props.color}</p>
      <p>{props.size}</p>
      <div className={props.buttonClassName}>
        <div>-</div>
        <button>{props.amount}</button>
        <div className={props.boldClassName}>+</div>
      </div>
      <p className={props.boldClassName}>{`$${props.price}`}</p>
      <button className={props.removeButtonClassName}>x</button>
    </>
  );
};

export default Item;
