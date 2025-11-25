import { createStore } from 'vuex'
import posts from '../data/posts.json'

export default createStore({
  state() {
    return {
      posts: posts
    }
  },
  getters: {
    allPosts: (state) => state.posts
  }
})
