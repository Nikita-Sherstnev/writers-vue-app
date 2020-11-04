<template>
  <div class="writers">
    <h1>Писатели</h1>
    <AddWriter />
    <div v-for="writer in allWriters" :key="writer.id" class="writer">
      <div class="info">
        <span class="name">
          {{ writer.surname }}
          {{ writer.name }}
          {{ writer.middlename }}
        </span>
        <br />
        Годы жизни: {{ writer.birthYear }} - {{ writer.deathYear }}<br />
        Количество произведений: {{ writer.amountOfBooks }}<br />
        Нобелевская премия: <span v-if="writer.nobel == true">Есть</span
        ><span v-else>Нет</span><br />
      </div>
      <div class="control">
        <img @click="editWriter(writer.id)" src="@/assets/update.svg" />
        <img @click="deleteWriter(writer.id)" src="@/assets/delete.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import AddWriter from "@/components/AddWriter.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WritersList",
  components: {
    AddWriter,
  },
  methods: {
    ...mapActions(["fetchWriters", "deleteWriter", "updateWriter"]),
    editWriter(id) {
      this.updateWriter(id);
    },
  },
  computed: mapGetters(["allWriters"]),
  created() {
    this.fetchWriters();
  },
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
.name {
  font-weight: bold;
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