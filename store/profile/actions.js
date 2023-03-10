import { map, values, merge, keyBy } from 'lodash'

export default {
  async getByUserId({ commit }, payload) {
    try {
      const response = await this.$api.$get(`/info/${payload.userId}`)
      const profile = response.data.info
      commit('SET_PROFILE', profile)
      return profile
    } catch (e) {
      console.error(e)
    }
  },
  async getGraphByUserId({ commit }, payload) {
    try {
      const { userId } = payload
      const response = await this.$api.$get(`/vgraficos/${userId}`)
      const graph = response.data.graficos

      return {
        values: {
          labels: map(graph.actitudes.info, 'label'),
          datasets: [
            {
              data: map(graph.actitudes.info, 'valor'),
              backgroundColor: 'rgba(74,169,210,0.5)',
              borderColor: 'rgba(74,169,210,0.9)',
            },
          ],
        },
        coins: {
          labels: map(graph.monedas.info, 'label'),
          datasets: [
            {
              data: map(graph.monedas.info, 'valor'),
              backgroundColor: 'rgba(157,96,251,0.5)',
              borderColor: 'rgba(157,96,251,0.9)',
            },
          ],
        },
      }
    } catch (e) {
      console.error(e)
    }
  },
  async updateAccount({ commit }, payload) {
    try {
      const response = await this.$api.$put(`/cuenta/cambio`, payload)
      const account = response.data.cuenta
      commit('SET_ACCOUNT', account)
      return account
    } catch (e) {
      console.error(e)
    }
  },
  async getTransactions({ commit }, payload) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/monedas/${userId}`, {
        params: payload,
      })
      const transactions = response.data.monedas
      return transactions
    } catch (e) {
      console.error(e)
    }
  },
  async getBalance({ commit }, payload) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/vsaldos/${userId}`)
      const balance = response.data.saldos
      commit('SET_BALANCE', balance)
      return balance
    } catch (e) {
      console.error(e)
    }
  },
  async getLevels({ commit }) {
    try {
      const response = await this.$api.$get(`/tsnivel`)
      const levels = response.data.sniveles
      return levels
    } catch (e) {
      console.error(e)
    }
  },
  async getLevelByUserId({ commit }, payload) {
    try {
      const { userId } = payload
      const responseLevels = await this.$api.$get(`/tsnivel`)
      const responseProgress = await this.$api.$get(`/ubica_nivel/${userId}`)
      const levels = responseLevels.data.sniveles
      const progress = responseProgress.data.progreso.logros

      return values(
        merge(keyBy(levels, 'snivel_id'), keyBy(progress, 'snivel_id'))
      )
    } catch (e) {
      console.error(e)
    }
  },
}
