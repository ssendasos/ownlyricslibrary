import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: JSON.parse(localStorage.getItem('songs') || '[]')
  },

  mutations: {
    addSong(state, song) {
      state.songs.push(song)
      localStorage.setItem('songs', JSON.stringify(state.songs))
    },

    deleteSong(state, id) {
      state.songs = state.songs.filter(song => song.id !== id)
      localStorage.setItem('songs', JSON.stringify(state.songs))
    }
  },

  actions: {
    createSong({commit}, song) {
      commit('addSong', song)
    },
    deleteSong({commit}, id) {
      commit('deleteSong', id)
    },
    fetchSongs({commit}) {
      return
    }
  },

  getters: {
    songs: s => s.songs,
    songsByArtist: s => name => s.songs.filter(song => song.artist.includes(name))
  },
  modules: {
  }
})
