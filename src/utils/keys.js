import Vue from 'vue'


const keys = () =>{
  return {
    numAndEn:[
      [getKey("1","1001"),getKey("2","1002"),getKey("3","1003"),getKey("4","1004"),getKey("5","1005"),getKey("6","1006"),getKey("7","1007"),getKey("8","1008"),getKey("9","1009"),getKey("0","1000")],
      [getKey("Q","1010"),getKey("W","1011"),getKey("E","1012"),getKey("R","1013"),getKey("T","1014"),getKey("Y","1015"),getKey("U","1016"),getKey("I","1017"),getKey("O","1018"),getKey("P","1019")],
      [getKey("A","1020"),getKey("S","1021"),getKey("D","1022"),getKey("F","1023"),getKey("G","1024"),getKey("H","1025"),getKey("J","1026"),getKey("K","1027"),getKey("L","1028")],
      [getKey("Z","1030"),getKey("X","1031"),getKey("C","1032"),getKey("V","1033"),getKey("B","1034"),getKey("N","1035"),getKey("M","1036")],
      [getKey(Constants.keyConstants.caps,"1040"),getKey(Constants.keyConstants.previous,"1041"),getKey(Constants.keyConstants.space,"1042"),getKey(Constants.keyConstants.next,"1043"),getKey(Constants.keyConstants.backspace,"1044")],
    ],
    chord:[
      [getKey("Major Triad","1050"),getKey("Minor Triad","1051"),getKey("Augmented Triad","1052"),getKey("Diminished Triad","1053")],
      [getKey("Dominant 7th","1060"),getKey("Major 7th","1061"),getKey("Minor 7th","1062"),getKey("Minor-major 7th","1063")],
      [getKey("Minor-major 7th","1070"),getKey("Diminished 7th","1071"),getKey("Augmented 7th","1072"),getKey("Augmented-major 7th","1073")],
      [getKey("Suspended 2nd","1080"),getKey("Suspended 4th","1081"),getKey("Dominant 7th,Sus. 4th","1082")],
      [getKey(Constants.keyConstants.caps,"1090"),getKey("Ⅰ","1091"),getKey("Ⅱ","1092"),getKey("Ⅲ","1093"),getKey("Ⅳ","1094"),getKey("Ⅴ","1095"),getKey("Ⅵ","1096"),getKey("Ⅶ","1097")],
      [getKey("0","1100"),getKey("5","1101"),getKey("6","1102"),getKey("6","1103"),getKey("7","1104"),getKey("6","1105"),getKey("4","1106"),getKey("2","1107")],
      [getKey(Constants.keyConstants.previous,"1201"),getKey(Constants.keyConstants.space,"1202"),getKey(Constants.keyConstants.next,"1203"),getKey(Constants.keyConstants.backspace,"1204")],
    ],
    mode:[
      [getKey("Major","1210"),getKey("Natural Minor","1211")],
      [getKey("Harmonic Minor","1220"),getKey("Melodic Minor","1221")],
      [getKey("lonian","1230"),getKey("Dorian","1231"),getKey("Phrygian","1232"),getKey("Lydian","1233")],
      [getKey("Mixolydian","1240"),getKey("Aeolian","1241"),getKey("Aeolian","1242")],
      [getKey(Constants.keyConstants.caps,"1250"),getKey(Constants.keyConstants.previous,"1251"),getKey(Constants.keyConstants.space,"1252"),getKey(Constants.keyConstants.next,"1253"),getKey(Constants.keyConstants.backspace,"1254")],
    ],
    interval:[
      [getKey("d2","1260"),getKey("d3","1261"),getKey("d4","1262"),getKey("d5","1263"),getKey("d6","1264"),getKey("d7","1265"),getKey("d8","1266")],
      [getKey("m2","1270"),getKey("m3","1271"),getKey("m6","1272"),getKey("m7","1273")],
      [getKey("M2","1280"),getKey("M3","1281"),getKey("P4","1282"),getKey("P5","1283"),getKey("M6","1284"),getKey("M7","1285"),getKey("P8","1286")],
      [getKey("A2","1290"),getKey("A3","1291"),getKey("A4","1292"),getKey("A5","1293"),getKey("A6","1294"),getKey("A7","1295"),getKey("A8","1296")],
      [getKey(Constants.keyConstants.caps,"1300"),getKey(Constants.keyConstants.previous,"1301"),getKey(Constants.keyConstants.space,"1302"),getKey(Constants.keyConstants.next,"1303"),getKey(Constants.keyConstants.backspace,"1304")],
    ],
    letter:[
      [getKey("C#","1310"),getKey("D#","1311"),getKey("E#","1312"),getKey("F#","1313"),getKey("G#","1314"),getKey("A#","1315"),getKey("B#","1316")],
      [getKey("C","1320"),getKey("D","1321"),getKey("E","1322"),getKey("F","1323"),getKey("G","1324"),getKey("A","1325"),getKey("B","1326")],
      [getKey("Cb","1330"),getKey("Db","1331"),getKey("Eb","1332"),getKey("Fb","1333"),getKey("Gb","1334"),getKey("Ab","1335"),getKey("Bb","1336")],
      [getKey(Constants.keyConstants.caps,"1340"),getKey(Constants.keyConstants.previous,"1341"),getKey(Constants.keyConstants.space,"1342"),getKey(Constants.keyConstants.next,"1343"),getKey(Constants.keyConstants.backspace,"1344")],
    ],
  }
};

function getKey(name,key){
  return {
    name:name,
    key:key
  }
}

const Constants = {
  keyConstants:{
    caps:"CAPS",
    space:"Space",
    previous:"Previous",
    next:"Next",
    backspace:"Backspace",

  }

};

function getConstantName(){
  return{

  }
}


Vue.prototype.$keys = keys;

