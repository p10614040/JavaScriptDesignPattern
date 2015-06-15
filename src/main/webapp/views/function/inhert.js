/** 
 * @Title: inhert.js
 * @Package views/function
 * @author yan.liang
 * @date 2015年6月7日
 * @Description:  通过原型继承创建对象
 */
// 返回一个继承自原型p的属性的新对象
// 如果存在，使用ES5中的Object.create()函数
// 如果不存在，使用其它方法
function inherit(p){
	if (p == null) throw TypeError();	// p是一个对象，但不能是null
	if(Object.create){					// 如果Object.create存在
		return Object.create(p);		// 直接使用
	}
	var t = typeof p;
	if(t !== "object" && t !== "function") throw TypeError();
	function f(){};						// 定义一个空构造函数
	f.prototype = p;					// 将其原型属性设置为p
	return new f();						// 使用f()创建p的基础对象
}