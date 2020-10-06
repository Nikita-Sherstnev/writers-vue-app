<template>
  <div class="books">
    <h1>Книги</h1>
    <div v-for="book in allBooks" :key="book.id" class="book">
      <h3>{{ book.title }}</h3>
      {{ book.year }}
      {{ book.pages }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BooksList",
  computed: mapGetters(["allBooks"]),
};
</script>

<style scoped>
.books {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
.book {
  border: 1px solid #ccc;
  background: #d3b50a;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>