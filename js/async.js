// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log(3)
// }, 4000);
// print4()
// console.log(5)
// console.log(6)
// function print4() {
//     console.log(4)
// }

//----------------  promise
// const myLoad = () => {
//     return new Promise((resolve, reject) => {
//         const success = true;
//         if (success) {
//             resolve(200)
//         }
//         else {
//             reject(404)
//         }
//     })
// }
// const myLoad2 = () => {
//     return new Promise((resolve, reject) => {
//         const success = Math.random();
//         if (success <= .5) {
//             resolve(success)
//         }
//         else {
//             reject(success)
//         }
//     })
// }
// // console.log(myLoad())
// // console.log(myLoad2())
// myLoad2()
//     .then(data => console.log('resolved data ', data))
//     .catch(err => console.log('rejected with value ', err))

// //----------    fetch()
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
// //or, 
// async function loadData() {
//     const res = await fetch('url')
//     const data = await res.json()
//     console.log(data)
// }
// //or,
// const loadData2 = async () => {
//     const res = await fetch('url')
//     const data = await res.json()
//     console.log(data)
// }
// loadData()
// console.log(loadData2())

//-------------------   Interval
// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log(3)      //nirdishto time na dile hater kacher shob code execute shesh kore settimeout er code execute hobe.
// });
// setTimeout(() => {
//     console.log(4)
// }, 3000);
// // setInterval(() => {
// //     console.log(5)
// // }, 2000);
// console.log(6)
// num = 0;
// const timeInterval = setInterval(() => {
//     num++;
//     if(num > 6) {
//         clearInterval(timeInterval)
//     }
//     console.log(timeInterval, num)
// }, 2000)
// // clearInterval(timeInterval)

//------------------    recap
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
async function loadUserAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)
}
const loadUserArrow = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)
}
const loadUserTryCatch = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
    }
    catch(error) {
        console.log('ERROR happend: ', error)
    }
}

//------------------    promise all
const user = fetch('https://jsonplaceholder.typicode.com/users')
const comments = fetch('https://jsonplaceholder.typicode.com/comments')
const posts = fetch('https://jsonplaceholder.typicode.com/posts')
Promise.all([user, comments, posts])
.then( response => {
    return Promise.all(response.map(res => res.json()))
})
.then(data => {
    const [user, comments, posts] = data;
    console.log('Users: ', user)
    console.log('Comments: ', comments)
    console.log('Posts: ', posts)
})