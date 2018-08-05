### program = algorithms + structures



### 前言
什么样的人需要学习数据结构与算法
- 不希望只是做增删改查的重复劳动工作
- 想参加ACM竞赛(非常有含金量的3人团队比赛)
- 非科班出生在被人安利了无数次《算法导论》后望而却步的同学
- 在通往人工智能的道路上被传统算法绊住脚的同学
- 备战明年校招 or 跳槽时被考察算法的同学
- 对算法学习感到迷茫，不知道学了能干嘛的同学。
- 当你脑海中莫名蹦出个想法,这个问题需要用到算法才能解决,这个时候,就是需要去学习的时候了.






### 学习技巧
###### 学习算法与数据结构需要注意的是,切勿盲目追求某个特别难的问题,优先系统性学习,掌握大而全,不必细化,
- 系统性学习[知乎live](https://www.zhihu.com/question/23148377/answer/36824071)
- 应用,找类似于leetcode之类的题库
- 思考,取若干同类型的思考题,独立完成,
- 思考,思考,再思考


### 学习时间分配方式,自己掂量
- 普通人: 1/4睡觉   3/4学习,
- 大神: 1/5打游戏 3/10睡觉 1/2学习,
- 打酱油: 1/5睡觉 3/10打游戏 1/2学习,

### 学习传统算法对以后的帮助
基础扎实,coding速度质量都有极大保障
- 中间件开发,可胜任造轮子的岗位
- 极大降低加班时间,提升程序员生活幸福感

解决问题能力强,拥有较高计算机思维
- 擅长使用树,图等非线性数据结构将问题抽象化
- 擅长计算时空复杂度,保障公司资源的最大利用率

### 简单算法面经
- [ ] 在无序数据结构中,快速寻找中位数

简单的快排,找中间,复杂度是O(nlogn)
快排的优化空间,取中间,将少的另一部分舍弃,继续在大的区间取中间,记得把前面的舍弃的位数记上,,如果运气好,左右相等,则选的基点就是中位数,,,快排的灵活运用啊....

- [ ] 为什么快排比冒泡更快?

冒泡的空间复杂度是O(n^2),应为他有两层for循环,
快排,选择基点,两边分别递归排序,空间复杂度是O(nlogn)明显nlogn < n^2

- [ ] 给出10万条人和人之间的朋友圈,求出这些人之间有多少个朋友圈

- [ ] 一串很长的二进制字符串,求出它除以3的余数.

- [ ] 在一个需要频繁更新的业务场景中,求出区间和(mmp,首先区间和是什么意思)

- [ ] 在一个原本应该成对出现的数组中,寻找唯一一个不成对的数





### 个人体会
花了一个星期解决了一个路径算法问题.
又花了一个月,看完+写完几个经典排序算法,感觉收获很大啊
看到很多动画动态效果,突然蹦出很多解决思路.....比如轮播图要用双向链表去解决之类的....


### 逛了一个小时知乎
- [程序员必须掌握哪些算法？](https://www.zhihu.com/question/23148377/answer/36824071)

- [自学python之后如果不去公司上班，自己一个人可以通过此技能挣什么钱？](https://www.zhihu.com/question/270720694/answer/447107038)

- [三本本科生能搞人工智能吗？](https://www.zhihu.com/question/275178587/answer/409568806)

- [SimonS - 浙大](https://www.zhihu.com/people/simonshao/activities)

- [参加IT公司的技术面试时，遇到不会的问题应该如何和面试官沟通?
](https://www.zhihu.com/question/22339100)
年轻的时候参加面试，有一次也遇到同样的难处，我的回答是：“这个我现在不知道，不过给我一天时间我就可以知道”，入职以后这哥们说“当时我就看中你这一点了——如此无知还如此自信，够无耻”。

一首凉凉送给自己....
不懂算法和数据结构还能算是程序员么.....




### 冒泡排序
```js
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
```

### 归并
```js
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
```



### 快排算法
```js
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
```


### usage/用法
已经put到npm上面了
```js
yarn add @pengliheng/algorithms

import { 
	quickSort,  // 快排算法
	merge,  // 快排算法
	pop,    // 冒泡算法算法
	divided
} from '@pengliheng/algorithms/lib/sort.js';
import { 
	stack,  // 栈 , 和 Array没毛区别
	queue,  // 队列
	link,  // 单项链表
	dbLinkList,// 双向链表
	CricleDoubleLinkList,  // 循环双向链表,准备用来做轮播图
} from '@pengliheng/algorithms/lib/structures';

var newArr = quickSort(arr);
console.log(newArr);

const criDbLinkList = new CricleDoubleLinkList();
criDbLinkList.append(222);
criDbLinkList.append(123);
criDbLinkList.append('是否');
criDbLinkList.append('不是');
```

### 发布
```bash
npm publish --access=public
```