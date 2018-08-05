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


new Vue({
	el:document.querySelector('#root'),
	data(){
		return {
			time: 0,
			arr: [8,7,6,5,4,3,2,1]
		}
	},
	mounted() {
		const criDbLinkList = new CricleDoubleLinkList();
		criDbLinkList.append(222);
		criDbLinkList.append(123);
		criDbLinkList.append('是否');
		criDbLinkList.append('不是');
		
		window.db = dbLinkList;
	},
	created(){
		window.app = this;
		console.log('i am created');
	}
})