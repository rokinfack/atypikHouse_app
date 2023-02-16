import { defineStore } from 'pinia'

export const useHabitatPlanningStores = defineStore('habitat-planning', {
  state: () => ({
    counter: 0
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    increment () {
      this.counter++
    }
  }
})
