
/**
* @module 对象
* @author: ymy
* @description:6.1 使用解构删除不必要属性
* @since: 创建时间  2020-04-20 21:14:56
*/

let {_internal, tooBig, ...cleanObject} = {el1: '1', _internal:"secret", tooBig:{}, el2: '2', el3: '3'};
 
console.log(cleanObject);                         // {el1: '1', el2: '2', el3: '3'}


/**
* @module 对象
* @author: ymy
* @description:6.2 在函数参数中解构嵌套对象
* @since: 创建时间  2020-04-20 21:16:12
*/

var car = {
  model: 'bmw 2018',
  engine: {
    v6: true,
    turbo: true,
    vin: 12345
  }
}
const modelAndVIN = ({model, engine: {vin}}) => {
  // console.log(`model: ${model} vin: ${vin}`);
}
modelAndVIN(car); // => model: bmw 2018  vin: 12345
