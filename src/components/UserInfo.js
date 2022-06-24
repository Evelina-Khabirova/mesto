export class UserInfo {
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

  setUserInfo(fullname, aboutMe) {
    this._nameProfile.textContent = fullname;
    this._aboutProfile.textContent = aboutMe;
  }
  
  getUserInfoId(userInfo) {
    console.log(userInfo._id);
    this._nameProfile.id = userInfo._id;
    this._nameProfile.textContent = userInfo.fullname;
    this._aboutProfile.textContent = userInfo.aboutMe;
    //this._avatarProfile.style.backgroundImage = `url(${userInfo.avatar})`;
  }
  
  /*
  setUserAvatar(userAvatar) {
    this._avatarProfile.style.backgroundImage = `url(${userInfo.avatar})`;
  }
  */
}