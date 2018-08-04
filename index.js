import Vue from './lib/vue.js'
import { merge } from './lib/sort.js';
import 'babel-polyfill';


new Vue({
	el:document.querySelector('#root'),
	data(){
		return {
			time: 0,
			arr: [8,7,6,5,4,3,2,1]
		}
	},
	mounted(){
		// 交换策略  ,某个数字位于当前数字的 位置
		this.arr = merge(this.arr)
	},
	created(){
		window.app = this;
		console.log('i am created');
	}
})