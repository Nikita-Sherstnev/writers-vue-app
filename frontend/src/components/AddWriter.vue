<template>
  <div>
    <h3>Добавить писателя</h3>
    <div class="add-writer">
      <form @submit="onSubmit">
        <div>
          <input type="text" v-model="writer.surname" placeholder="Фамилия" />
          <input type="text" v-model="writer.name" placeholder="Имя" />
          <input
            type="text"
            v-model="writer.middlename"
            placeholder="Отчество"
          />
        </div>
        <div>
          <input
            type="text"
            v-model="writer.birthYear"
            placeholder="Год рождения"
          />
          <input
            type="text"
            v-model="writer.deathYear"
            placeholder="Год смерти"
          />
        </div>
        <div>
          <input type="checkbox" v-model="writer.nobel" id="checkbox_nobel" />
          <label for="checkbox_nobel">Нобелевская премия</label>
          <input type="submit" value="Добавить" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddWriter",
  data() {
    return {
      writer: {
        surname: "",
        name: "",
        middlename: "",
        birthYear: "",
        deathYear: "",
        nobel: "",
      },
    };
  },
  methods: {
    ...mapActions(["addWriter"]),
    onSubmit(e) {
      e.preventDefault();

      this.addWriter({
        surname: this.writer.surname,
        name: this.writer.name,
        middlename: this.writer.middlename,
        birthYear: this.writer.birthYear,
        deathYear: this.writer.deathYear,
        nobel: this.writer.nobel,
      });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
form div {
  margin-bottom: 10px;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  margin-right: 10px;
}
input[type="date"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  margin-right: 10px;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
  height: 50px;
  width: 100px;
  margin-left: 10px;
}
</style>