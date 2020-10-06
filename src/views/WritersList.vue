<template>
  <div class="writers">
    <h1>Писатели</h1>

    <div v-for="writer in allWriters" :key="writer.id" class="writer">
      <div class="info">
        {{ writer.surname }}
        {{ writer.name }}
        {{ writer.middlename }}
        <br />
        Годы жизни: {{ writer.birthYear }} - {{ writer.deathYear }}<br />
        Количество произведений: {{ writer.amountOfBooks }}<br />
        Нобелевская премия: <span v-if="writer.nobel == true">Есть</span
        ><span v-else>Нет</span><br />
      </div>
      <div class="control">
        <img src="@/assets/update.svg" />
        <img @click="deleteWriter(writer.id)" src="@/assets/delete.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WritersList",
  methods: {
    ...mapActions(["deleteWriter"]),
  },
  computed: mapGetters(["allWriters"]),
};
</script>

<style scoped>
.writers {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
.writer {
  display: flex;
  border: 1px solid #ccc;
  background: #d3b50a;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.info {
  width: 80%;
  margin: 0;
}
.control {
  width: 20%;
  margin: 0;
  display: flex;
  align-items: center;
}
img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>