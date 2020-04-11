const Dish = ({ dish }) => {
  const { dishName, price, description } = dish;
  return (
    <div className="col-sm-4 dish">
      <dl>
        <dt>
          {dishName}
          <span className="price">{price}</span>
        </dt>
        <dd>{description}</dd>
      </dl>
    </div>
  );
};

export default Dish;
