import axios from "axios";
import http from "../../http-common";

const state = {
  writers: [],
};

const getters = {
  allWriters: (state) => state.writers,
};

const actions = {
  async fetchWriters({ commit }) {
    http.get("/writers")
    .then(response => {
      commit("setWriters", response.data);
    }).catch(e => {
      console.log(e);
    });
  },
  async addWriter({ commit }, data) {
    http.post("/writers", data)
    .then(response => {
      commit("newWriter", response.data)
    }).catch(e => {
      console.log(e);
    });
  },
  async deleteWriter({ commit }, id) {
    http.delete(`/writers/${id}`)
    .catch(e => {
      console.log(e);
    });

    commit("removeWriter", id);
  },
  async updateTodo({ commit }, updWriter) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updWriter.id}`,
      updWriter
    );

    commit("updateWriter", response.data);
  },
};

const mutations = {
  setWriters: (state, writers) => (state.writers = writers),
  newWriter: (state, writer) => state.writers.unshift(writer),
  removeWriter: (state, id) =>
    (state.writers = state.writers.filter((writer) => writer.id !== id)),
  updateWriter: (state, updWriter) => {
    const index = state.writers.findIndex(
      (writer) => writer.id === updWriter.id
    );
    if (index !== -1) {
      state.todos.splice(index, 1, updWriter);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
