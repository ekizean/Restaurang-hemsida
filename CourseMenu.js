var CourseMenu = function CourseMenu(_ref) {
  var dishes = _ref.dishes;

  var course = dishes && dishes[0] && dishes[0].course;

  function getDishMarkup(dish) {
    if (dish.packageName) {
      var packageName = dish.packageName,
          price = dish.price,
          description = dish.description,
          dishName = dish.dishName,
          wineName = dish.wineName,
          winePrice = dish.winePrice;


      return React.createElement(
        "div",
        { className: "col-sm-4" },
        React.createElement(
          "dl",
          { className: "package-menu--box" },
          React.createElement(
            "dt",
            null,
            packageName,
            React.createElement(
              "span",
              { className: "pris" },
              price,
              ":-"
            )
          ),
          React.createElement(
            "dd",
            null,
            React.createElement(
              "span",
              { className: "lower-case gold" },
              description && React.createElement(
                "i",
                null,
                description
              )
            ),
            dishName.map(function (dish) {
              return React.createElement(
                "div",
                { className: "package-menu--dish" },
                dish
              );
            })
          ),
          React.createElement(
            "dt",
            null,
            wineName,
            React.createElement(
              "span",
              { className: "pris" },
              winePrice,
              ":-"
            )
          )
        )
      );
    } else {
      var _dishName = dish.dishName,
          _price = dish.price,
          _description = dish.description;

      return React.createElement(
        "div",
        { className: "col-sm-4 dish" },
        React.createElement(
          "dl",
          null,
          React.createElement(
            "dt",
            null,
            _dishName,
            React.createElement(
              "span",
              { className: "pris" },
              _price,
              ":-"
            )
          ),
          React.createElement(
            "dd",
            null,
            _description
          )
        )
      );
    }
  }

  var groupSize = 3;
  var showingContent = void 0;

  if (course === "vin") {
    showingContent = React.createElement(
      "div",
      { className: "wine-content" },
      React.createElement(
        "span",
        { className: "wine-description gold lower-case" },
        "lite l\xE4ngre ner p\xE5 sidan kan ni se v\xE5ra vinprovningar"
      ),
      React.createElement(
        "a",
        { className: "wine-list", href: "./Brezza vinlista.pdf" },
        "Vinlista"
      )
    );
  } else {
    showingContent = dishes.map(function (dish) {
      return getDishMarkup(dish);
    }).reduce(function (acc, curr, index) {
      index % groupSize === 0 && acc.push([]);
      acc[acc.length - 1].push(curr);
      return acc;
    }, []).map(function (rowContent) {
      return React.createElement(
        "div",
        { className: "row" },
        rowContent
      );
    });
  }

  var courseDescriptionPasta = React.createElement(
    "i",
    { className: "lower-case gold" },
    "brezzas hemgjorda pasta"
  );
  var courseDescriptionPizza = React.createElement(
    "i",
    { className: "lower-case gold" },
    "p\xE5 italienska ingredienser och f\xE4rsk mozzarella"
  );

  return React.createElement(
    "div",
    { className: "tab-content" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h2",
        null,
        course
      ),
      course == "pasta" && courseDescriptionPasta,
      course == "pizza" && courseDescriptionPizza,
      React.createElement(
        "div",
        { className: "menu-content" },
        showingContent
      )
    )
  );
};

export default CourseMenu;