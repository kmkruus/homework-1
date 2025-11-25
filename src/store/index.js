import { createStore } from 'vuex'
import postsJson from '../../js/posts.json';

export default createStore({
  state() {
    return {
      posts: postsJson.posts.map(post => ({
        ...post,
        likes: 0
      }))
    };
  },
  getters: {
    allPosts: (state) => state.posts
  }
});