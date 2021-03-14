module.exports = function check(str, bracketsConfig) {
  let i = str.length;
  for (let n = 0; n < i; n++){
    for (let m = 0; m < bracketsConfig.length; m++){
      let brackets = bracketsConfig[m][0] + bracketsConfig[m][1];
      str.includes(brackets) ? str = str.replace(brackets, '') : str = str;
    }
  }
  return str == '' ? true : false;

  // let stack = [], openBr = [], closeBr = [];
  // if (str.length <= 1) return false;
  // for (let i = 0; i < bracketsConfig.length; i++){
  //   (i % 2 === 0) ? openBr.push(bracketsConfig[i]) : closeBr.push(bracketsConfig[i]);
  // }
  // openBr = openBr.join('');
  // closeBr = closeBr.join('');
  // for (i = 0; i < str.length; i++){
  //   if (closeBr.indexOf(str[i]) > -1){
  //     if (stack.length == 0 || (stack.pop() != openBr[closeBr.indexOf(str[i])])){
  //       return false;
  //     }
  //   }
  //   else {
  //       stack.push(str[i]);
  //     }
  // }
  // return (stack.length == 0);
}
