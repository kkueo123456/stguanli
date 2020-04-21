// export default (time)=>{
//     var date=new Date(time);
//     const year=date.getFullYear()
//     const month=(date.getMonth()+1+"").padStart(2,'0');
//     const day=(date.getDate()+"").padStart(2,"0");
//     const hours=(date.getHours()+"").padStart(2,"0")
//     const minute=(date.getMinutes()+"").padStart(2,"0")
//     const second=(date.getSeconds()+"").padStart(2,"0")
//     return `${year}-${month}-${day} ${hours}:${minute}:${second}`
// }
export default (time)=>{
    const date=new Date(parseInt(time*1000));
    var year=date.getFullYear()
    var month=(date.getMonth()+1+"").padStart(2,"0");
    var day=(date.getDate()+"").padStart(2,"0")
    return `${year}-${month}-${day}`
}