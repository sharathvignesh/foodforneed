export const OPEN_VALUE = 'OPEN_VALUE';

export function openValue(open) {
  return dispatch => {
    return dispatch({
      type: OPEN_VALUE,
      open: open
    });
  };
}
