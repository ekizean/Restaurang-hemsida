import DT from "./DT.js";

const Package = ({ dish }) => {
  const dishName = dish.dishName.split(",");
  const { packageName, price, description, wineName, winePrice } = dish;

  return (
    <div className="col-sm-4">
      <dl className="package-menu--box">
        <DT name={packageName} price={price} />
        <dd>
          <span className="lower-case gold">
            {description && <i>{description}</i>}
          </span>
          {dishName.map((dish) => {
            return (
              <div key={dish} className="package-menu--dish">
                {dish.trim()}
              </div>
            );
          })}
        </dd>
        <DT name={wineName} price={winePrice} />
      </dl>
    </div>
  );
};

export default Package;
