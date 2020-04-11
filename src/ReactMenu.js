"use strict";
import CourseMenu from "./CourseMenu.js";
import NavButton from "./NavButton.js";

class ReactMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "Antipasti",
      menuData: [],
      dishes: [],
    };
  }

  componentDidMount() {
    getMenuData();
  }

  getMenuData() {
    const url = "../Meny hemsida.xlsx";

    /* set up async GET request */
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";

    req.onload = (e) => {
      const data = new Uint8Array(req.response);
      const workbook = XLSX.read(data, { type: "array" });

      /* DO SOMETHING WITH workbook HERE */
      const first_sheet = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet];
      const menuJson = XLSX.utils.sheet_to_json(worksheet);

      this.setState({ menuData: menuJson }, () => {
        this.setCurrentDishes();
      });
    };
    req.send();
  }

  setCurrentDishes = () => {
    const dishes = this.state.menuData.filter((dish) => {
      return dish.course.toLowerCase() == this.state.course.toLowerCase();
    });

    this.setState({ dishes });
  };

  clickOnNavButton = (course) => {
    this.setState({ course }, () => {
      this.setCurrentDishes();
    });
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
        <CourseMenu dishes={this.state.dishes} />
      </div>
    );
  }
}

let domContainer = document.querySelector("#react-menu");
ReactDOM.render(<ReactMenu />, domContainer);
