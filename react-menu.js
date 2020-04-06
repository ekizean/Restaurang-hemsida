"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import menu from "../menu.js";

var ReactMenu = function (_React$Component) {
  _inherits(ReactMenu, _React$Component);

  function ReactMenu(props) {
    _classCallCheck(this, ReactMenu);

    var _this = _possibleConstructorReturn(this, (ReactMenu.__proto__ || Object.getPrototypeOf(ReactMenu)).call(this, props));

    _this.clickOnCourseButton = function (course) {
      _this.setState({ course: course });
    };

    _this.state = { course: "Antipasti" };
    return _this;
  }

  _createClass(ReactMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "menu" },
        React.createElement(
          "div",
          { className: "course-navigator" },
          React.createElement(
            "div",
            { className: "course-row" },
            React.createElement(
              "button",
              {
                className: "course-button" + (this.state.course.toLowerCase() == "antipasti" ? " selected" : ""),
                onClick: function onClick() {
                  return _this2.clickOnCourseButton(event.target.innerText);
                }
              },
              "Antipasti"
            ),
            React.createElement(
              "button",
              {
                className: "course-button" + (this.state.course.toLowerCase() == "pasta" ? " selected" : ""),
                onClick: function onClick() {
                  return _this2.clickOnCourseButton(event.target.innerText);
                }
              },
              "Pasta"
            ),
            React.createElement(
              "button",
              {
                className: "course-button" + (this.state.course.toLowerCase() == "pizza" ? " selected" : ""),
                onClick: function onClick() {
                  return _this2.clickOnCourseButton(event.target.innerText);
                }
              },
              "Pizza"
            ),
            React.createElement(
              "button",
              {
                className: "course-button" + (this.state.course.toLowerCase() == "secondi" ? " selected" : ""),
                onClick: function onClick() {
                  return _this2.clickOnCourseButton(event.target.innerText);
                }
              },
              "Secondi"
            )
          ),
          React.createElement(
            "div",
            { className: "course-row" },
            React.createElement(
              "button",
              {
                className: "course-button" + (this.state.course.toLowerCase() == "dolci" ? " selected" : ""),
                onClick: function onClick() {
                  return _this2.clickOnCourseButton(event.target.innerText);
                }
              },
              "Dolci"
            ),
            React.createElement(
              "button",
              {
                className: "course-button" + (this.state.course.toLowerCase() == "avsmakning" ? " selected" : ""),
                onClick: function onClick() {
                  return _this2.clickOnCourseButton(event.target.innerText);
                }
              },
              "Avsmakning"
            ),
            React.createElement(
              "button",
              {
                className: "course-button" + (this.state.course.toLowerCase() == "vin" ? " selected" : ""),
                onClick: function onClick() {
                  return _this2.clickOnCourseButton(event.target.innerText);
                }
              },
              "Vin"
            )
          )
        ),
        React.createElement(CourseMenu, {
          course: this.state.course.toLowerCase(),
          dishes: menu[this.state.course.toLowerCase()]
        })
      );
    }
  }]);

  return ReactMenu;
}(React.Component);

var CourseMenu = function CourseMenu(_ref) {
  var course = _ref.course,
      dishes = _ref.dishes;

  function getDishMarkup(dish) {
    if (dish.packageName) {
      var packageName = dish.packageName,
          price = dish.price,
          description = dish.description,
          disches = dish.disches,
          wineName = dish.wineName,
          winePrice = dish.winePrice;


      return React.createElement(
        "div",
        { "class": "col-sm-4" },
        React.createElement(
          "dl",
          { "class": "package-menu--box" },
          React.createElement(
            "dt",
            null,
            packageName,
            React.createElement(
              "span",
              { "class": "pris" },
              price,
              ":-"
            )
          ),
          React.createElement(
            "dd",
            null,
            React.createElement(
              "span",
              { "class": "lower-case gold" },
              description && React.createElement(
                "i",
                null,
                description
              )
            ),
            disches.map(function (dish) {
              return React.createElement(
                "div",
                { "class": "package-menu--dish" },
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
              { "class": "pris" },
              winePrice,
              ":-"
            )
          )
        )
      );
    } else {
      var dishName = dish.dishName,
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
            dishName,
            React.createElement(
              "span",
              { "class": "pris" },
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
      showingContent
    )
  );
};

var domContainer = document.querySelector("#react-menu");
ReactDOM.render(React.createElement(ReactMenu, null), domContainer);