(function(window){
	class Vue {
		constructor(opt){
			this.opt = opt
			// 将所有属性便利到Vue实例上面
			for(let i in opt.data()){
				// 劫持数据
				this.bind({
					key: i,
					val: this.opt.data()[i]
				})
			}
			for(let i in opt.methods){
				this.opt[i] = this.opt.methods[i];
			}
			// 创建
			this.opt.created && this.opt.created()

			// 挂载
			this.opt.mounted && this.opt.mounted()

			// 初始化html数据，将{{}}以及:替换成真实数据
			this.dataToHTML();

			// 初始化html数据，将{{}}以及:替换成真实数据
			this.init();
			this.direct = {};
		}
		dataToHTML () {
			// 完整实现替换
			
			// 3.预埋hash值
			let root = document.querySelector('#root').innerHTML;
			for(let i in this.opt.data()){
				const root = document.querySelector('#root').outerHTML;
				this[i] = this.opt.data()[i];
				let reg = new RegExp(`<.*>(?=.*\n.*\{\{${i}\}\})`,'gmi');
				console.log(
					root.match(reg)
				);
				// root = root.replace(reg,'$1')
			}
			// 1.{{}}  替换
			// 2.:attr 替换
			for(let i in this.opt.data()){
				this[i] = this.opt.data()[i];
				let reg = new RegExp(`\{\{${i}\}\}`,'gmi');
				root = root.replace(reg,this.opt.data()[i])
			}
			document.querySelector('#root').innerHTML = root
		}
		init () {
			document.querySelector('input').addEventListener('keydown',e => {
				const val = e.target.value;
				[...e.target.attributes].filter(e=>/:/.test(e.name)).forEach((el,i)=>{
					this.opt[e.target.getAttribute(el.name)] = val;
				});
			})
		}
		bind({key,val}){
			Object.defineProperty(this.opt,key,{
				get () {
					console.log('u have been get '+key)
					return val
				},
				set (v) {
					console.log('需要去同步HTML模板 '+key, v)
					// that.dataToHTML();
					val = v;
				},
			})
		}
	}
	window.Vue = Vue;
})(window)