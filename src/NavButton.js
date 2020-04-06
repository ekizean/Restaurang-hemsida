const NavButton = ({ thisCourse, selectedCourse, clickOnNavButton }) => {
  return (
    <button
      className={`course-button${
        thisCourse.toLowerCase() == selectedCourse.toLowerCase()
          ? " selected"
          : ""
      }`}
      onClick={() => clickOnNavButton(event.target.innerText)}
    >
      {thisCourse}
    </button>
  );
};

export default NavButton;
