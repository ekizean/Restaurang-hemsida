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

  var groupSize = 3;

  var rows = dishes.map(function (dish) {
    var dishName = dish.dishName,
        price = dish.price,
        description = dish.description;

    return React.createElement(
      "div",
      { className: "col-sm-4" },
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
            price,
            ":-"
          )
        ),
        React.createElement(
          "dd",
          null,
          description
        )
      )
    );
  }).reduce(function (acc, curr, index, array) {
    index % groupSize === 0 && acc.push([]);
    acc[acc.length - 1].push(curr);

    var isLastElement = array.length - index == 1;
    if (isLastElement) {
      var numberOfEmptyColSm4ToAddInTheLastRow = groupSize % array.length;
      for (var i = 0; i < numberOfEmptyColSm4ToAddInTheLastRow; i++) {
        acc[acc.length - 1].push(React.createElement("div", { className: "col-sm-4" }));
      }
    }

    return acc;
  }, []).map(function (rowContent) {
    return React.createElement(
      "div",
      { className: "row" },
      rowContent
    );
  });

  return React.createElement(
    "div",
    { className: "tab-content" },
    React.createElement(
      "h2",
      null,
      course
    ),
    rows
  );
};

var domContainer = document.querySelector("#react-menu");
ReactDOM.render(React.createElement(ReactMenu, null), domContainer);