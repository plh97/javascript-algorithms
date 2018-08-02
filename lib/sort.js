const dely = ms => new Promise(res => setTimeout(() => res(), ms))
const swap = (a,b) => [a,b] = [ b, a];


// 冒泡排序 时间复杂度 O(n^2);
const pop = async (arr, ms,func) => {
    let time = 0;
    console.log('冒泡排序:比较相邻两个元素大小,如果第一个比第二个大,则交换他们.');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1;j++) {
            if(arr[j] > arr[j+1]){
                console.log(`交换: ${j}-${j+1},  第${++time}次.`)
                arr = func(j,j+1);
            }else{
                console.log(`不用交换: ${j} - ${j+1},  第${++time}次.`)
            }
            await dely(ms)
        }
    }
    return `冒泡排序完成,一共花了${time}次,O(n^2)复杂度`;
}

// 冒泡排序改进版 时间复杂度 O(n^2);
const improvePop = async (arr, ms,func) => {
    let time = 0;
    console.log('改进版冒泡排序:从内循环中减去外循环中已经跑过的圈数.');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1-i;j++) {
            if(arr[j] > arr[j+1]){
                console.log(`交换第${j} - ${j+1},  第${++time}次.`)
                arr = func(j,j+1);
            }else{
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
    for (let i = 0; i < arr.length-1; i++) {
        minNum = i;
        for (let j = i; j < arr.length;j++) {
            // 找出最小的那个数
            console.log(`第${++time}次`);

            if(arr[j] < arr[minNum]){
                minNum = j;
            }
        }
        // 如果有找到不同于i的最小那个数, 交换
        console.log(`第${++time}次.`);
        if(minNum !== i){
            // console.log(`交换第${minNum} - ${j+1},  第${++time}次.`)
            console.log(`找到了第${i+1}轮,最小数:${arr[minNum]}.`);
            arr = func(minNum , i);
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
    let temp,j;
    for (let i = 1; i < arr.length; i++) {
        // i代表前面几个数被排了
        console.log(`排序了${i}个,总共${arr.length}个`);
        // 找出最小的那个数
        j=i;
        temp = i;
        while(j>0 && arr[j-1]>arr[i]){
            // console.log(`交换:第${arr[j]} - 第${arr[j-1]}`);
            --j;
            temp = j;
        }
        arr = func([
            ...arr.slice(0,temp),
            arr[i],
            ...arr.slice(temp,i),
            ...arr.slice(i+1,arr.length)
        ]);
        await dely(ms);

    }
    return `选择排序完成,一共花了${time}次,O(n^2)复杂度`;
}


// 归并排序
const mergeSort = async (arr, ms, func) => {
    // 第一个实际可用的排序算法,复杂度:O(nlog^n).
    // 对于 Array.prototype.sort
    // Mozila Firfox 采用 归并排序,而chrome采用的快排.
    console.log('采用分而治之的方式');
    
}



module.exports = {
    pop,
    improvePop,
    select,
    insert,
};
