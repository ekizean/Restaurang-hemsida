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

    const dishes = menu.filter((dish) => {
      return dish.course == this.state.course.toLowerCase();
    });

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
        <CourseMenu dishes={dishes} />
      </div>
    );
  }
}

let domContainer = document.querySelector("#react-menu");
ReactDOM.render(<ReactMenu />, domContainer);
