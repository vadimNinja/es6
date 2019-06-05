function createSubscribe(name) {
    return  {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err) {
            console.log('Error: ', x);
        },
        complete() {
            console.log(name, ': Completed.');
        }
    }
}

// for(var i = 0; i < 10; i++) {
//     setTimeout((() => console.log(i))(), 0)
// }

// var button = document.querySelector('button');
//
// var btn$ = Rx.Observable.fromEvent(button, 'click');
//
// btn$.subscribe(e => console.log(e));
//
// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//     .subscribe(e => console.log(e))
//
// Rx.Observable.fromEvent(document, 'mousemove')
//     .subscribe(e => {
//         document.querySelector('h1').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`
//     })

// next lesson

// Rx.Observable.interval(500)
//     .take(15)
//     .subscribe(createSubscribe('interval'))

// Rx.Observable.timer(4000, 500)
//     .take(10)
//     .subscribe(createSubscribe('timer'))

// Rx.Observable.range(5, 10)
//     .subscribe(createSubscribe('range'))

// const set = new Set([1, 2, 3, '4', {id: 6}])
// const map = new Map([[1, 2], [3, 4], [5, 6]])
//
// Rx.Observable.from(map)
//     .subscribe(createSubscribe('from'))

// function delay(ms = 1000) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms)
//         }, ms)
//     })
// }

// delay(3000).then(() => {
//     console.log('Promise')
// })

// const p$ = Rx.Observable.fromPromise(delay(4000))
//
// p$.subscribe(createSubscribe('fromPromise'))