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
      });
  }

  addCard(cardName, cardLink) {
    const body = {
      name: cardName,
      link: cardLink
    }
    return fetch(this._options, {
      method: 'POST',
      headers:this._headers,
      body: JSON.stringify(body)
    })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        return Promise.reject('Возникла ошибка');
      });
  }
}