
// 链接：https://juejin.im/post/5b51e5d3f265da0f4861143c

/**
* @module 数组
* @author: ymy
* @description:
5.1 reduce方法同时实现map和filter
假设现在有一个数列，你希望更新它的每一项（map的功能）
然后筛选出一部分（filter的功能）。如果是先使用map然后filter的话，你需要遍历这个数组两次。
在下面的代码中，我们将数列中的值翻倍，然后挑选出那些大于50的数。
* @since: 创建时间  2020-04-20 14:31:18
*/

const numbers = [10, 20, 30, 40];
const filterFun = (total,num)=>{
  num = num * 2
  if(num > 50){
    total.push(num)
  }
  return total
}
const doubledOver50 = numbers.reduce(filterFun,[])
console.log(doubledOver50)


/**
* @module 数组
* @author: ymy
* @description:
5.2 统计数组中相同项的个数
很多时候，你希望统计数组中重复出现项的个数然后用一个对象表示。
那么你可以使用reduce方法处理这个数组。
下面的代码将统计每一种车的数目然后把总数用一个对象表示。
* @since: 创建时间  2020-04-20 14:40:58
*/
var cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
var carsObj = cars.reduce((obj,key)=>{
    // if(!obj[key]){
    //   obj[key] = 1
    // }else{
    //   obj[key]++
    // }
    obj[key] = obj[key] ? ++obj[key] : 1;
    return obj
},{})
console.log('carsObj', carsObj)


/**
* @module 数组
* @author: ymy
* @description:
5.3 使用解构来交换参数数值
有时候你会将函数返回的多个值放在一个数组里。我们可以使用数组解构来获取其中每一个值。
* @since: 创建时间  2020-04-20 14:56:47
*/
let param1 = 1;
let param2 = 2;
[param1,param2] = [param2,param1]
console.log('param1', param1)
console.log('param2', param2)

// 关于交换数值有不少其他办法：
var temp = a; a = b; b = temp            
b = [a, a = b][0]                     
a = a + b; b = a - b; a = a - b        


/**
* @module 数组
* @author: ymy
* @description:接收函数返回的多个结果
* @since: 创建时间  2020-04-20 15:23:53
*/
// async function getFullPost(){
//   return await Promise.all([
//      fetch('/post'),
//      fetch('/comments')
//   ]);
// }
// const [post, comments] = getFullPost();


/**
* @module 数组
* @author: ymy
* @description:
5.5 将数组平铺到指定深度
使用递归，为每个深度级别 depth 递减 1 。 
使用 Array.reduce() 和 Array.concat() 来合并元素或数组。 
基本情况下，depth 等于 1 停止递归。 省略第二个参数，
depth 只能平铺到 1 (单层平铺) 的深度。

* @since: 创建时间  2020-04-20 15:24:36
*/

const flatten = (arr, depth = 1) =>
  depth != 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), []);
flatten([1, [2], 3, 4]);                             // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2);           // [1, 2, 3, [4, 5], 6, 7, 8]


/**
* @module 数组
* @author: ymy
* @description:
5.6 数组的对象解构
数组也可以对象解构，可以方便的获取数组的第n个值
* @since: 创建时间  2020-04-20 21:10:23
*/
const csvFileLine = '1997,John Doe,US,john@doe.com,New York';
const { 2: country, 4: state } = csvFileLine.split(',');
 
country            // US
state            // New Yourk

