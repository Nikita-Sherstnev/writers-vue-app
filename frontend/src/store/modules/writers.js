import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080";

const state = {
  writers: [],
};

const getters = {
  allWriters: (state) => state.writers,
};

const actions = {
  async fetchWriters({ commit }) {
    const response = await axios.get(`${BASE_URL}/api/writers`);

    commit("setWriters", response.data);
  },
  async addWriter({ commit }, data) {
    const response = await axios.post(`${BASE_URL}/api/writers`, data);

    commit("newWriter", response.data);
  },
  async deleteWriter({ commit }, id) {
    await axios.delete(`${BASE_URL}/api/writers/${id}`);

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
