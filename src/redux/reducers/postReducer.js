import { DELETE_POST, ADD_POST, EDIT_POST } from "../actions/postActions"

const initialState = {
  posts: []
}

const blog_posts = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_POST: {
      return {
        ...state,
        posts: [state.posts[0].filter(item => item.id !== action.payload)]
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
      const postIndex = state.posts[0].findIndex(item => item.id === action.payload.id)
      state.posts[0][postIndex] = action.payload

      return {
        ...state,
        posts: [
          ...state.posts
        ]
      }
    }
    default:
      return state
  }
}

export default blog_posts;