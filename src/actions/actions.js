import fetch from 'isomorphic-fetch';
export const OPEN_VALUE = 'OPEN_VALUE';
export const STORE_NAME = 'STORE_NAME';
export const STORE_PHONE_NUMBER = 'STORE_PHONE_NUMBER';
export const STORE_LOCATION = 'STORE_LOCATION';
export const STORE_DISH_NAME = 'STORE_DISH_NAME';
export const STORE_DESCRIPTION = 'STORE_DESCRIPTION';
export const STORE_FOOD_TYPE = 'STORE_FOOD_TYPE';
export const STORE_FETCHED_DETAILS = 'STORE_FETCHED_DETAILS';
export const UPDATE_VIEW = 'UPDATE_VIEW';
export const STORE_IMG_URL = 'STORE_IMG_URL';

export function openValue(open) {
  return dispatch => {
    return dispatch({
      type: OPEN_VALUE,
      open: open
    });
  };
}

export function storeName(name) {
  return dispatch => {
    return dispatch({
      type: STORE_NAME,
      name: name
    });
  };
}
export function storePhoneNumber(phonenumber) {
  return dispatch => {
    return dispatch({
      type: STORE_PHONE_NUMBER,
      phonenumber: phonenumber
    });
  };
}
export function storeLocation(location) {
  return dispatch => {
    return dispatch({
      type: STORE_LOCATION,
      location: location
    });
  };
}
export function storeDishName(dishname) {
  return dispatch => {
    return dispatch({
      type: STORE_DISH_NAME,
      dishname: dishname
    });
  };
}
export function storeDescription(description) {
  return dispatch => {
    return dispatch({
      type: STORE_DESCRIPTION,
      description: description
    });
  };
}
export function storeFoodType(foodtype) {
  return dispatch => {
    return dispatch({
      type: STORE_FOOD_TYPE,
      foodtype: foodtype
    });
  };
}
export function storeImgURL(url) {
  return dispatch => {
    return dispatch({
      type: STORE_IMG_URL,
      url: url
    });
  };
}

export function storeDetails(name, phonenumber, location, foodtype, dishname, imgurl, description) {
  return dispatch => {
    return fetch('http://localhost:8081/store', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'name' : name, 'phonenumber' : phonenumber, 'foodtype': foodtype, 'location': location, 'dishname': dishname, 'imgurl': imgurl, 'description': description})})
      .then(res => {
        if (res.status !== 200) {
          let status = res.status;
          console.log('error in posting event');
        }
        return res.json();
      })
      .then(json => dispatch(concatDetails(json)))
  };
  return dispatch => {
    return dispatch({
      type: OPEN_VALUE,
      open: false
    });
  };
}
function storeFetchedDetails(json) {
  //console.log('coming here' + JSON.stringify(json));
  return {
    type: STORE_FETCHED_DETAILS,
    json
  }
}
function concatDetails(json) {
  //console.log('coming here' + JSON.stringify(json));
  return {
    type: UPDATE_VIEW,
    json
  }
}
export function fetchDetails() {
  return dispatch => {
    return fetch('http://localhost:8081/ret', {
      method: 'GET'})
      .then(res => {
        return res.json();
      })
      .then(json => dispatch(storeFetchedDetails(json)))
  };
}
