// // const myarr = [1,2,3,4,5,6,6,7,8,8]

// // for (let i =0 ; i< myarr.length; i++){
// //     const element = myarr[i]
// //     console.log(element)
// // }


// const myon = {
//         js : "javaScript",
//         ob : "object",
//         cpp : "c++"
// }

// for(const key in myon){
//     console.log(`${key} ${myon[key]}`)
// }


// const p = ["py","js"," java"]
// for(const key in p){
//     console.log(p[key])
// }

const mycode =[

    {
        myname: "sou",
        mylang :"marathi"
    },
    
    {
        myname: "sou",
        mylang :"eng"
    },
    
    {
        myname: "sou",
        mylang :"tel"
    },
    
    {
        myname: "sou",
        mylang :"codes"
    }
]

mycode.forEach((item)=>{
    console.log(` ${item.myname} -: ${item.mylang}`)
})