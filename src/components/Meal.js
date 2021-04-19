const Meal = ({title, category, price, img, desc}) => {
    return (
        <div className="meal">
            <img src={img} alt="meal" />
            <div className="meal-description">
                <div className="meal-title">
                    <h4>{title}</h4>
                    <h4 className="price">
                        ${price}
                </h4>
                </div>
                <div className="description">
                    {desc}
                </div>
            </div>

        </div>
    );
}

export default Meal;