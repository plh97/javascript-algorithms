// 栈,
// 后入先出LIFO
// 代表类型,函数执行栈
class Stack{
    constructor(){
        this.item = [];
    }
    isEmpty(){
        return this.item.length ==0;
    }

    size(){
        return this.item.length;
    }

    clear(){
        this.item = [];
    }

    print(){
        console.log(this.item)
    }

    add(e){
        this.item.push(e);
    }

    pop(e){
        return this.item.pop();
    }
}
const stack = new Stack();



// 队列 ==> FIFO(First In First Out/先入先出)
class Queue{
    constructor(){
        this.item = [];
    }
    // 压入队列
    enqueue(e){
        console.log(this);
        
        this.item.push(e)
    }
    // 移出队列
    dequeue(){
        return this.item.shift()
    }
    // 返回队列第一个数
    front(){
        return this.item[0];
    }
    // 队列长度
    size(){
        return this.item.length;
    }
    // 是否为空
    isEmpty(){
        return this.item.length===0
    }
    // 打印
    print(){
        console.log(this.item)
    }
    clear(){
        this.item = [];
    }

}
const queue = new Queue();


// 单向节点 
class LinkNode {
    constructor(val=null,next=null){
        this.val = val;
        this.next = next;
    }
}

// 链表
class LinkList {
    constructor(){
        // 根节点
        this.root = new LinkNode();
        // 长度
        this.length = 0;
    }
    // 在最后一个位置插入
    append(e){
        node = this.root;
        while(node.next !== null){
            node = node.next;
        }
        if(this.root.val == null){
            this.root = new LinkNode(e);
        }else{
            node.next = new LinkNode(e);
        }
        this.length++;
    }
    // i位置移除
    remove(i){
        let index = 0;
        let currentNode = this.root;
        let prev;

        if(i === 0){
            this.root = this.root.next;
        } else if (i>=this.length || i<0){
            throw new Error(`你要删除的第${i}个字符不存在`)
        } else {
            while(index<i){
                prev = currentNode;
                currentNode = currentNode.next;
                index++;
            }
            if(index===i){
                prev.next = currentNode.next;
                currentNode = null;
            }
        }
        this.length--;
    }
    // 任意指定位置插入
    insert(i, e){
        let index = 0;
        let currentNode = this.root;
        let insertNode = new LinkNode(e);
        let prev;
        if(i === 0){
            insertNode.next = this.root;
            this.root = insertNode;
        } else if (i>=this.length||i<0){
            throw new Error(`不存在第${i}个位置`)
        } else {
            while(index<i) {
                prev = currentNode;
                currentNode = currentNode.next;
                index++;
            }
            if(index===i) {
                prev.next = insertNode;
                insertNode.next = currentNode
            }
        }
        this.length++;
    }
    // 找出元素的位置
    indexOf(e){
        let index = 0;
        let currentNode = this.root;
        while(index<this.length) {
            if(currentNode.val === e){
                return index;
            }else{
                index++;
            }
            currentNode = currentNode.next;
        }
        throw Error(`${e}不存在`)
    }
    // 是否为空
    isEmpty(){
        return this.root.val===null;
    }
    // 返回第一个元素
    front(){
        return this.root.val;
    }
    // 返回最后一个元素
    end(){
        let currentNode = this.root;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }
    // 返回链表的长度
    size(){
        return this.length
    }
    // 数组形式打印真个列表
    print(){
        node = this.root;
        let val = [this.root.val];
        while(node.next !== null){
            node = node.next;
            val.push(node.val)
        }
        console.log('val:',val)
    }
}
const link = new LinkList();



// 双向节点
class DbLinkNode{
    constructor(val=null,next=null,prev=null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

// 双向链表
class DoubleLinkList{
    constructor(){
        // 根节点
        this.root = new DbLinkNode();
        // 长度
        this.length = 0;
    }
    // 任意指定位置插入
    insert(i, e){
        let index = 0;
        let currentNode = this.root;
        let node = new DbLinkNode(e);
        let prev;
        if(i === 0){
            this.root = node;
        } else if (i>=this.length||i<0){
            throw new Error(`不存在第${i}个位置`)
        } else {
            while(index<i) {
                // 先找到节点位置
                prev = currentNode;
                currentNode = currentNode.next;
                index++;
            }
            if(index===i) {
                prev.next = node;
                node.next = currentNode
                node.prev = prev
            }
        }
        this.length++;
    }
    // 在最后一个位置插入
    append(e){
        node = this.root;
        while(node.next !== null){
            node = node.next;
        }
        if(this.root.val == null){
            this.root = new DoubleLinkNode(e);
        }else{
            node.next = new DoubleLinkNode(e);
        }
        this.length++;
    }
    // i位置移除
    remove(i){
        let index = 0;
        let currentNode = this.root;
        let prev;

        if(i === 0){
            this.root = this.root.next;
        } else if (i>=this.length || i<0){
            throw new Error(`你要删除的第${i}个字符不存在`)
        } else {
            while(index<i){
                prev = currentNode;
                currentNode = currentNode.next;
                index++;
            }
            if(index===i){
                prev.next = currentNode.next;
                currentNode = null;
            }
        }
        this.length--;
    }
    // 找出元素的位置
    indexOf(e){
        let index = 0;
        let currentNode = this.root;
        while(index < this.length) {
            if(currentNode.val === e){
                return index;
            }else{
                index++;
            }
            currentNode = currentNode.next;
        }
        throw Error(`${e}不存在`)
    }
    // 是否为空
    isEmpty(){
        return this.root.val===null;
    }
    // 返回第一个元素
    front(){
        return this.root.val;
    }
    // 返回最后一个元素
    end(){
        let currentNode = this.root;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }
    // 返回链表的长度
    size(){
        return this.length
    }
    // 数组形式打印真个列表
    print(){
        node = this.root;
        let val = [this.root.val];
        while(node.next !== null){
            node = node.next;
            val.push(node.val)
        }
        console.log('val:',val,this.root)
    }
}
const dbLinkList = new DoubleLinkList();


module.exports = {
    stack,
    queue,
    link,
    dbLinkList,
};


root = {
    first:{
        num:1,
        inner(){
            console.log(this);
        }
    },
    sec:'2',
    thrid(){
        console.log(this.first.inner());
    }
}

