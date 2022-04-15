function ImagePopup(props) {
    return (
        <article className={`popup popup_photo-zoom ${props.isOpen}`}>
            <div className="popup__container-zoom">
                <img
                    className="popup__image"
                    src={props.card.link}
                    alt={props.card.name}
                />
                <h2 className="popup__photo-name">{props.card.name}</h2>
                <button
                    type="button"
                    aria-label="закрыть окно карточки."
                    className="popup__close-button"
                    onClick={props.onClose}
                >
                </button>
            </div>
        </article>
    )
}

export default ImagePopup;