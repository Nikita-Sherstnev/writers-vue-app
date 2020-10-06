const state = {
  writers: [
    {
      id: 0,
      name: "Владимир",
      surname: "Набоков",
      middlename: "Владимирович",
      birthYear: 1899,
      deathYear: 1977,
      amountOfBooks: "14",
      nobel: false,
    },{
      id: 1,
      name: "Лев",
      surname: "Толстой",
      middlename: "Николаевич",
      birthYear: 1828,
      deathYear: 1910,
      amountOfBooks: "33",
      nobel: false,
    },
  ],
};

const getters = {
  allWriters: state => state.writers
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
