const state = {
  books: [
    {
      id: 0,
      title: "Машенька",
      year: 1926,
      genre: "Роман",
      pages: 192,
    },
    {
      id: 1,
      title: "Анна Каренина",
      year: "1875—1877",
      genre: "Роман",
      pages: 864,
    },
  ],
};

const getters = {
  allBooks: (state) => state.books,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
