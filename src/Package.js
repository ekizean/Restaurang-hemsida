const Package = ({ dish }) => {
  const dishName = dish.dishName.split(",");
  const { packageName, price, description, wineName, winePrice } = dish;

  return (
    <div className="col-sm-4">
      <dl className="package-menu--box">
        <dt>
          {packageName}
          <span className="price">{price}</span>
        </dt>
        <dd>
          <span className="lower-case gold">
            {description && <i>{description}</i>}
          </span>
          {dishName.map((dish) => {
            return (
              <div key={dish} className="package-menu--dish">
                {dish}
              </div>
            );
          })}
        </dd>
        <dt>
          {wineName}
          <span className="price">{winePrice}</span>
        </dt>
      </dl>
    </div>
  );
};

export default Package;
