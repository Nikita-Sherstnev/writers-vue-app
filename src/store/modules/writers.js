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

    commit("newWriter", surname, name, middlename, birthYear, deathYear, nobel);
  },
  async deleteWriter({ commit }, id) {
    //delete request
    commit("removeWriter", id);
  },
};

const mutations = {
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
