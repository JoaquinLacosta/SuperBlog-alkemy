import { DELETE_POST, ADD_POST, EDIT_POST } from "../actions/postActions"

const initialState = {
  posts: []
}

const blog_posts = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_POST: {
      return {
        ...state,
        posts: [state.posts.flat().filter(item => item.id !== action.payload)]
      }
    }
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload
        ]
      }
    }
    case EDIT_POST: {
      let postState = state.posts.flat()
      const postIndex = postState.findIndex(item => item.id === action.payload.id)
      postState[postIndex] = action.payload

      return {
        ...state,
        posts: [
          ...postState
        ]
      }
    }
    default:
      return state
  }
}

export default blog_posts;