import Vue from './lib/vue.js'
import { 
	quickSort,
	divided
} from './lib/sort.js';
import { 
	stack,
	queue,
	link,
	dbLinkList,
	CricleDoubleLinkList,
} from './lib/structures';
import 'babel-polyfill';
import { timingSafeEqual } from 'crypto';


new Vue({
	el:document.querySelector('#root'),
	data(){
		return {
			time: 0,
			arr: [1,2,3,4,5]
		}
	},
	mounted() {
		const criDbLinkList = new CricleDoubleLinkList();
		this.arr.forEach(arr=>{
			criDbLinkList.append(arr);
		})
		// 将第一个元素推出,压入数组最后;
		console.log(this.arr);
		
		// setInterval(() => {
		// 	criDbLinkList.append(
		// 		criDbLinkList.unshift().val
		// 	);
		// 	this.arr = criDbLinkList.outputArr();
		// 	console.log(this.arr);
		// }, 1000);
		document.querySelector('#root span:nth-child(3)').addEventListener('touchstart',(e)=>{
			let clientX = e.changedTouches[0].clientX;
			let times = 0;
			const proxyFunc = (e)=>{
				const _clientX = e.changedTouches[0].clientX;
				if(times === Math.floor((_clientX - clientX)/100)){
					console.log('not diff');
					return 
				}else{
					console.log('diff');
					times = Math.floor((_clientX - clientX)/100);
				}
				if(times>0){
					clientX = _clientX;
					criDbLinkList.shift(
						criDbLinkList.pop().val
					);
				}else{
					clientX = _clientX;
					criDbLinkList.append(
						criDbLinkList.unshift().val
					);
				}
				this.arr = criDbLinkList.outputArr();

				console.log(times);
				
			}
			e.target.addEventListener('touchmove',proxyFunc)
			e.target.addEventListener('touchend',(e)=>{
				e.target.removeEventListener('touchmove',proxyFunc);
			})
		})
		
		
		// 将最后一个元素推出,压入数组头部;
		// criDbLinkList.shift(
		// 	criDbLinkList.pop().val
		// )
		
		
		window.db = criDbLinkList;
	},
	created(){
		window.app = this;
		console.log('i am created');
	}
})