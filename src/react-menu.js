"use strict";

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
      <div className="course-navigator">
        <div className="course-row">
          <button
            className={`course-button${
              this.state.course.toLowerCase() == "antipasti" ? " selected" : ""
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
              this.state.course.toLowerCase() == "avsmakning" ? " selected" : ""
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
    );
  }
}

let domContainer = document.querySelector("#react-menu");
ReactDOM.render(<ReactMenu />, domContainer);
