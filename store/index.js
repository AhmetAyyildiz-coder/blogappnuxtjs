export const state = () => ({
  user:null
})

export const mutations = {
  SET_USER(state,user){
    state.user= user;
  }
}

export const actions = {
      async onAuthStateChangedAction(state,{authUser , claims}){
      if (!authUser) {
        // eğer bir authuser gelmediyse parametrede , state'dekini null yaparız.
        state.commit('SET_USER' , null)

        // ardından kullanıcıyı redirect ederiz.
        await this.$router.push(
          {path:'/auth/signin'}
        )

      }
      else {
        // eğer bir kullanıcı geldiyse boş değil ise
        const {uid , email} = authUser
        state.commit('SET_USER' , {
          uid , email
        })
      }
    }
}

export const getters = {
  getUser(state){
    return state.user;
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
