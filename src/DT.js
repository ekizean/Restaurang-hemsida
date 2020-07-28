const DT = ({ name, price }) => {

  return (
    <dt className="dish-title">
      <span>{name}</span>
      <span className="price">{price}</span>
    </dt>
  );
};

export default DT;
