import Vue from './vue.js'
import {
	pop,
	improvePop,
} from './sort.js';
const sweap = (a,b) => [a,b] = [ b, a];
import 'babel-polyfill';



new Vue({
	el:document.querySelector('#root'),
	data(){
		return {
			time:0,
			arr: [4,3,2,1,8,7,6,5]
		}
	},
	async mounted(){
		// 交换策略  ,某个数字位于当前数字的 位置
		const result = improvePop(this.arr,400 , (j)=>{
			this.time++;
			[this.arr[j], this.arr[j+1]] = [this.arr[j+1], this.arr[j]]
			this.arr = [...this.arr]
			return this.arr;
		})
		console.log(await result);
	},
	created(){
		window.app = this;
		console.log('i am created');
	}
})