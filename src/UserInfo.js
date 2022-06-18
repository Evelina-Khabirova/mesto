export class UserInfo {
  constructor(nameProfile, aboutProfile) {
    this._nameProfile = nameProfile;
    this._aboutProfile = aboutProfile;
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