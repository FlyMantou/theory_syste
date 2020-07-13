<template>
  <el-container>
    <el-main>
      <!--1-->
      <el-row type="flex" justify="center" :gutter="10" v-for="keyLine in keys" :key="keyLine[0].key">
        <el-col v-for="key in keyLine" :span="Math.floor(24/keyLine.length)"  :key="key.key">
          <el-button class="key-button">{{key.name}}</el-button>
        </el-col>
      </el-row>


    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "LetterNamesKeyBoard",

    data() {
      return {
        keys: [],
      }
    },

    watch: {},
    computed: {},
    beforeCreate() {
      console.log("生命周期-->beforeCreate");
    },
    beforeMount() {
      console.log("生命周期-->beforeMount");
    },
    mounted() {
      console.log("生命周期-->mounted");
      this.keys = this.$keys().letter;
      console.log(this.keys)

    },

    methods: {}

  }


</script>

<style scoped>


  .el-main{
    padding: 0;
  }
  .el-row {
    margin-bottom: 10px;
    padding: 0;
  }

  .el-col {
    border-radius: 4px;
    padding: 0;
  }




  .key-button {
    width: 100%;
    font-size: 0.2rem;
    padding: 10px;
  }

</style>
