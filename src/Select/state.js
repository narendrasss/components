/*
State shape:
{
  selectedValue: string,
  searchValue: string,
  showDropdown: bool
}
*/

const types = {
  UPDATE_SEARCH: 'UPDATE_SEARCH',
  OPEN_DROPDOWN: 'OPEN_DROPDOWN',
  CLOSE_DROPDOWN: 'CLOSE_DROPDOWN',
  TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
  SELECT: 'SELECT'
}

export const actions = {
  updateSearch: value => ({ type: types.UPDATE_SEARCH, payload: value }),
  openDropdown: () => ({ type: types.OPEN_DROPDOWN }),
  closeDropdown: () => ({ type: types.CLOSE_DROPDOWN }),
  toggleDropdown: () => ({ type: types.TOGGLE_DROPDOWN }),
  select: value => ({ type: types.SELECT, payload: value })
}

function reducer(state, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH:
      return {
        ...state,
        searchValue: action.payload
      }
    case types.OPEN_DROPDOWN:
      return {
        ...state,
        searchValue: '',
        showDropdown: true
      }
    case types.CLOSE_DROPDOWN:
      return {
        ...state,
        showDropdown: false
      }
    case types.TOGGLE_DROPDOWN:
      return {
        ...state,
        showDropdown: !state.showDropdown
      }
    case types.SELECT:
      return {
        ...state,
        searchValue: action.payload,
        selectedValue: action.payload,
        showDropdown: false
      }
    default:
      return state
  }
}

export default reducer
