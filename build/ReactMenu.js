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
    key: "componentDidMount",
    value: function componentDidMount() {
      var url = "../Meny hemsida.xlsx";

      /* set up async GET request */
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "arraybuffer";

      req.onload = function (e) {
        var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, { type: "array" });

        /* DO SOMETHING WITH workbook HERE */
        var first_sheet = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet];
        console.log(XLSX.utils.sheet_to_json(worksheet));
      };

      req.send();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var navButtons = ["Antipasti", "Pasta", "Pizza", "Secondi", "Dolci", "Avsmakning", "Vin"];

      var dishes = menu.filter(function (dish) {
        return dish.course == _this2.state.course.toLowerCase();
      });

      return React.createElement(
        "div",
        { className: "menu" },
        React.createElement(
          "div",
          { className: "course-navigator" },
          React.createElement(
            "div",
            { className: "course-row" },
            navButtons.map(function (navButton) {
              return React.createElement(NavButton, {
                thisCourse: navButton,
                clickOnNavButton: _this2.clickOnNavButton,
                selectedCourse: _this2.state.course
              });
            })
          )
        ),
        React.createElement(CourseMenu, { dishes: dishes })
      );
    }
  }]);

  return ReactMenu;
}(React.Component);

var domContainer = document.querySelector("#react-menu");
ReactDOM.render(React.createElement(ReactMenu, null), domContainer);