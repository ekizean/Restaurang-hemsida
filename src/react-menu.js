"use strict";
import menu from "../menu.js";

class ReactMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { course: "Antipasti" };
  }

  clickOnCourseButton = (course) => {
    this.setState({ course });
  };

  render() {
    return (
      <div className="menu">
        <div className="course-navigator">
          <div className="course-row">
            <button
              className={`course-button${
                this.state.course.toLowerCase() == "antipasti"
                  ? " selected"
                  : ""
              }`}
              onClick={() => this.clickOnCourseButton(event.target.innerText)}
            >
              Antipasti
            </button>
            <button
              className={`course-button${
                this.state.course.toLowerCase() == "pasta" ? " selected" : ""
              }`}
              onClick={() => this.clickOnCourseButton(event.target.innerText)}
            >
              Pasta
            </button>
            <button
              className={`course-button${
                this.state.course.toLowerCase() == "pizza" ? " selected" : ""
              }`}
              onClick={() => this.clickOnCourseButton(event.target.innerText)}
            >
              Pizza
            </button>
            <button
              className={`course-button${
                this.state.course.toLowerCase() == "secondi" ? " selected" : ""
              }`}
              onClick={() => this.clickOnCourseButton(event.target.innerText)}
            >
              Secondi
            </button>
          </div>
          <div className="course-row">
            <button
              className={`course-button${
                this.state.course.toLowerCase() == "dolci" ? " selected" : ""
              }`}
              onClick={() => this.clickOnCourseButton(event.target.innerText)}
            >
              Dolci
            </button>
            <button
              className={`course-button${
                this.state.course.toLowerCase() == "avsmakning"
                  ? " selected"
                  : ""
              }`}
              onClick={() => this.clickOnCourseButton(event.target.innerText)}
            >
              Avsmakning
            </button>
            <button
              className={`course-button${
                this.state.course.toLowerCase() == "vin" ? " selected" : ""
              }`}
              onClick={() => this.clickOnCourseButton(event.target.innerText)}
            >
              Vin
            </button>
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

const CourseMenu = ({ course, dishes }) => {
  const groupSize = 3;

  const rows = dishes
    .map((dish) => {
      const { dishName, price, description } = dish;
      return (
        <div className="col-sm-4 dish">
          <dl>
            <dt>
              {dishName}
              <span class="pris">{price}:-</span>
            </dt>
            <dd>{description}</dd>
          </dl>
        </div>
      );
    })
    .reduce((acc, curr, index, array) => {
      index % groupSize === 0 && acc.push([]);
      acc[acc.length - 1].push(curr);

      const isLastElement = array.length - index == 1;
      if (isLastElement) {
        const numberOfEmptyColSm4ToAddInTheLastRow = groupSize % array.length;
        for (let i = 0; i < numberOfEmptyColSm4ToAddInTheLastRow; i++) {
          acc[acc.length - 1].push(<div className="col-sm-4"></div>);
        }
      }

      return acc;
    }, [])
    .map((rowContent) => {
      return <div className="row">{rowContent}</div>;
    });

  return (
    <div className="tab-content">
      <h2>{course}</h2>
      {rows}
    </div>
  );
};

let domContainer = document.querySelector("#react-menu");
ReactDOM.render(<ReactMenu />, domContainer);
