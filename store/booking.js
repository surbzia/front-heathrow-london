export const state = () => ({
  journey_details: {},
})


export const mutations = {
  UpdateJourneyDetails(state, details) {
    state.journey_details = details
  }
}


export const actions = {
  async SetJourneyDetails(state, details) {
    state.journey_details = details;
  },
}
