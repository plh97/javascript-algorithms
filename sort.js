const dely = ms => new Promise(res => setTimeout(() => res(), ms))
const sweap = (a,b) => [a,b] = [ b, a];


// 冒泡排序 时间复杂度 O(n^2);
const pop = async (arr, ms,func) => {
    let time = 0;
    console.log('冒泡排序:比较相邻两个元素大小,如果第一个比第二个大,则交换他们.');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1;j++) {
            if(arr[j] > arr[j+1]){
                console.log(`交换: ${j}-${j+1},  第${++time}次.`)
                arr = func(j);
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
                arr = func(j);
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
    let
}



module.exports = {
    pop,
    improvePop,
};
