const dely = ms => new Promise(res => setTimeout(() => res(), ms))
const swap = (a, b) => [a, b] = [b, a];

import {stack} from './structures'


// 冒泡排序 时间复杂度 O(n^2);
const pop = async (arr, ms, func) => {
    let time = 0;
    console.log('冒泡排序:比较相邻两个元素大小,如果第一个比第二个大,则交换他们.');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                console.log(`交换: ${j}-${j+1},  第${++time}次.`)
                arr = func(j, j + 1);
            } else {
                console.log(`不用交换: ${j} - ${j+1},  第${++time}次.`)
            }
            await dely(ms)
        }
    }
    return `冒泡排序完成,一共花了${time}次,O(n^2)复杂度`;
}

// 冒泡排序改进版 时间复杂度 O(n^2);
const improvePop = async (arr, ms, func) => {
    let time = 0;
    console.log('改进版冒泡排序:从内循环中减去外循环中已经跑过的圈数.');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                console.log(`交换第${j} - ${j+1},  第${++time}次.`)
                arr = func(j, j + 1);
            } else {
                console.log(`不用交换第${j} - ${j+1},  第${++time}次.`)
            }
            await dely(ms)
        }
    }
    return `改进版冒泡排序完成,一共花了${time}次,O(n^2)复杂度`;
}


// 选择排序 时间复杂度 O(n^2);
const select = async (arr, ms, func) => {
    let time = 0;
    let minNum;
    console.log('选择排序:找到最小的数放到第一个位置,再次循环跳过第一个位置,找到最小的数,放到第二个位置.');
    for (let i = 0; i < arr.length - 1; i++) {
        minNum = i;
        for (let j = i; j < arr.length; j++) {
            // 找出最小的那个数
            console.log(`第${++time}次`);

            if (arr[j] < arr[minNum]) {
                minNum = j;
            }
        }
        // 如果有找到不同于i的最小那个数, 交换
        console.log(`第${++time}次.`);
        if (minNum !== i) {
            // console.log(`交换第${minNum} - ${j+1},  第${++time}次.`)
            console.log(`找到了第${i+1}轮,最小数:${arr[minNum]}.`);
            arr = func(minNum, i);
            await dely(ms)
        }
    }
    return `选择排序完成,一共花了${time}次,O(n^2)复杂度`;
}


// 插入排序 时间复杂度 O(n^2);
const insert = async (arr, ms, func) => {
    console.log('插入排序: 假设第一个数已经排序,第二个数组是插入到第一个数字的前/后?')
    console.log('插入排序: 假设第一个第二个数组成了已排序的小团体,第三个数应该插入到前面已排序的小团体的哪个位置?')
    console.log('插入排序: 以此类推第四个数?')
    let time = 0;
    let temp, j;
    for (let i = 1; i < arr.length; i++) {
        // i代表前面几个数被排了
        console.log(`排序了${i}个,总共${arr.length}个`);
        // 找出最小的那个数
        j = i;
        temp = i;
        while (j > 0 && arr[j - 1] > arr[i]) {
            // console.log(`交换:第${arr[j]} - 第${arr[j-1]}`);
            --j;
            temp = j;
        }
        arr = func([
            ...arr.slice(0, temp),
            arr[i],
            ...arr.slice(temp, i),
            ...arr.slice(i + 1, arr.length)
        ]);
        await dely(ms);

    }
    return `选择排序完成,一共花了${time}次,O(n^2)复杂度`;
}


const mergeSort = (left, right) => {
    if (left === undefined) return;
    var result = [];
    var il = 0;
    var ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++])
        } else {
            result.push(right[ir++])
        }
    }
    while (il < left.length) {
        result.push(left[il++])
    }
    while (ir < right.length) {
        result.push(right[ir++])
    }
    return result
}

// 归并排序
const merge = (arr) => {
    // 第一个实际可用的排序算法,复杂度:O(nlog^n).
    // 对于 Array.prototype.sort
    // Mozila Firfox 采用 归并排序,而chrome采用的快排.
    // 归并排序是一种分而治之的算法
    // 将原本分散的数组归并成较大的数组,直到最后只有一个排序完毕的大数组
    // 第一步,将数组分散,成一个个最小单位
    // 只有一个数就是终点
    const len = arr.length;
    if (len === 1) return arr;


    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, len);
    // 排序发生在归并过程中
    // 由merge函数承担这项任务

    return mergeSort(merge(left), merge(right))
}


// 快速排序,复杂度:O(nlog^n)
// 选择一个点作为基点,循环这个数组,仅仅只将小于基点的数排在左边,大于基点的数排在右边,重新组合,
// 继续递归左边的数字,以及右边的数组,quickSort作为函数,右边数组左边数组分别作为输入,
// 输出的数组继续递归,直到遇到长度为1的数组.停止递归.

var quickSort = function (arr) {　　
    if (arr.length <= 1) return arr;　　
    var pivotIndex = Math.floor(arr.length / 2);　　
    var pivot = arr.splice(pivotIndex, 1)[0];　　
    var left = [];　　
    var right = [];　　
    for (var i = 0; i < arr.length; i++) {　　　　
        if (arr[i] < pivot) {　　　　　　
            left.push(arr[i]);　　　　
        } else {　　　　　　
            right.push(arr[i]);
        }
    }　　
    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ]
};


// 堆排序
// 算了弄不懂,我放弃...
// 还是先弄二叉树结构吧...
const heap = (arr) => {
    return arr;
}



// 十进制转n进制
// num:要转的数字   ary:数的进制
const divided = (num,ary) => {
    while(num/ary > 0){
        stack.add(num % ary)
        num = Math.floor(num / ary);
    }
    const tran = {
        10: 'a',
        11: 'b',
        12: 'c',
        13: 'd',
        14: 'e',
        15: 'f',
    }
    let result = '';
    while(stack.item.length>0){
        const e = stack.pop();
        if(e>9){
            result += tran[e]
        }else{
            result += e
        }
    }
    return result
}




module.exports = {
    pop,
    improvePop,
    select,
    insert,
    merge,
    quickSort,
    divided,
};
