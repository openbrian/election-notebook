export const state = () => ({
  branch: ''
})

export const getters = {

}

export const mutations = {
  saveInfo(state, payload) {
    state.branch = payload.branch
  }
}

export const actions = {

}
