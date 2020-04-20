/**
* @module 数字
* @author: ymy
* @description:4.1 不同进制表示法
* @since: 创建时间  2020-04-20 13:04:32
*/
// ES6中新增了不同进制的书写格式，在后台传参的时候要注意这一点。
29            // 10进制
035            // 8进制29      原来的方式
0o35            // 8进制29      ES6的方式
0x1d            // 16进制29
0b11101            // 2进制29


/**
* @module 数字
* @author: ymy
* @description:
4.2 精确到指定位数的小数
将数字四舍五入到指定的小数位数。
使用 Math.round() 和模板字面量将数字四舍五入为指定的小数位数。 
省略第二个参数 decimals ，数字将被四舍五入到一个整数。
* @since: 创建时间  2020-04-20 13:46:30
*/
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
round(1.345, 2)                 // 1.35
round(1.345, 1)                 // 1.3

/**
* @module 数字
* @author: ymy
* @description:
4.3 数字补0操作
* @since: 创建时间  2020-04-20 13:48:46
*/
// 提取最后一个字符:
// var str="Hello world!";
// var n=str.slice(-1); !
//string.slice(start,end) end不传截取到末尾

// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
// padStart()用于头部补全，padEnd()用于尾部补全。
//第一个参数maxLength指定的最大补全长度，第二个参数是用来补全的字符串。
// padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。

'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
// 另一个用途是提示字符串格式。

'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

const addZero1 = (num, len = 2) => (`0${num}`).slice(-len)
const addZero2 = (num, len = 2) => (`${num}`).padStart( len   , '0')
addZero1(3) // 03
addZero2(32,4)  // 0032
