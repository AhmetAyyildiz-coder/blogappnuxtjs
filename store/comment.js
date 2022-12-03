export const state = () => ({
  comments: [],
  comment: null
})

export const mutations = {
  SET_COMMENTS(state, comments) {
    state.comments = comments
  },
  SET_COMMENT(state, comment) {
    state.comment = comment
  }
}



export const actions = {
  fetchComments({ commit, state }) {
    if (state.comments.length > 0) {
      return state.comments
    }
    return this.$axios.$get('/comments').then((comments) => {
      commit('SET_COMMENTS', comments)
      return comments
    })
  },
  fetchComment({ commit, getters }, commentId) {
    const comment = getters.getCommentById(commentId)
    if (comment) {
      commit('SET_COMMENT', comment)
      return comment
    } else {
      return this.$axios.$get(`/comments/${commentId}`).then((comment) => {
        commit('SET_COMMENT', comment)
      })
    }
  }
}


export const getters = {
  getCommentById: (state) => (id) => state.comments.find((comment) => comment.id === id)
}
