import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleCardClick(cardItem) {
    setSelectedCard(cardItem);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="name"
          placeholder="Имя"
          className="popup__text popup__text_type_name"
          minLength="2"
          maxLength="40"
          required
          id="name-input" />
        <span className="popup__text-error name-input-error"></span>
        <input
          type="text"
          name="about"
          placeholder="О себе"
          className="popup__text popup__text_type_about"
          minLength="2"
          maxLength="200"
          required
          id="about-input" />
        <span className="popup__text-error about-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        btnText="Создать"
        isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Название"
          minLength="2"
          maxLength="30"
          className="popup__text popup__text_type_card-name"
          id="cardname-input" />
        <span className="popup__text-error cardname-input-error"></span>
        <input
          type="url"
          name="link"
          required
          placeholder="Ссылка на картинку"
          className="popup__text popup__text_type_card-link"
          id="cardlink-input" />
        <span className="popup__text-error cardlink-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        btnText="Сохранить"
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          name="avatar"
          required
          placeholder="Ссылка на новый аватар"
          className="popup__text popup__text_type_avatar"
          id="avatar-input" />
        <span className="popup__text-error avatar-input-error"></span>
      </PopupWithForm>

      {/* <PopupWithForm
        name="delete-confirm"
        title="Вы уверены?"
        btnText="Да"
      >
      </PopupWithForm> */}


      <ImagePopup
        card={selectedCard}
        isOpen={selectedCard ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;