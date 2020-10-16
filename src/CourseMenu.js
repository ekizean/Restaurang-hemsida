import Dish from './Dish.js';
import Package from './Package.js';

const CourseMenu = ({ dishes }) => {
    const course = dishes && dishes[0] && dishes[0].course;

    function getDishMarkup(dish) {
        if (dish.packageName) {
            return <Package dish={dish} key={dish.packageName} />;
        } else {
            return <Dish dish={dish} key={dish.dishName} />;
        }
    }

    const groupSize = 3;
    let showingContent;

    if (!course) {
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
                return (
                    <div key={rowContent[0] && rowContent[0].key} className="row">
                        {rowContent}
                    </div>
                );
            });
    }

    const courseDescriptionPasta = <i className="lower-case gold">brezzas hemgjorda pasta</i>;
    const courseDescriptionPizza = (
        <i className="lower-case gold">på italienska ingredienser och färsk mozzarella</i>
    );

    return (
        <div className="tab-content">
            <div className="container">
                <h2>{course}</h2>
                {course == 'pasta' && courseDescriptionPasta}
                {course == 'pizza' && courseDescriptionPizza}
                <div className="menu-content">{showingContent}</div>
            </div>
        </div>
    );
};

export default CourseMenu;
