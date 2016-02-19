export function addItem(fields) {
  return {
    type: 'ADD_ITEM',
    fields,
  };
}

export function delItem(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}

export function setTotalTime(time) {
  return {
    type: 'SET_TOTAL_TIME',
    time,
  };
}
