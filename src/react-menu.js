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
  function getDishMarkup(dish) {
    if (dish.packageName) {
      const {
        packageName,
        price,
        description,
        disches,
        wineName,
        winePrice,
      } = dish;

      return (
        <div class="col-sm-4">
          <dl class="package-menu--box">
            <dt>
              {packageName}
              <span class="pris">{price}:-</span>
            </dt>
            <dd>
              <span class="lower-case gold">
                {description && <i>{description}</i>}
              </span>
              {disches.map((dish) => {
                return <div class="package-menu--dish">{dish}</div>;
              })}
            </dd>
            <dt>
              {wineName}
              <span class="pris">{winePrice}:-</span>
            </dt>
          </dl>
        </div>
      );
    } else {
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
    }
  }

  const groupSize = 3;
  let showingContent;

  if (course === "vin") {
    showingContent = (
      <div className="wine-content">
        <span className="wine-description gold lower-case">
          lite längre ner på sidan kan ni se våra vinprovningar
        </span>
        <a className="wine-list" href="./Brezza vinlista.pdf">
          Vinlista
        </a>
      </div>
    );
  } else {
    showingContent = dishes
      .map((dish) => {
        return getDishMarkup(dish);
      })
      .reduce((acc, curr, index) => {
        index % groupSize === 0 && acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
      }, [])
      .map((rowContent) => {
        return <div className="row">{rowContent}</div>;
      });
  }

  return (
    <div className="tab-content">
      <div className="container">
        <h2>{course}</h2>
        {showingContent}
      </div>
    </div>
  );
};

let domContainer = document.querySelector("#react-menu");
ReactDOM.render(<ReactMenu />, domContainer);
