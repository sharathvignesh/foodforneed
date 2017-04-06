import fetch from 'isomorphic-fetch';
export const OPEN_VALUE = 'OPEN_VALUE';
export const STORE_FOOD_TYPE = 'STORE_FOOD_TYPE';
export const STORE_FETCHED_DETAILS = 'STORE_FETCHED_DETAILS';
export const UPDATE_VIEW = 'UPDATE_VIEW';


export function openValue(open) {
  return dispatch => {
    return dispatch({
      type: OPEN_VALUE,
      open: open
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

export function storeDetails(name, phonenumber, location, foodtype, dishname, imgurl, description) {
  return dispatch => {
    return fetch('http://localhost:9000/store', {
  //    return fetch('/store', {
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
   return fetch('http://localhost:9000/ret', {
//    return fetch('/ret', {
      method: 'GET'})
      .then(res => {
        return res.json();
      })
      .then(json => dispatch(storeFetchedDetails(json)))
  };
}
