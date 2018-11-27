function setHeight() {
  // 获取主体元素
  var pageBody = document.getElementsByClassName('page-body')[0]
  // 头部的高度
  var pageHeader = document.getElementsByClassName('page-header')[0].offsetHeight
  // 导航的高度
  var mainNav = document.getElementsByClassName('main-nav')[0].offsetHeight
  // 底部的高度
  var pageFooter = document.getElementsByClassName('page-footer')[0].offsetHeight
  // 浏览器窗口的高度
  var winHeight = window.innerHeight
  // var browerHeight = window.innerHeight

  var bodyHeight = winHeight - pageHeader - mainNav - pageFooter
  pageBody.style.height = bodyHeight + 'px'
}
setHeight()
window.onresize = setHeight