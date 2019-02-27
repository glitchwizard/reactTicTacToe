import constants from './../constants';

export default (state = {}, action) => {
  let newState;
  switch(action.type){
    case constants.TEST:
    return newState;
    default:
      return state;
  }
}
