import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfoApi()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log(err);
            });

        api.getCards()
            .then((cardData) => {
                setCards(cardData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__user">
                    <div className="profile__avatar-sector">
                        <img className="profile__avatar"
                            src={userAvatar}
                            alt="аватарка."
                        />
                        <button
                            type="button"
                            aria-label="редактирование аватара."
                            className="profile__avatar-change-btn"
                            onClick={props.onEditAvatar}
                        ></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__container">
                            <h1 className="profile__name">{userName}</h1>
                            <button
                                type="button"
                                aria-label="редактирование профиля."
                                className="profile__edit-button"
                                onClick={props.onEditProfile}
                            ></button>
                        </div>
                        <p className="profile__about">{userDescription}</p>
                    </div>
                </div>
                <button
                    type="button"
                    aria-label="добавление новой фотокарточки."
                    className="profile__add-button"
                    onClick={props.onAddPlace}
                ></button>
            </section>

            <section>
                <ul className="cards">
                    {cards.map((card) => (
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>

        </main>
    )
}

export default Main;