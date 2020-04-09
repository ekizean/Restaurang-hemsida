"use strict";
import menu from "../menu.js";
import CourseMenu from "./CourseMenu.js";
import NavButton from "./NavButton.js";

class ReactMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { course: "Antipasti" };
  }

  clickOnNavButton = (course) => {
    this.setState({ course });
  };

  render() {
    const navButtons = [
      "Antipasti",
      "Pasta",
      "Pizza",
      "Secondi",
      "Dolci",
      "Avsmakning",
      "Vin",
    ];

    return (
      <div className="menu">
        <div className="course-navigator">
          <div className="course-row">
            {navButtons.map((navButton) => {
              return (
                <NavButton
                  thisCourse={navButton}
                  clickOnNavButton={this.clickOnNavButton}
                  selectedCourse={this.state.course}
                />
              );
            })}
          </div>
        </div>
        <CourseMenu
          course={this.state.course.toLowerCase()}
          dishes={menu[this.state.course.toLowerCase()]}
        />
      </div>
    );
  }
}

let domContainer = document.querySelector("#react-menu");
ReactDOM.render(<ReactMenu />, domContainer);
