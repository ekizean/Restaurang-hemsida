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
        <CourseMenu />
      </div>
    );
  }
}

const antipasti = [
  {
    courseName: "Bruschetta",
    price: 110,
    description: "Citronmarinerad zucchini och tomater",
  },
  {
    courseName: "Mozzarella di Bufala Campana",
    price: 135,
    description: "Buffelmozzarella med tomater, aubergine och basilika",
  },
  {
    courseName: "San Daniele con mozzarella",
    price: 185,
    description: "Lufttorkad skinka, buffelmozzarella tomat och basilika",
  },
  {
    courseName: "Piatto misto di salumi",
    price: 165,
    description:
      "Blandad chark, marinerade oliver, rostade hasselnötter och picklade grönsaker",
  },
];

const CourseMenu = () => {
  function chunkArray(array, chunkSize) {}

  const groupSize = 3;

  const rows = antipasti
    .map((course) => {
      const { courseName, price, description } = course;
      return (
        <div className="col-sm-4">
          <dl>
            <dt>
              {courseName}
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
      <h2>Antipasti</h2>
      {rows}
    </div>
  );
};

let domContainer = document.querySelector("#react-menu");
ReactDOM.render(<ReactMenu />, domContainer);
