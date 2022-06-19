export class UserInfo {
  constructor(nameProfile, aboutProfile) {
    this._nameProfile = document.querySelector(nameProfile);
    this._aboutProfile = document.querySelector(aboutProfile);
  }

  getUserInfo() {
    this._user = {
      fullname: this._nameProfile.textContent,
      aboutMe: this._aboutProfile.textContent
    }
    return this._user;
  }

  setUserInfo(fullname, aboutMe) {
    this._nameProfile.textContent = fullname;
    this._aboutProfile.textContent = aboutMe;
  }
}