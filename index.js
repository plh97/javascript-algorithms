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
		
		BST.insert(11);
		BST.insert(7);
		BST.insert(15);
		BST.insert(5);
		BST.insert(9);
		BST.insert(13);
		BST.insert(20);
		BST.insert(3);
		BST.insert(6);
		BST.insert(8);
		BST.insert(10);
		BST.insert(12);
		BST.insert(14);
		BST.insert(18);
		BST.insert(25);
		// BST.postOrderTraverse((e)=>{
		// 	console.log(e);
		// });
		

		console.log(
			BST.remove(7)
		);
		


		
	},
	created(){
		window.app = this;
		console.log('i am created');
	}
})

