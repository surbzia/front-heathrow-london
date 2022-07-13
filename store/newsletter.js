import swal from "sweetalert";

export const state = () => ({
  newsletterErrors: { email: '' },
  hasErrors: false,
  loading: false,
})
export const mutations = {
  setNewsletterSuccess(state) {
    state.newsletterErrors = { email: '' };
    state.hasErrors = false
  },
  setNewsletterErrors(state, errors) {
    state.newsletterErrors = errors
    state.hasErrors = true
  },
  tglLoader(state) {
    state.loading = !state.loading
  },
}
export const actions = {
  async save({ commit }, { email }) {
    commit('tglLoader')
    let res = await this.$axios.$post('newsletter/store', {
      email: email
    }).catch(e => {
      return { errors: true, data: e.response.data.errors };
    })

    if (res.errors) {
      swal({
        title: res.data.email[0],
        timer: 1100,
        icon: "error",
      });
    } else {
      if (res.status) {
        swal({
          title: res.message,
          timer: 1100,
          icon: "success",
        });
      } else {
        swal({
          title: res.message,
          timer: 1100,
          icon: "error",
        });
      }
    }
  },
}
