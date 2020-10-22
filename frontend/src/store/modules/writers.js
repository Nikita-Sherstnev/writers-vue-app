import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080";

const state = {
  writers: [
    {
      id: 0,
      surname: "Набоков",
      name: "Владимир",
      middlename: "Владимирович",
      birthYear: 1899,
      deathYear: 1977,
      amountOfBooks: "14",
      nobel: false,
    },
    {
      id: 1,
      surname: "Толстой",
      name: "Лев",
      middlename: "Николаевич",
      birthYear: 1828,
      deathYear: 1910,
      amountOfBooks: "33",
      nobel: false,
    },
  ],
};

const getters = {
  allWriters: (state) => state.writers,
};

const actions = {
  async fetchWriters({ commit }) {
    const response = await axios.get(`${BASE_URL}/api/writers`);

    commit("setWriters", response.data);
  },
  async addWriter(
    { commit },
    surname,
    name,
    middlename,
    birthYear,
    deathYear,
    nobel
  ) {
    // post request
    const response = await axios.post(`${BASE_URL}/api/writers`, {
      surname: surname,
      name: name,
      middlename: middlename,
      birthYear: birthYear,
      deathYear: deathYear,
      nobel: nobel,
    });

    commit("newWriter", response.data);
  },
  async deleteWriter({ commit }, id) {
    await axios.delete(`${BASE_URL}/api/writers/${id}`);

    commit("removeWriter", id);
  },
};

const mutations = {
  setWriters: (state, writers) => (state.writers = writers),
  newWriter: (state, writer) => state.writers.unshift(writer),
  removeWriter: (state, id) =>
    (state.writers = state.writers.filter((writer) => writer.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
