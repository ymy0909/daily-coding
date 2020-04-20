/**
* @module 字符串
* @author: ymy
* @description:3.1 字符串比较时间先后
* @since: 创建时间  2020-04-20 13:01:03
*/
var a = "2014-08-08";
var b = "2014-09-09";
 
console.log(a>b, a<b); // false true
console.log("21:00"<"09:10");  // false
console.log("21:00"<"9:10");   // true   时间形式注意补0
