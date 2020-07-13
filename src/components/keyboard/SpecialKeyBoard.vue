<template>
  <el-container>
    <el-main>
      <!--1-->
      <el-row type="flex" justify="center" :gutter="10">
        <el-col :span="24">
          <letter-names-key-board v-if="current===0"></letter-names-key-board>
          <mode-key-board v-if="current===1"></mode-key-board>
          <interval-key-board v-if="current===2"></interval-key-board>
          <chord-key-board v-if="current===3"></chord-key-board>
          <number-key-board v-if="current===4"></number-key-board>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" :gutter="10">
        <el-col :span="4">
          <el-button  @click="chooseInputKeyBoard(0)" :class="{ 'keyboard-name':true, 'keyboard-name-p':current===0}">Letter
            Names</el-button>
        </el-col>
        <el-col :span="4">
          <el-button  :class="{ 'keyboard-name':true, 'keyboard-name-p':current===1}" @click="chooseInputKeyBoard(1)" class="keyboard-name">Mode</el-button>
        </el-col>
        <el-col :span="4">
          <el-button  :class="{ 'keyboard-name':true, 'keyboard-name-p':current===2}" @click="chooseInputKeyBoard(2)" class="keyboard-name">Interval</el-button>
        </el-col>
        <el-col :span="4">
          <el-button  :class="{ 'keyboard-name':true, 'keyboard-name-p':current===3}" @click="chooseInputKeyBoard(3)" class="keyboard-name">Chord</el-button>
        </el-col>
        <el-col :span="4">
          <el-button  :class="{ 'keyboard-name':true, 'keyboard-name-p':current===4}" @click="chooseInputKeyBoard(4)" class="keyboard-name">Eng&Num</el-button>
        </el-col>

      </el-row>


    </el-main>
  </el-container>
</template>

<script>
  import $ from 'jquery'
  import LetterNamesKeyBoard from "./LetterNamesKeyBoard";
  import ModeKeyBoard from "./ModeKeyBoard";
  import IntervalKeyBoard from "./IntervalKeyBoard";
  import ChordKeyBoard from "./ChordKeyBoard";
  import NumberKeyBoard from "./NumberKeyBoard";

  export default {
    name: "SpecialKeyBoard",
    components: {NumberKeyBoard, ChordKeyBoard, IntervalKeyBoard, ModeKeyBoard, LetterNamesKeyBoard},
    data() {
      return {
        current:0
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
      this.keys = this.$keys().numAndEn;
      console.log(this.keys)

    },

    methods: {
      chooseInputKeyBoard:function(index){
        this.current = index
      }
    }

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
    font-size: 0.05rem;
    padding: 10px;
  }

  .keyboard-name{
    font-size: 2vw;
  }

  .keyboard-name-p{
    background-color: #3a8ee6;
    color: white;
  }

</style>
