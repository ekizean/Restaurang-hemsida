const CourseMenu = ({ dishes }) => {
  const course = dishes && dishes[0] && dishes[0].course;

  function getDishMarkup(dish) {
    if (dish.packageName) {
      const {
        packageName,
        price,
        description,
        disches,
        wineName,
        winePrice,
      } = dish;

      return (
        <div className="col-sm-4">
          <dl className="package-menu--box">
            <dt>
              {packageName}
              <span className="pris">{price}:-</span>
            </dt>
            <dd>
              <span className="lower-case gold">
                {description && <i>{description}</i>}
              </span>
              {disches.map((dish) => {
                return <div className="package-menu--dish">{dish}</div>;
              })}
            </dd>
            <dt>
              {wineName}
              <span className="pris">{winePrice}:-</span>
            </dt>
          </dl>
        </div>
      );
    } else {
      const { dishName, price, description } = dish;
      return (
        <div className="col-sm-4 dish">
          <dl>
            <dt>
              {dishName}
              <span className="pris">{price}:-</span>
            </dt>
            <dd>{description}</dd>
          </dl>
        </div>
      );
    }
  }

  const groupSize = 3;
  let showingContent;

  if (course === "vin") {
    showingContent = (
      <div className="wine-content">
        <span className="wine-description gold lower-case">
          lite längre ner på sidan kan ni se våra vinprovningar
        </span>
        <a className="wine-list" href="./Brezza vinlista.pdf">
          Vinlista
        </a>
      </div>
    );
  } else {
    showingContent = dishes
      .map((dish) => {
        return getDishMarkup(dish);
      })
      .reduce((acc, curr, index) => {
        index % groupSize === 0 && acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
      }, [])
      .map((rowContent) => {
        return <div className="row">{rowContent}</div>;
      });
  }

  const courseDescriptionPasta = (
    <i className="lower-case gold">brezzas hemgjorda pasta</i>
  );
  const courseDescriptionPizza = (
    <i className="lower-case gold">
      på italienska ingredienser och färsk mozzarella
    </i>
  );

  return (
    <div className="tab-content">
      <div className="container">
        <h2>{course}</h2>
        {course == "pasta" && courseDescriptionPasta}
        {course == "pizza" && courseDescriptionPizza}
        <div className="menu-content">{showingContent}</div>
      </div>
    </div>
  );
};

export default CourseMenu;
