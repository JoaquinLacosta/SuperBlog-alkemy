import { DELETE_POST, ADD_POST, EDIT_POST } from "../actions/postActions"

const initialState = {
  posts: []
}

const blog_posts = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
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
      let post = state.post.find(item => item.id === action.payload)
      post = action.payload

      return {
        ...state,
        posts: [
          ...state.posts,
          post
        ]
      }
    }
    default:
      return state
  }
}

export default blog_posts;