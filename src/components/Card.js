function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="card">
            <img
                className="card__photo"
                src={props.card.link}
                alt={props.card.name}
                onClick={handleClick}
            />
            <button type="button" aria-label="удалить фото." className="card__delete-button"></button>
            <div className="card__container">
                <h2 className="card__name">{props.card.name}</h2>
                <div className="card__like-sector">
                    <button type="button" aria-label="поставить лайк." className="card__like-button"></button>
                    <p className="card__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;