<template>
  <section>
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
  data() {
    return {
      names: [
        {
          name: "Gokul Sai",
          Age: 19,
          email: "gokulsai321@gmail.com",
          phone_number: "5646546826"
        },
        {
          name: "Bhanu Prakash",
          // Age: 19,
          email: "bhanuprakash@gmail.com",
          phone_number: "3246347328467"
        },
        {
          name: "Shiva",
          Age: 19,
          email: "shivaprasad@gmail.com",
          phone_number: "97189787977"
        }
      ]
    };
  }
};
</script>