/**
* @module 类型强制转换
* @author: ymy
* @description:
1.1 string强制转换为数字
* @since: 创建时间  2020-04-20 00:47:26
*/

// 可以用*1来转化为数字(实际上是调用.valueOf方法) 然后使用Number.isNaN来判断是否为NaN，或者使用 a !== a 来判断是否为NaN，因为 NaN !== NaN
'32' * 1            // 32
'ds' * 1            // NaN
null * 1            // 0
undefined * 1    // NaN
1  * { valueOf: ()=>'3' }        // 3

// 常用： 也可以使用+来转化字符串为数字
+ '123'            // 123
+ 'ds'               // NaN
+ ''                    // 0
+ null              // 0
+ undefined    // NaN
+ { valueOf: ()=>'3' }    // 3

console.log(null * 1)
console.log('32' * 1  )
console.log(1  * { valueOf: ()=>'3' }  )


/**
* @module 类型强制转换
* @author: ymy
* @description:
1.2 object强制转化为string
* @since: 创建时间  2020-04-20 00:51:14
*/

// 可以使用 字符串+Object 的方式来转化对象为字符串(实际上是调用 .toString() 方法)

'the Math object:' + Math                // "the Math object:[object Math]"
'the JSON object:' + JSON              // "the JSON object:[object JSON]"

console.log('math', Math)
console.log('mathSring', ''+Math)

// 当然也可以覆盖对象的toString和valueOf方法来自定义对象的类型转换：
2  * { valueOf: ()=>'3' }                // 6
'J' + { toString: ()=>'S' }                // "JS"

console.log('ba', 'b'+{ toString:()=>'a'})

// 《Effective JavaScript》P11：当+用在连接字符串时，当一个对象既有toString方法又有valueOf方法时候，JS通过盲目使用valueOf方法来解决这种含糊。
// 对象通过valueOf方法强制转换为数字，通过toString方法强制转换为字符串

'' + {toString:()=>'S',valueOf:()=>'J'}                // J


/**
* @module 类型强制转换
* @author: ymy
* @description:
 使用Boolean过滤数组中的所有假值
* @since: 创建时间  2020-04-20 01:00:54
*/
// 我们知道JS中有一些假值：false，null，0，""，undefined，NaN，怎样把数组中的假值快速过滤呢，可以使用Boolean构造函数来进行一次转换

const compact = arr => arr.filter(Boolean)
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])             // [ 1, 2, 3, 'a', 's', 34 ]


/**
* @module 类型强制转换
* @author: ymy
* @description:
双位运算符 ~~
* @since: 创建时间  2020-04-20 01:03:11
*/
// 可以使用双位操作符来替代正数的 Math.floor( )，替代负数的Math.ceil( )。双否定位操作符的优势在于它执行相同的操作运行速度更快。
//正数向下取整 负数向上取整
Math.floor(4.9) === 4      //true
// 简写为：
~~4.9 === 4      //true
console.log('双位运算符',~~-4.9)

//不过要注意，对正数来说 ~~ 运算结果与 Math.floor( ) 运算结果相同，而对于负数来说与Math.ceil( )的运算结果相同：
~~4.5                // 4
Math.floor(4.5)      // 4
Math.ceil(4.5)       // 5

~~-4.5        		// -4
Math.floor(-4.5)     // -5
Math.ceil(-4.5)      // -4


/**
* @module 类型强制转换
* @author: ymy
* @description:短路运算符
* @since: 创建时间  2020-04-20 09:12:18
*/
// &&为取假运算，从左到右依次判断，如果遇到一个假值，就返回假值，以后不再执行，否则返回最后一个真值
// ||为取真运算，从左到右依次判断，如果遇到一个真值，就返回真值，以后不再执行，否则返回最后一个假值

// let param1 = expr1 && expr2
// let param2 = expr1 || expr2

let variable1
let variable2 = variable1  || 'foo'//如果variable1是真值就直接返回了，后面短路就不会被返回了，如果为假值，则会返回后面的foo。

let param
let variable = param && param.prop//如果param如果为真值则返回param.prop属性，否则返回param这个假值，这样在某些地方防止param为undefined的时候还取其属性造成报错。


/**
* @module 类型强制转换
* @author: ymy
* @description:1.6 取整 | 0
* @since: 创建时间  2020-04-20 09:38:03
*/
1.3 | 0         // 1
-1.9 | 0        // -1


/**
* @module 类型强制转换
* @author: ymy
* @description:1.7 判断奇偶数 & 1
* @since: 创建时间  2020-04-20 09:38:36
*/

const num=4;
!!(num & 1)                    // true
// !!(num % 2)                    // true

console.log('是不是奇数', !!(num & 1))
// console.log('是不是偶数', !!(num % 2))
