"use strict";
import menu from "../menu.js";
import CourseMenu from "./CourseMenu.js";
import NavButton from "./NavButton.js";

class ReactMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { course: "Antipasti" };
  }

  componentDidMount() {
    var url = "../Meny hemsida.xlsx";

    /* set up async GET request */
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";

    req.onload = function (e) {
      var data = new Uint8Array(req.response);
      var workbook = XLSX.read(data, { type: "array" });

      /* DO SOMETHING WITH workbook HERE */
      let first_sheet = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet];
      console.log(XLSX.utils.sheet_to_json(worksheet));
    };

    req.send();
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
