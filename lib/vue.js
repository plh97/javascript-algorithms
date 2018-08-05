
// 实现伪vue的双向绑定

class Vue {
	constructor(opt){
		// _内部数据
		// $外部数据
		this.opt = opt;
		this._html = ()=>document.querySelector('#root').innerHTML;
		this.temphtml = document.querySelector('#root').innerHTML;
		this.root = document.querySelector('#root');
		this.opt._data = this.opt.data();
		this.dep = {};
		// 创建
		this.opt.created && this.opt.created()
		// 将所有属性便利到Vue实例上面
		for(let i in this.opt._data){
			// 劫持数据
			this.bind({
				key: i,
				val: this.opt._data[i]
			})
		}
		for(let i in this.opt.methods){
			this[i] = this.opt.methods[i];
		}
		// 初始化html数据，将{{}}以及:替换成真实数据
		for(let i in this.opt._data){
			this.initDataToHTML(i);
		}
		// 初始化html数据，将{{}}以及:替换成真实数据
		this.init();
		// 挂载
		this.opt.mounted && this.opt.mounted()
	}
	getHash(len){
		return Number(~~(Math.random()*len)).toString(16);
	}
	// to set every dom an tip, whilch can let me to find this.dom
	setDomTip(dom){
		const hash = this.getHash(999999);
		dom.setAttribute(`data-v-0${hash}0`,'');
		return `data-v-0${hash}0`;
	}
	// 初始化的时候采用整体替换的策略
	initDataToHTML (i) {
		// 全部模块都替换一次
		let root = this.root;
		// to replace v-for loop function
		[
			...root.querySelectorAll('div'),
			...root.querySelectorAll('span')
		].filter(dom=>{
			
			if(dom.getAttribute('v-for')){
				let reg = new RegExp(`\\w+\\sin\\s${i}`,'gmi');
				if(dom.getAttribute('v-for').match(reg)){
					return true;
				}
			}
		}).forEach(dom=>{
			let variable = dom.getAttribute('v-for').split(' ')[0];
			// 将for循环替换
			this.opt[i].forEach((e,i,arr) =>{
				let span  = dom.cloneNode();
				span.removeAttribute('v-for');
				this.dep[`this.arr.${i}`] = this.setDomTip(span);
				let time = this.opt.time;
				[...span.attributes].filter(attr=> /^:/.test(attr.localName)).forEach(attr => {
					attr.ownerElement.setAttribute(attr.localName.replace(/^\:/,''),eval(attr.value))
				})
				let content = dom.innerHTML;
				span.innerHTML = i+1;
				dom.parentElement.insertBefore(span,dom)
			})
			dom.remove()
		})

	}
	// 修改数据的时候整体替换的方法不可取啊...
	modifyDataToHTML (key,isModify) {
		// 考虑数组长度变化
		if(typeof this.opt[key] === 'object'){
			this.opt[key].forEach((e,i,arr)=>{
				const style = this.root.querySelector(`[${this.dep[`this.${key}.${i}`]}]`).getAttribute(':style')
				let time = this.opt.time;
				
				// root.querySelector(`[${this.dep[`this.${key}.${i}`]}]`).style.transform = `translateX(${(e-2)*120}%) scale(${1 - 0.1*(Math.abs(e-2))});
				root.querySelector(`[${this.dep[`this.${key}.${i}`]}]`).style.transform = `translateX(${((3-e))*60}%) scale(${1 - 0.1*(Math.abs(e-3))})`
				root.querySelector(`[${this.dep[`this.${key}.${i}`]}]`).style.zIndex = `${5 - Math.abs(3 - e)}`
				// root.querySelector(`[${this.dep[`this.${key}.${i}`]}]`).innerHTML = i+1;
			})

		}
	}
	init () {
		document.querySelector('input') && document.querySelector('input').addEventListener('keyup',e => {
			const val = e.target.value;
			[...e.target.attributes].filter(e=>/:/.test(e.name)).forEach((el,i)=>{
				this[e.target.getAttribute(el.name)] = val;
			});
		})
	}
	bind({key,val}){
		var that = this;
		Object.defineProperty(this.opt,key,{
			get () {
				return val
			},
			set (v) {
				if(this[key].length === v.lenth){
					// length not modify
					val = v;
					that.modifyDataToHTML(key,false);
				}else{
					// modify
					val = v;
					that.modifyDataToHTML(key,true);
				}
			},
		})
	}
}

export default Vue;