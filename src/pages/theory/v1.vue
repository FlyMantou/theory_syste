<template>
  <div>

    <el-container>
      <el-header style="padding: 0;text-align: center">
        <el-row
          style="padding-top: 0.5rem;padding-bottom: 0.5rem;background-color: #F56C6C;padding-left: 0;color: white">
          <el-col :span="2">
            <svg t="1563786118786" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="3824" width="20" height="20">
              <path
                d="M964.199 860.538c-66.443-160.959-200.857-278.982-379.102-279.169v139.004c0 25.654-13.998 49.145-36.432 61.252-22.431 12.102-49.628 10.803-70.786-3.447l-413.738-277.994c-19.185-12.878-30.719-34.614-30.719-57.817 0-23.28 11.538-44.932 30.719-57.825l413.738-278.005c21.155-14.167 48.354-15.53 70.786-3.447s36.432 35.619 36.432 61.28v139.004c228.5 0 413.721 186.674 413.721 417.002-0.002 48.799-6.582 95.452-34.619 140.163v0zM516.131 373.102v-139.378c0-20.993 0-57.706 0-57.706s-31.291-1.591-48.65 10.018l-323.713 215.454c-15.76 10.542-25.2 23.922-25.2 42.942 0 18.985 9.441 36.756 25.2 47.314l323.713 201.3c17.364 11.664 48.65 12.209 48.65 12.209s0-32.357 0-53.358v-139.37c395.357 0 448.921 267.402 448.921 267.402 0-316.076-241.982-406.801-448.921-406.801v0z"
                p-id="3825" fill="#ffffff"></path>
            </svg>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple-dark" style="font-weight: bold">乐理课习题</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="12">
            <span style="left: 0">操作乐谱</span>
          </el-col>
        </el-row>
        <el-row>
          <div ref="score"></div>
        </el-row>
        <!--第一行-->
        <el-row>
          <el-button @click="handleAddNote">
            <svg t="1563766582150" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="1511" width="20" height="20">
              <path
                d="M921.6 512c0 147.456-183.296 266.24-409.6 266.24S102.4 659.456 102.4 512s183.296-266.24 409.6-266.24 409.6 118.784 409.6 266.24z m-583.68 73.728c51.2 121.856 171.008 188.416 268.288 147.456S738.304 560.128 686.08 438.272c-51.2-121.856-171.008-188.416-268.288-147.456S285.696 463.872 337.92 585.728z"
                p-id="1512"></path>
            </svg>
          </el-button>

          <el-button @click="handleMoveUp">
            <svg t="1563781959764" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="2242" width="20" height="20">
              <path
                d="M901.3 761.506c46.365 0 72.696-61.253 38.931-95.029L550.973 277.221c-22.322-22.322-55.522-22.322-77.854 0L83.881 666.489c-34.645 34.646-5.72 95.028 39.496 95.028l777.922-0.011z"
                p-id="2243"></path>
            </svg>
          </el-button>
          <el-button @click="handleMoveDown">
            <svg t="1563782095525" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="3098" width="20" height="20">
              <path
                d="M123.377 260.48c-45.217 0-74.14 60.382-39.496 95.028L473.12 744.776c22.332 22.32 55.532 22.32 77.854 0L940.23 355.519c33.765-33.775 7.434-95.028-38.932-95.028l-777.922-0.011z"
                p-id="3099"></path>
            </svg>
          </el-button>
          <el-button @click="handleSharp">
            <svg t="1563851051304" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1679" width="20" height="20">
              <path
                d="M706.56 305.152L365.568 501.76c-23.552 13.312-52.224 5.12-65.536-17.408-13.312-23.552-5.12-53.248 17.408-66.56l340.992-196.608c23.552-13.312 52.224-5.12 65.536 17.408 13.312 23.552 5.12 53.248-17.408 66.56zM706.56 606.208L365.568 802.816c-23.552 13.312-52.224 5.12-65.536-17.408-13.312-23.552-5.12-52.224 17.408-65.536L658.432 522.24c23.552-13.312 52.224-5.12 65.536 17.408 13.312 23.552 5.12 53.248-17.408 66.56z"
                p-id="1680"></path>
              <path
                d="M437.248 921.6c-13.312 0-23.552-10.24-23.552-23.552V182.272c0-13.312 10.24-23.552 23.552-23.552 13.312 0 23.552 10.24 23.552 23.552v715.776c0 13.312-10.24 23.552-23.552 23.552zM601.088 865.28c-13.312 0-23.552-10.24-23.552-23.552V125.952c0-13.312 10.24-23.552 23.552-23.552 13.312 0 23.552 10.24 23.552 23.552v715.776c1.024 13.312-10.24 23.552-23.552 23.552z"
                p-id="1681"></path>
            </svg>
          </el-button>
        </el-row>
        <!--第二行-->
        <el-row style="margin-top: 0.5rem">
          <el-button @click="handleFlat">
            <svg t="1563851078806" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1832" width="20" height="20">
              <path
                d="M384 535.552c21.504-12.288 68.608-32.768 82.944-39.936 71.68-36.864 144.384-27.648 183.296 22.528 45.056 57.344 39.936 156.672-14.336 214.016C582.656 787.456 412.672 921.6 367.616 921.6m32.768-314.368v225.28c3.072 12.288 15.36 7.168 22.528 2.048C559.104 731.136 654.336 646.144 573.44 569.344c-25.6-24.576-58.368-16.384-90.112-2.048"
                p-id="1833"></path>
              <path
                d="M391.168 898.048c0 13.312-10.24 23.552-23.552 23.552-13.312 0-23.552-10.24-23.552-23.552V125.952c0-13.312 10.24-23.552 23.552-23.552 13.312 0 23.552 10.24 23.552 23.552"
                p-id="1834"></path>
            </svg>
          </el-button>
          <el-button @click="handleDoubleSharp">
            <svg t="1563851138836" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2303" width="20" height="20">
              <path
                d="M680.8576 560.4352c-57.2416-3.6864-89.088-2.7648-141.7216-51.2 51.8144-48.3328 78.6432-45.3632 141.7216-51.2 6.144 0 12.0832-0.7168 12.5952-6.9632L706.56 316.8256a8.8064 8.8064 0 0 0-9.216-9.6256l-137.9328 7.8848c-6.0416 0-6.656 6.2464-7.0656 12.3904-3.584 57.6512-2.7648 89.8048-49.664 142.336a221.0816 221.0816 0 0 1-51.2-147.3536 7.4752 7.4752 0 0 0-6.9632-7.3728L306.176 307.2a8.8064 8.8064 0 0 0-9.216 9.6256l12.4928 127.7952a14.9504 14.9504 0 0 0 13.1072 13.0048c55.6032 4.608 93.0816 11.9808 139.776 51.2A213.6064 213.6064 0 0 1 317.44 560.5376a7.3728 7.3728 0 0 0-7.2704 7.0656l-7.68 139.8784a8.8064 8.8064 0 0 0 9.5232 9.3184l125.952-12.6976A14.848 14.848 0 0 0 450.56 690.8928c4.5056-57.0368 11.9808-95.1296 51.2-143.36 47.2064 52.1216 44.3392 79.4624 50.0736 143.36 0 6.144 0.7168 12.1856 6.8608 12.8L691.3024 716.8a8.8064 8.8064 0 0 0 9.5232-9.3184l-7.68-139.8784c-0.3072-6.144-6.144-6.7584-12.288-7.168z"
                p-id="2304"></path>
            </svg>
          </el-button>
          <el-button @click="handleDoubleFlat">
            <svg t="1563851165194" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2452" width="20" height="20">
              <path
                d="M809.5744 518.144c-38.4-50.176-110.2848-59.392-181.1456-22.528-12.8 6.4512-51.2 23.6544-74.9568 36.0448V125.952a23.2448 23.2448 0 1 0-46.4896 0v428.8512a135.4752 135.4752 0 0 0-20.48-36.6592c-38.4-50.176-110.2848-59.392-181.1456-22.528-12.6976 6.4512-51.712 23.6544-74.8544 36.0448V125.952a23.3472 23.3472 0 1 0-46.592 0v772.096a23.04 23.04 0 0 0 23.6544 23.552c44.544 0 212.2752-134.144 265.216-189.44a161.6896 161.6896 0 0 0 34.2016-58.2656V898.048a23.04 23.04 0 0 0 23.2448 23.552c44.544 0 212.5824-134.144 265.216-189.44 53.6576-57.344 58.6752-156.672 14.1312-214.016zM262.2464 834.56c-7.0656 5.12-19.2512 10.24-22.2208-2.048v-225.28l81.92-39.936c31.4368-14.336 63.7952-22.528 89.088 2.048 80.4864 76.8-14.1312 161.792-148.7872 265.216z m322.6624 0c-7.0656 5.12-19.2512 10.24-22.3232-2.048v-225.28l81.92-39.936c31.3344-14.336 63.7952-22.528 89.088 2.048 80.0768 76.8-14.1312 161.792-148.6848 265.216z"
                p-id="2453"></path>
            </svg>
          </el-button>

          <el-button @click="handleAddDotToAll">
            Dot
          </el-button>
        </el-row>
        <!--第三行-->
        <el-row style="margin-top: 0.5rem">
          <el-button>
            <i class="el-icon-plus"></i>
          </el-button>
          <el-button @click="handleDeleteSelect">
            Del
          </el-button>
          <el-button @click="handleDoubleFlat">
            <svg t="1563851165194" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2452" width="20" height="20">
              <path
                d="M809.5744 518.144c-38.4-50.176-110.2848-59.392-181.1456-22.528-12.8 6.4512-51.2 23.6544-74.9568 36.0448V125.952a23.2448 23.2448 0 1 0-46.4896 0v428.8512a135.4752 135.4752 0 0 0-20.48-36.6592c-38.4-50.176-110.2848-59.392-181.1456-22.528-12.6976 6.4512-51.712 23.6544-74.8544 36.0448V125.952a23.3472 23.3472 0 1 0-46.592 0v772.096a23.04 23.04 0 0 0 23.6544 23.552c44.544 0 212.2752-134.144 265.216-189.44a161.6896 161.6896 0 0 0 34.2016-58.2656V898.048a23.04 23.04 0 0 0 23.2448 23.552c44.544 0 212.5824-134.144 265.216-189.44 53.6576-57.344 58.6752-156.672 14.1312-214.016zM262.2464 834.56c-7.0656 5.12-19.2512 10.24-22.2208-2.048v-225.28l81.92-39.936c31.4368-14.336 63.7952-22.528 89.088 2.048 80.4864 76.8-14.1312 161.792-148.7872 265.216z m322.6624 0c-7.0656 5.12-19.2512 10.24-22.3232-2.048v-225.28l81.92-39.936c31.3344-14.336 63.7952-22.528 89.088 2.048 80.0768 76.8-14.1312 161.792-148.6848 265.216z"
                p-id="2453"></path>
            </svg>
          </el-button>

          <el-button @click="handleDoubleFlat">
            <svg t="1563851165194" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2452" width="20" height="20">
              <path
                d="M809.5744 518.144c-38.4-50.176-110.2848-59.392-181.1456-22.528-12.8 6.4512-51.2 23.6544-74.9568 36.0448V125.952a23.2448 23.2448 0 1 0-46.4896 0v428.8512a135.4752 135.4752 0 0 0-20.48-36.6592c-38.4-50.176-110.2848-59.392-181.1456-22.528-12.6976 6.4512-51.712 23.6544-74.8544 36.0448V125.952a23.3472 23.3472 0 1 0-46.592 0v772.096a23.04 23.04 0 0 0 23.6544 23.552c44.544 0 212.2752-134.144 265.216-189.44a161.6896 161.6896 0 0 0 34.2016-58.2656V898.048a23.04 23.04 0 0 0 23.2448 23.552c44.544 0 212.5824-134.144 265.216-189.44 53.6576-57.344 58.6752-156.672 14.1312-214.016zM262.2464 834.56c-7.0656 5.12-19.2512 10.24-22.2208-2.048v-225.28l81.92-39.936c31.4368-14.336 63.7952-22.528 89.088 2.048 80.4864 76.8-14.1312 161.792-148.7872 265.216z m322.6624 0c-7.0656 5.12-19.2512 10.24-22.3232-2.048v-225.28l81.92-39.936c31.3344-14.336 63.7952-22.528 89.088 2.048 80.0768 76.8-14.1312 161.792-148.6848 265.216z"
                p-id="2453"></path>
            </svg>
          </el-button>
        </el-row>

        <mode-key-board/>

        <chord-key-board/>

        <number-key-board/>

        <interval-key-board/>

        <letter-names-key-board/>


      </el-main>


      <el-footer>

      </el-footer>

    </el-container>

    <div class="footer">
      <special-key-board class="special-key-board"/>

    </div>
  </div>

</template>

<script>
  import $ from 'jquery'
  import ModeKeyBoard from "../../components/keyboard/ModeKeyBoard";
  import ChordKeyBoard from "../../components/keyboard/ChordKeyBoard";
  import NumberKeyBoard from "../../components/keyboard/NumberKeyBoard";
  import IntervalKeyBoard from "../../components/keyboard/IntervalKeyBoard";
  import LetterNamesKeyBoard from "../../components/keyboard/LetterNamesKeyBoard";
  import SpecialKeyBoard from "../../components/keyboard/SpecialKeyBoard";

  export default {
    name: "v1",
    components: {SpecialKeyBoard, LetterNamesKeyBoard, IntervalKeyBoard, NumberKeyBoard, ChordKeyBoard, ModeKeyBoard},
    data() {
      return {
        selectIndex: 0,
        cursorElement: {},
        context: {},
        noteArr: [],
        noteData: {
          clef: "treble",
          ts: "4/4",
          ks: "C",
          noteSeq: [
            {
              clef: "treble",
              keys: [
                "c/4", /* c##/4, 0,无，n，还原，b，降，bb，重降，#，升，##，重生*/
                "c/5",
              ],
              duration: "w", /*w,h,q,8,16,32,64,wr,hr,qr,8r,16r,32r,64r*/
              dot: false,
            }
          ]
        }
      }
    },
    watch: {
      selectIndex(val) {
        let item = this.noteArr[val];
        let bound = item.getBoundingBox();
        console.log("watch:bound-->" + bound);
      }
    },
    mounted() {

      let div = this.$refs.score;
      //console.log(this.$screenWidth())
      let renderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
      renderer.resize(this.$screenWidth() - 20, 200);
      this.context = renderer.getContext();
      this.context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

      this.cursorElement = document.createElement("img");
      this.cursorElement.style.position = "absolute";
      this.cursorElement.style.zIndex = "1";
      div.appendChild(this.cursorElement);

      this.refreshStaff(this.noteData);


      //this.drawCursor(0, 0, 50, 50);

      console.log(this.noteArr);
      let _this = this;
      $(div).on("click", function (e) {
        for (let i = 0; i < _this.noteArr.length; i++) {
          let item = _this.noteArr[i];
          let bound = item.getBoundingBox();
          console.log(e)
          console.log(bound);
          if (_this.isPointInRect(e.offsetX, e.offsetY, bound.x, bound.y, bound.x + bound.w, bound.y + bound.h)) {
            _this.selectIndex = i;
            console.log(_this.selectIndex);
            _this.drawCursor(bound.x, bound.y, bound.w, bound.h);
          }
        }
      })

      /*let cxt=canvas.getContext("2d");
      cxt.fillStyle="rgba(0,134,139,0.8)";
      let offsetX = $(note).offset().left;
      let offsetY = $(note).offset().top;
      console.log(offsetX);
      console.log(offsetY);
      console.log(bound);
      cxt.fillRect(bound.x,40+bound.y,bound.w,bound.h);*/

      //$(canvas).hide();
      /*$(note).on("touchstart", function (e) {
        console.log("touchstart")
        e.preventDefault();
      })
      $(note).on("touchend", function (e) {
        console.log("touchend")
        e.preventDefault();
      })
      $(note).on("touchmove", function (e) {
        console.log("touchmove")
        let left = e.targetTouches[0].clientX;
        let top = e.targetTouches[0].clientY;

        note.style.top = (top-10)+'px';
        note.style.left = (left-10)+'px';

        e.preventDefault();
      })*/
    },
    methods: {
      handleAddDotToAll() {
        console.log("handleAddDotToAll");
        this.noteData.noteSeq[this.selectIndex].dot = !this.noteData.noteSeq[this.selectIndex].dot;
        this.refreshStaff(this.noteData)
      },
      handleDeleteSelect() {
        this.noteData.noteSeq.splice(this.selectIndex, 1);
        this.selectIndex = this.noteData.noteSeq.length - 1;
        this.refreshStaff(this.noteData)
      },
      handleAddNote() {
        console.log("handleAddNote");
        this.noteData.noteSeq.push({
          clef: "treble",
          keys: [
            "c/4", /* c##/4, 0,无，n，还原，b，降，bb，重降，#，升，##，重生*/
          ],
          duration: "w", /*w,h,q,8,16,32,64,wr,hr,qr,8r,16r,32r,64r*/
          dot: false,
        });
        this.selectIndex = this.noteData.noteSeq.length - 1;
        this.refreshStaff(this.noteData);
      },
      handleSharp() {
        for (let i = 0; i < this.noteData.noteSeq[this.selectIndex].keys.length; i++) {
          let item = this.noteData.noteSeq[this.selectIndex].keys[i];
          let str1 = item.charAt(0);
          let str2 = item.charAt(item.length - 1);
          this.noteData.noteSeq[this.selectIndex].keys[i] = str1 + "#/" + str2;
        }
        this.refreshStaff(this.noteData);
      },
      handleFlat() {
        for (let i = 0; i < this.noteData.noteSeq[this.selectIndex].keys.length; i++) {
          let item = this.noteData.noteSeq[this.selectIndex].keys[i];
          let str1 = item.charAt(0);
          let str2 = item.charAt(item.length - 1);
          this.noteData.noteSeq[this.selectIndex].keys[i] = str1 + "b/" + str2;
        }
        this.refreshStaff(this.noteData);
      },
      handleDoubleSharp() {
        for (let i = 0; i < this.noteData.noteSeq[this.selectIndex].keys.length; i++) {
          let item = this.noteData.noteSeq[this.selectIndex].keys[i];
          let str1 = item.charAt(0);
          let str2 = item.charAt(item.length - 1);
          this.noteData.noteSeq[this.selectIndex].keys[i] = str1 + "##/" + str2;
        }
        this.refreshStaff(this.noteData);
      },
      handleDoubleFlat() {
        for (let i = 0; i < this.noteData.noteSeq[this.selectIndex].keys.length; i++) {
          let item = this.noteData.noteSeq[this.selectIndex].keys[i];
          let str1 = item.charAt(0);
          let str2 = item.charAt(item.length - 1);
          this.noteData.noteSeq[this.selectIndex].keys[i] = str1 + "bb/" + str2;
        }
        this.refreshStaff(this.noteData);
      },
      handleMoveUp() {
        console.log("handleMoveUp");
        for (let i = 0; i < this.noteData.noteSeq[this.selectIndex].keys.length; i++) {
          let item = this.noteData.noteSeq[this.selectIndex].keys[i];
          this.noteData.noteSeq[this.selectIndex].keys[i] = this.getUpOrDownNoteName(item, "up");
        }
        this.refreshStaff(this.noteData);
      },
      handleMoveDown() {
        console.log("handleMoveDown");
        for (let i = 0; i < this.noteData.noteSeq[this.selectIndex].keys.length; i++) {
          let item = this.noteData.noteSeq[this.selectIndex].keys[i];
          this.noteData.noteSeq[this.selectIndex].keys[i] = this.getUpOrDownNoteName(item, "down");
        }
        this.refreshStaff(this.noteData);
      },
      refreshStaff(data) {
        this.context.clear();
        let stave = new Vex.Flow.Stave(0, 0, this.$screenWidth() - 40);
        stave.addClef(data.clef).addTimeSignature(data.ts).addKeySignature(data.ks);
        let noteArr = [];
        for (let i = 0; i < data.noteSeq.length; i++) {
          let item = data.noteSeq[i];
          let note = new Vex.Flow.StaveNote({clef: item.clef, keys: item.keys, duration: item.duration});
          for (let j = 0; j < item.keys.length; j++) {
            let key = item.keys[j];
            let acc = key.slice(1, key.indexOf("/"));
            if (acc !== "") {
              note.addAccidental(j, new Vex.Flow.Accidental(acc));
            }
          }
          if (item.dot) {
            note.addDotToAll();
          }
          console.log(note);
          noteArr.push(note);
        }
        Vex.Flow.Formatter.FormatAndDraw(this.context, stave, noteArr);
        stave.setContext(this.context).draw();
        let bound = stave.getBoundingBox();
        var beams = Vex.Flow.Beam.generateBeams(noteArr);
        beams.forEach(function (b) {
          b.setContext(this.context).draw()
        });
        this.noteArr = noteArr;
        this.selectNote();
      },
      selectNote() {
        let note = this.noteArr[this.selectIndex];
        let bound = note.getBoundingBox();
        this.drawCursor(bound.x, bound.y, bound.w, bound.h);
      },
      getUpOrDownNoteName(key, direction) {
        let dic = ["c", "d", "e", "f", "g", "a", "b"];
        let noteName = key.charAt(0);
        let octave = key.charAt(key.length - 1);
        let acc = key.slice(1, key.indexOf("/"));
        let index = dic.indexOf(noteName);
        let noteNameResult;
        let octaveResult = parseInt(octave);
        if (direction === "up") {
          if (index + 1 < dic.length) {
            noteNameResult = dic[index + 1];
          } else {
            noteNameResult = dic[0];
            octaveResult++;
          }
        } else {
          if (index - 1 > -1) {
            noteNameResult = dic[index - 1];
          } else {
            noteNameResult = dic[dic.length - 1];
            octaveResult--;
          }
        }
        let ret = noteNameResult + acc + "/" + octaveResult;
        console.log(ret)
        return ret;
      },
      drawCursor(l, t, w, h) {
        console.log("l-->" + l + ",t-->" + t + ",w-->" + w + ",h-->" + h)
        this.cursorElement.style.top = t + "px";
        this.cursorElement.style.left = l + "px";
        this.cursorElement.height = h;
        this.cursorElement.width = w;
        const c = document.createElement("canvas");
        c.width = w;
        c.height = 1;
        const ctx = c.getContext("2d");
        ctx.globalAlpha = 0.5;
        const gradient = ctx.createLinearGradient(0, 0, this.cursorElement.width, 0);
        gradient.addColorStop(0, "white"); // it was: "transparent"
        gradient.addColorStop(0.2, "#24b7ed");
        gradient.addColorStop(0.8, "#24b7ed");
        gradient.addColorStop(1, "white"); // it was: "transparent"
        //ctx.fillStyle = gradient;
        ctx.fillStyle = "#24b7ed";
        ctx.fillRect(0, 0, w, 1);
        // Set the actual image
        this.cursorElement.src = c.toDataURL("image/png");
        this.cursorElement.style.display = "";
      },

      isPointInRect(x, y, l, t, r, b) {
        if (x > l && x < r && y > t && y < b) {
          return true;
        } else {
          return false;
        }
      }

    },
    computed: {},
    beforeDestroy() {

    }
  }
</script>

<style scoped>
  html,body{-webkit-text-size-adjust:none;}
  svg {
    display: inline-block;
  }

  .el-footer {
    width: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 0;
  }
  .footer {
    width: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 0;
  }

  .special-key-board {

    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: white;
  }

</style>
