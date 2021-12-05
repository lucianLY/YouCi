// import http from "./http";

// // 登录接口
// function users(methods, url) {
//     return function(data) {
//         return new Promise((resolve, reject) => {
//             http(methods, url).then(res => {
//                 console.log('===res===', res)
//                 resolve(res)
//             })
//         })
//     }


//     // return function(data) {
//     //     return new Promise((resolve, reject) => {
//     //         // http((methods, url, data).then(res => {
//     //         //     console.log('===res===', res)
//     //         //     resolve(res)
//     //         // }))

//     //     })
//     // }
// }

// export { users }