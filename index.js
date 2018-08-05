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
		dbLinkList.insert(0,111);
		dbLinkList.insert(0,222);
		dbLinkList.print()
		
	},
	created(){
		window.app = this;
		console.log('i am created');
	}
})