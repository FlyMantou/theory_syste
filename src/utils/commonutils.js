import Vue from 'vue'


const screenWidth = () => {
  return document.body.clientWidth;
}

const screenHeight = () => {
  return document.body.clientHeight;
}

/**
 * 图片预览方法
 * 已注入所有Vue实例，
 * template模板里调用 $imgPreview(src)
 * 组件方法里调用 this.$imgPreview(src)
 */

const imgPreview = (src) => {
  let div = document.createElement('div')
  let img = document.createElement('img')
  let close = document.createElement('i')
  div.className = 'body__img__preview'
  img.src = src
  close.className = 'body__img__close'
  close.onclick = () => {
    document.body.removeChild(div)
  }
  div.appendChild(img)
  div.appendChild(close)
  document.body.appendChild(div)
}

/**
 * 格式化日期方法
 * 已注入所有Vue实例，
 * template模板里调用 $dateFormat(date)
 * 组件方法里调用 this.$dateFormat(date)
 * 例：this.$dateFormat('Dec 27, 2017 3:18:14 PM') 得到 '2017-12-27 15:18:14'
 */

const dateFormat = (date) => {
  if (!date) return ''
  let date_format = new Date(date)
  let year = date_format.getFullYear()
  let month = date_format.getMonth() + 1
  if (month < 10) month = '0' + month
  let mydate = date_format.getDate()
  if (mydate < 10) mydate = '0' + mydate
  let hours = date_format.getHours()
  if (hours < 10) hours = '0' + hours
  let minutes = date_format.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  let seconds = date_format.getSeconds()
  if (seconds < 10) seconds = '0' + seconds
  let time = `${year}-${month}-${mydate} ${hours}:${minutes}:${seconds}`
  return time
}

/**
 * 格式化日期方法
 * 已注入所有Vue实例，
 * template模板里调用 $dateFormatNoTime(date)
 * 组件方法里调用 this.$dateFormatNoTime(date)
 * 例：this.$dateFormatNoTime('Dec 27, 2017 3:18:14 PM') 得到 '2017-12-27'
 */

const dateFormatNoTime = (date) => {
  if (!date) return ''
  let date_format = new Date(date)
  let year = date_format.getFullYear()
  let month = date_format.getMonth() + 1
  if (month < 10) month = '0' + month
  let mydate = date_format.getDate()
  if (mydate < 10) mydate = '0' + mydate
  let time = `${year}-${month}-${mydate}`
  return time
}

/**
 * 获取当天日期方法
 * 已注入所有Vue实例，
 * template模板里调用 $todayFormat
 * 组件方法里调用 this.$todayFormat
 * 例：this.$todayFormat() 得到 '2018-01-31'
 */

const todayFormat = () => {
  let date_format = new Date()
  let year = date_format.getFullYear()
  let month = date_format.getMonth() + 1
  if (month < 10) month = '0' + month
  let date = date_format.getDate()
  if (date < 10) date = '0' + date
  let time = `${year}-${month}-${date}`
  return time
}


/**
 * 判断开始时间和结束时间
 * 已注入所有Vue实例，
 * template模板里调用 $checkTime
 * 组件方法里调用 this.$checkTime
 * 例：this.$checkTime(['2018-01-01', '2018-02-02']) 得到 {'2018/01/01', '2018/02/02'}
 */
const checkTime = (date) => {
  if (!date) {
    Vue.prototype.$notify.error({
      message: '日期不能为空'
    })
    return false
  } else {
    let begTime = date[0].replace(/-/g, '/')
    let endTime = date[1].replace(/-/g, '/')
    if (+((new Date(endTime)).getTime()) < +((new Date(begTime)).getTime())) {
      Vue.prototype.$notify.error({
        message: '开始日期不能大于结束日期'
      })
      return false
    } else {
      begTime = date[0]
      endTime = date[1]
      return {begTime, endTime}
    }
  }
}
/**
 * 判断性别
 * 已注入所有Vue实例，
 * template模板里调用 $typeSex
 * 组件方法里调用 this.$typeSex
 * 例：this.$typeSex(1) 得到 男
 * 参数 0：未知 1:男 2:女
 */

const typeSex = (value) => {
  let sex = ''
  switch (value) {
    case '0' : sex = '未知'
      break
    case '1' : sex = '男'
      break
    case '2' : sex = '女'
      break
  }
  return sex
}

/**
 * 时间戳转换
 * 已注入所有Vue实例，
 * template模板里调用 $timestampToTime
 * 组件方法里调用 this.$timestampToTime
 * 例：this.$timestampToTime(1523440865000) 得到 '2018-04-11 18:1:5'
 */

const timestampToTime = (timestamp) => {
  var date = new Date(timestamp)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() + ' '
  let h = date.getHours() + ':'
  let m = date.getMinutes() + ':'
  let s = date.getSeconds()
  return Y + M + D + h + m + s
}

Vue.prototype.$imgPreview = imgPreview
Vue.prototype.$dateFormat = dateFormat
Vue.prototype.$dateFormatNoTime = dateFormatNoTime
Vue.prototype.$todayFormat = todayFormat
Vue.prototype.$checkTime = checkTime
Vue.prototype.$typeSex = typeSex
Vue.prototype.$timestampToTime = timestampToTime
Vue.prototype.$screenWidth = screenWidth
Vue.prototype.$screenHeight = screenHeight
