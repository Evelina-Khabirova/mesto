export class Api {
  constructor(options) {
    this._options = options;
    this._headers = {
      'Content-type': 'application/json',
      authorization: 'f14481c5-e77c-456f-a863-20543b32692f'
    }
  }

  getInitialCards() {
    return fetch(`${this._options}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        return Promise.reject('Возникла ошибка');
      });
  }

  identificationProfile() {
    return fetch(`${this._options}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Возникла ошибка');
    })
  }

  
  editProfile(fullnameProfile, aboutProfile) {
    return fetch(`${this._options}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: fullnameProfile,
        about: aboutProfile
      })
    })
    .then((res) => {
      console.log(`${this._options}/users/me`);
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Возникла ошибка');
    })
    .then((result) => {
      return result;
    });
  }
  
  setLike(cardId) {
    return fetch(`${this.options}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      //return console.log(`${this.options}cards/${cardId}/likes`);
      return Promise.reject('Возникла ошибка');
    });
  }
  /*
  deleteLike(cardId) {
    return fetch(`${this.options}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Возникла ошибка');
    });
  }
  */
  addCard(cardName, cardLink) {
    return fetch(`${this._options}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink
      })
    })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        return Promise.reject('Возникла ошибка');
      });
  }
}