		//手写bind 
		// 改变this指向
		//返回新的函数，this指向第一个参数，后面可以接收多个参数
		Function.prototype.mybind = function () {
			const self = this;
			let args = Array.prototype.slice.call(arguments);
			let thisFun = args.shift()
			return function () {
				return self.apply(thisFun, args.concat(Array.from(arguments)));
			}
		}
		function fn1(a, b, c, e) {
			console.log(this)
			console.log(a)
			console.log(b)
			console.log(c)
			console.log(e)
			this.name = name
			return '这是fn1'
		}
		var animal = {
			name: "猫腻"
		}
		// let fn2 = fn1.bind(animal,1,2,3)
		// console.log(fn2())
		let mybind = fn1.mybind(animal, 1, 2, 3)
		console.log(mybind(4, 5, 6))