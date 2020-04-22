// 什么是上下文环境？
// 举个生活中的例子：比如说你在厨房做菜，那厨房就是你的上下文环境，你要拿一点辣椒，顺手就拿到了；比如你在试衣间，那试衣间就是你的上下文环境，你想在试衣间拿一点辣椒，但是这次拿不到了。所以我们有了一个结论：上下文环境不一样，做同一件事（调用同一个方法），得到的结果就不一样。
// var name = 'Bob'
// var obj = {
//     name: 'Lucy',
//     getName: function(){
//         console.log(this.name);
//     }
// }

// var getName = function(){
//     console.log(this.name);
// }
// obj.getName();  //Lucy
// getName();      //Bob


// 默认绑定
// 隐式绑定
// 显式绑定
// 特殊的this指向：箭头函数

/**
* @module 默认绑定
* @author: ymy
* @description:
//
* @since: 创建时间  2020-04-22 11:09:42
*/

var b = {
    name: "Lucy",
    getName:function(){
        console.log('this指向b', this.name)
        return function(){
            console.log('此时this指向window', this.name)
        }
    }
}
var setFun = b.getName()
setFun()
// 这是一种闭包的方式。执行b.getName()之后返回一个函数，并且赋值给变量setFunc，
// 然后在全局环境中调用了setFunc()。所以最后这种情况下的this也是指向window的。


/**
* @module 隐式绑定
* @author: ymy
* @description:

this指向调用它的对象
就是函数作为对象的方法，指向这个对象下的函数时，
该环境下this隐式的指向调用它的对象（这个可以当成一个结论来记住），就是谁调用了这个函数this就指向谁。
* @since: 创建时间  2020-04-22 11:09:36
*/
const obj = {
    name: 'Lucy',
    getName: function(){
        console.log(this.name);
    }
}
obj.getName();


/**
* @module 显式绑定
* @author: ymy
* @description:

通过bind,call,apply的方式动态的传入this指向的对象
call和apply的使用在于传参的不同 将对象指定this后函数会立即
执行 并且这两个方法绑定的对象是可以动态变化的
call 逐个传参
apply 参数放到一个数组中
bind 将对象指定this后不会立即执行 而是返回一个函数 但是
这个函数绑定了该对象后就不能再动态改变了
* @since: 创建时间  2020-04-22 11:21:47
*/
// var name = 'myName'
// var obj1 = {
//     name:"Lucy"
// }
// var obj2 = {
//     name:"Bob"
// }
// function getName(){
//     console.log('this.name', this.name)
// }
// getName.call(obj1)
// getName.call(obj2)

// const bFunc = getName.bind(obj1);
// bFunc()
// bFunc.call(obj1) //失效


/**
* @module new 实例化中指向实例对象
* @author: ymy
* @description:
实例化后的实例对象是一个对象
实例对象可以调用构造函数的原型方法
实例对象上有构造函数中this的所有属性
* @since: 创建时间  2020-04-22 14:15:25
*/
// 封装一个函数实现上面的要求
// 创建一个函数，最后返回一个对象。
// 要让一个普通对象拥有某个构造函数的原型方法，那么需要对象的__proto__指向该构造函数的原型上。
// 执行构造函数，并且让函数的this指向这个返回的对象上。
// 所以代码可以是这样的：
function newFun(Fn,...arg){
    //新建一个普通对象
    let obj = {}
    //将构造函数的原型指向对象的__proto__
    obj.__proto__ = Fn.prototype;
    //执行Fn函数 并且将this指向obj
    Fn.call(obj,...arg)
    //返回原型方法和this上属性值的对象
    return obj;
}
//使用自定义的 newFun方法实现new的操作
//构造函数用大写首字母
function Person(name){
    this.name = name
}
Person.prototype.getName = function(){
    console.log('this.name', this.name)
}

const p = newFun(Person,'ccc')
p.getName()


/**
* @module 特殊的this指向：箭头函数
* @author: ymy
* @description:
* @since: 创建时间  2020-04-22 15:13:11
*/
// 箭头函数相比较传统函数，有它的特殊性。首先上面说到传统的函数的this是在调用它的时候确定的，
// 而箭头函数没有上下文环境的概念，
// 它的this要去声明该箭头函数的上下文环境中找。
// 所以，箭头函数的this是在函数声明的时候就确定的，
// 而且无法更改。就连使用call和apply的方式也不能改变。 
// 所以因为这个特点，箭头函数的使用有它的局限性。


// 箭头函数不能作为构造函数使用
// 箭头函数没有arguments

var a  = 10
var ooo = {
    a:1,
    say:()=>{
        console.log('this.a', this.a)
    }
}
ooo.say() //10
ooo.say.call({a:5})

// say方法上层作用域中的this指向的是Factory实例，
// 所以输出的是实例的属性b
var b  = 10
function Factory(){
    this.a = '1'
    this.b = '2'
    var that = this
    this.getVal = {
        // say:()=>{
        //     console.log('this.b', this.b) //2
        // }
        // say(){
        //     return function(){
        //         console.log('this.b', this.b) //10        //     }
        // }
        // say(){
        //     console.log('that.b', that.b) //2
        // }
        b:this.b,
        say:function(){
            console.log('this.b', this.b) //2
        }
    }
}
// Factory.prototype.say = function(){
//     console.log('this.b', this.b)
// }

// console.log('Factory', new Factory())
new Factory().getVal.say()


// 总结
// this的指向问题（在es5语法中）根据指向的规则可以分成划分为：

// 默认绑定

// 默认指向window
// 隐式绑定

// 对象调用它的方法时，this指向调用它的对象
// 显式绑定

// 通过call,apply等方法动态的将this指向到传入的对象。
// 实例化的时this指向实例对象（new方法做了一件什么事这个也比较重要）。
// 箭头函数 它的this指向比较特殊，箭头函数本身没有上下文环境的说法，它是在函数定义的时候this指向当前定义函数的上下文环境。所以有些文章说他指向父级函数中this指向的对象这个说法也是正确的。
