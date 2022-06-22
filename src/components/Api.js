export class Api {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch(this._options, {
      headers: {
        'Content-type': 'application/json',
        'authorization': 'f14481c5-e77c-456f-a863-20543b32692f'
      }
    })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        return Promise.reject('Возникла ошибка');
      })
  }
}