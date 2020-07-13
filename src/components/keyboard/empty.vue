<template>

</template>

<script>
    export default {
        name: "empty",

      data() {
        return{

        }
      },

      watch: {

      },
      computed: {

      },
      beforeCreate() {
        console.log("生命周期-->beforeCreate");
      },
      beforeMount() {
        console.log("生命周期-->beforeMount");
      },
      mounted() {
        console.log("生命周期-->mounted");
      },

      methods: {

      }

    }
</script>

<style scoped>

</style>
