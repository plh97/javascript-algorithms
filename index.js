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
	BinaryTree
} from './lib/structures';
import 'babel-polyfill';
import { timingSafeEqual } from 'crypto';


new Vue({
	el:document.querySelector('#root'),
	data(){
		return {
			time: 0,
			arr: [1,2,3,4,5],
			ms: 3000
		}
	},
	mounted() {
		const BST = new BinaryTree();
		window.db = BST;
		
		BST.insert(5);
		BST.insert(3);
		BST.insert(7);
		BST.insert(4);
		BST.insert(8);
		BST.postOrderTraverse((e)=>{
			console.log(e);
		});

		
	},
	created(){
		window.app = this;
		console.log('i am created');
	}
})

