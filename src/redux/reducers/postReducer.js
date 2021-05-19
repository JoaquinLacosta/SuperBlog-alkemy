import { DELETE_POST, ADD_POST, EDIT_POST } from "../actions/postActions"

const initialState = {
  posts: [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ]
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