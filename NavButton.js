var NavButton = function NavButton(_ref) {
  var thisCourse = _ref.thisCourse,
      selectedCourse = _ref.selectedCourse,
      clickOnNavButton = _ref.clickOnNavButton;

  return React.createElement(
    "button",
    {
      className: "course-button" + (thisCourse.toLowerCase() == selectedCourse.toLowerCase() ? " selected" : ""),
      onClick: function onClick() {
        return clickOnNavButton(event.target.innerText);
      }
    },
    thisCourse
  );
};

export default NavButton;