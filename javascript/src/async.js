function work(callback){
    setTimeout(() => {
        const start = Date.now();
        for(let i = 0; i < 1000000000; i++){

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0)//실제로는 4ms 이후에 시작됨 브라우저기본값이라서
}

console.log('작업시작');
work((ms) =>{
    console.log('작업이 끝났어요');
    console.log(ms + 'ms 걸렸다고해요');
});
console.log('다음 작업');