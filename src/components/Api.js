export class Api {
  constructor(options) {
    this._options = options;
    this._headers = {
      'Content-type': 'application/json',
      'authorization': 'f14481c5-e77c-456f-a863-20543b32692f'
    }
  }

  getInitialCards() {
    return fetch(this._options, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        return Promise.reject('Возникла ошибка');
      })
      .then((result) => {
        console.log(result);
      });
  }

  editProfile(fullnameProfile, aboutProfile) {
    return fetch(this._options, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        fullname: nameProfile,
        about: aboutProfile
      })
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Возникла ошибка');
    })
    .then((result) => {
      console.log(result);
    });
  }

  addCard(cardName, cardLink) {
    return fetch(this._options, {
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