export const DELETE_POST = "DELETE_POST"
export const ADD_POST = "ADD_POST"
export const EDIT_POST = "EDIT_POST"

export const delete_post_action = (id) => {
  return {
    type: DELETE_POST,
    payload: id
  }
}

export const add_post_action = (data) => {
  return {
    type: ADD_POST,
    payload: data
  }
}

export const edit_post_action = (data) => {
  return {
    type: DELETE_POST,
    payload: data
  }
}