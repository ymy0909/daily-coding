/**
* @module 函数
* @author: ymy
* @description:函数默认值
* @since: 创建时间  2020-04-20 10:37:16
*/
func = (l, m = 3, n = 4 ) => (l * m * n);
func(2)             //output: 24


/**
* @module 函数
* @author: ymy
* @description:强制参数
* @since: 创建时间  2020-04-20 10:38:17
*/
// mandatory = ( ) => {
//   throw new Error('Missing parameter!');
// }
// foo = (bar = mandatory( )) => {     // 这里如果不传入参数，就会执行manadatory函数报出错误
//   return bar;
// }
//默认情况下，如果不向函数参数传值，那么JS 会将函数参数设置为undefined。不会报错其它一些语言则会发出警告或错误。
throwErr = ()=>{
  throw Error('Missing parameter!')
}
foo = (bar = throwErr())=>{
  return bar
}


/**
* @module 函数
* @author: ymy
* @description:隐式返回值 react常用
* @since: 创建时间  2020-04-20 10:51:13
*/
// function calcCircumference(diameter) {
//   return Math.PI * diameter
// }
// 简写为：
calcCircumference = diameter => (
  Math.PI * diameter
)
console.log('calcCircumference(90)', calcCircumference(90))

/**
* @module 函数
* @author: ymy
* @description:惰性载入函数
* @since: 创建时间  2020-04-20 10:53:05
*/
function foo(){
  if(a !== b){
      console.log('aaa')
  }else{
      console.log('bbb')
  }
}

// 优化后
function foo(){
  if(a != b){
      foo = function(){
          console.log('aaa')
      }
  }else{
      foo = function(){
          console.log('bbb')
      }
  }
  return foo();
}

/**
* @module 函数
* @author: ymy
* @description:2.5 一次性函数
跟上面的惰性载入函数同理，可以在函数体里覆写当前函数，那么可以创建一个一次性的函数，重新赋值之前的代码相当于只运行了一次，适用于运行一些只需要执行一次的初始化代码
* @since: 创建时间  2020-04-20 11:20:27
*/
var sca = function() {
  console.log('msg')
  sca = function() {
      console.log('foo')
  }
}
sca()        // msg
sca()        // foo
sca()        // foo



