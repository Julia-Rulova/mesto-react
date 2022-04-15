function PopupWithForm(props) {
    return (
        <article
            className={`popup popup_${props.name} ${props.isOpen}`}
        >
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form
                    name={props.name}
                    className={`popup__form popup__${props.name}`}
                    noValidate
                >
                    {props.children}
                    <button
                        type="submit"
                        className="popup__submit-button"
                    >
                        {props.btnText}
                    </button>
                </form>
                <button
                    type="button"
                    className="popup__close-button"
                    onClick={props.onClose}
                >
                </button>
            </div>
        </article>
    )
}

export default PopupWithForm;