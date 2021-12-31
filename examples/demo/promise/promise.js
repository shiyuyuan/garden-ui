// 实现基础功能
// 实现异步
console.log(1)
let p1 = new MyPromise((resolve, reject) => {
	// resolve('success')
	// reject('error')
	setTimeout(() => {
		console.log('异步')
		resolve('success')
	})
	console.log(2)
	// throw "error"
	// reject('error')
})
console.log(p1)
p1.then(
	data => {
		console.log('success1')
	},
	error => {
		console.log('error1')
	}
)
console.log(3)
const PENDDING = "pending";
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function MyPromise(executor) {
	this.status = 'pending'
	this.result = undefined;
	this.resolveCallback = []
	this.rejectCallback = []
	resolve = (data) => {
		if (this.status !== 'pending') return
		if (this.status === 'pending') {
			this.status = 'fulfilled'
			this.result = data
			this.resolveCallback.forEach(callBack => {
				callBack(this.result)
			})
		}
	}
	reject = (data) => {
		if (this.status !== 'pending') return
		if (this.status === 'pending') {
			this.status = 'rejected'
			this.result = data
			this.rejectCallback.forEach(callBack => {
				callBack(this.result)
			})
		}
	}
	try {
		executor(resolve, reject)
	} catch (err) {
		reject(err)
	}
	MyPromise.prototype.then = (onResolved, onRejected) => {
		console.log(this.status)
		onResolved = typeof onResolved === 'function' ? onResolved : () => { }
		onResolved = typeof onRejected === 'function' ? onResolved : () => { }
		if (this.status === 'pending') {
			this.resolveCallback.push(onResolved)
			this.rejectCallback.push(onRejected)
		}
		if (this.status === 'fulfilled') {
			onResolved(this.result)
		}
		if (this.status === 'rejected') {
			onRejected(this.result)
		}

	}
	MyPromise.prototype.catch = (onRejected) => {
		onRejected()
	}
}


