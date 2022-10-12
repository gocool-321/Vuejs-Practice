<template>
  <section>
    <new-friend @add-friend="addNewFriend"></new-friend>
    <details-component
      v-for="name in names"
      :key="name.id"
      :name="name.name"
      :email="name.email"
      :phone="name.phone_number"
      :age="name.age"
    />
  </section>
</template>

<script>
export default {
  methods: {
    addNewFriend(data) {
      console.log(data);
      this.names.push(data);
    }
  },
  data() {
    return {
      names: [
        {
          name: "Gokul Sai",
          Age: 19,
          email: "gokulsai321@gmail.com",
          phone_number: "5646546826",
          isFavorite: false
        },
        {
          name: "Bhanu Prakash",
          // Age: 19,
          email: "bhanuprakash@gmail.com",
          phone_number: "3246347328467",
          isFavorite: false
        },
        {
          name: "Shiva",
          Age: 19,
          email: "shivaprasad@gmail.com",
          phone_number: "97189787977",
          isFavorite: false
        }
      ]
    };
  }
};
</script>