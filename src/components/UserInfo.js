export default class UserInfo {
  constructor(nameProfile, aboutProfile, avatarProfile) {
    this._nameProfile = document.querySelector(nameProfile);
    this._aboutProfile = document.querySelector(aboutProfile);
    this._avatarProfile = document.querySelector(avatarProfile);
  }

  getUserInfo() {
    this._user = {
      fullname: this._nameProfile.textContent,
      aboutMe: this._aboutProfile.textContent
    }
    return this._user;
  }

  setUserInfo(userInfo) {
    if(userInfo.name) {
      this._nameProfile.textContent = userInfo.name;
    }
    if(userInfo.about) {
      this._aboutProfile.textContent = userInfo.about;
    }
    if(userInfo._id) {
      this._userId = userInfo._id;
    }
    if(userInfo.avatar) {
      this._avatarProfile.style.backgroundImage = `url(${userInfo.avatar})`;
    }
  }
  
  getUserId() {
    return this._userId;
  }
  
  setUserAvatar(userAvatar) {
    if(userAvatar) {
      this._avatarProfile.style.backgroundImage = `url(${userAvatar.avatar})`;
    }
  }
}