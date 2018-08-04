// 栈,
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

    push(e){
        this.item.push(e);
    }

    pop(e){
        return this.item.pop();
    }
}
const stack = new Stack();









module.exports = {
    stack
};
