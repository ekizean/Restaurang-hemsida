"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import menu from "../menu.js";
import CourseMenu from "./CourseMenu.js";
import NavButton from "./NavButton.js";

var ReactMenu = function (_React$Component) {
  _inherits(ReactMenu, _React$Component);

  function ReactMenu(props) {
    _classCallCheck(this, ReactMenu);

    var _this = _possibleConstructorReturn(this, (ReactMenu.__proto__ || Object.getPrototypeOf(ReactMenu)).call(this, props));

    _this.clickOnNavButton = function (course) {
      _this.setState({ course: course });
    };

    _this.state = { course: "Antipasti" };
    return _this;
  }

  _createClass(ReactMenu, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "menu" },
        React.createElement(
          "div",
          { className: "course-navigator" },
          React.createElement(
            "div",
            { className: "course-row" },
            React.createElement(NavButton, {
              thisCourse: "Antipasti",
              clickOnNavButton: this.clickOnNavButton,
              selectedCourse: this.state.course
            }),
            React.createElement(NavButton, {
              thisCourse: "Pasta",
              clickOnNavButton: this.clickOnNavButton,
              selectedCourse: this.state.course
            }),
            React.createElement(NavButton, {
              thisCourse: "Pizza",
              clickOnNavButton: this.clickOnNavButton,
              selectedCourse: this.state.course
            }),
            React.createElement(NavButton, {
              thisCourse: "Secondi",
              clickOnNavButton: this.clickOnNavButton,
              selectedCourse: this.state.course
            }),
            React.createElement(NavButton, {
              thisCourse: "Dolci",
              clickOnNavButton: this.clickOnNavButton,
              selectedCourse: this.state.course
            }),
            React.createElement(NavButton, {
              thisCourse: "Avsmakning",
              clickOnNavButton: this.clickOnNavButton,
              selectedCourse: this.state.course
            }),
            React.createElement(NavButton, {
              thisCourse: "Vin",
              clickOnNavButton: this.clickOnNavButton,
              selectedCourse: this.state.course
            })
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

var domContainer = document.querySelector("#react-menu");
ReactDOM.render(React.createElement(ReactMenu, null), domContainer);