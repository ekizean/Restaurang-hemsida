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
    return (
      <div className="menu">
        <div className="course-navigator">
          <div className="course-row">
            <NavButton
              thisCourse="Antipasti"
              clickOnNavButton={this.clickOnNavButton}
              selectedCourse={this.state.course}
            />
            <NavButton
              thisCourse="Pasta"
              clickOnNavButton={this.clickOnNavButton}
              selectedCourse={this.state.course}
            />
            <NavButton
              thisCourse="Pizza"
              clickOnNavButton={this.clickOnNavButton}
              selectedCourse={this.state.course}
            />
            <NavButton
              thisCourse="Secondi"
              clickOnNavButton={this.clickOnNavButton}
              selectedCourse={this.state.course}
            />
            <NavButton
              thisCourse="Dolci"
              clickOnNavButton={this.clickOnNavButton}
              selectedCourse={this.state.course}
            />
            <NavButton
              thisCourse="Avsmakning"
              clickOnNavButton={this.clickOnNavButton}
              selectedCourse={this.state.course}
            />
            <NavButton
              thisCourse="Vin"
              clickOnNavButton={this.clickOnNavButton}
              selectedCourse={this.state.course}
            />
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
