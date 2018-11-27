$(function () {
  // 自适应主体内容
  function setHeight() {
    var $pageBody = $(".page-body")
    var $pageHeader = $(".page-header").height()
    var $mainNav = $(".main-nav").height()
    var $pageFooter = $(".page-footer").height()
    var $winHeight = $(window).height()
    // alert($winHeight)
    var $bodyHeight = $winHeight - $pageHeader - $mainNav - $pageFooter
    $pageBody.css('height', $bodyHeight)
    var $pageBodyContain = $(".page-body-contain").height()
    // alert( $pageBodyContain)
    $(".page-body-left").css('height', $pageBodyContain)
    $(".page-body-right").css('height', $pageBodyContain)

  }
  setHeight()
  $(window).resize(function () {
    setHeight()
  });

  // 关闭窗口
  $(".page-body-close").click(function (e) {
    e.preventDefault();
    window.close()
  });

  // 字体大小
  $(".page-body-sub span a").each(function (i, val) {
    // alert(val)
    $(this).click(function () {
      if(i==0)
      {
        $("*").css('font-size', '50px')
      }
      else if(i==1)
      {
        $("*").css('font-size', '30px')
      }
       else
       {
        $("*").css('font-size', '10px')
       }
    })

  });
})
