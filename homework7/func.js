module.exports = {
  translateLetter: function (letter, flag) {  
    // 如果flag=0，则将字符串转换成大写
    if(flag == 0)
    {
      letter = letter.toUpperCase()   
      // console.log(letter)
    }
    // flag =1,则将字符串转换成小写
    else if(flag == 1)
    {
      letter = letter.toLowerCase()
    }
    return letter
  },
  sortLetter: function (letter, flag) {  
    var lettArray = letter.split('')
    // flag=0 ,字符串从小到大排序
    if(flag == 0){ 
      lettArray = lettArray.sort()
      letter = lettArray.join('')
    }
    //flag=1, 字符串从大到小排序
    else if (flag == 1) {
      lettArray = lettArray.sort()
      letter = lettArray.reverse().join('')
    }
    return letter
  }
}