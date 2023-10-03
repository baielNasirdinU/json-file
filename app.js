const getTodos=(callback)=>{
const request=new XMLHttpRequest()
request.addEventListener('readystatechange',()=>{
    if(request.readyState===4 && request.status===200){
        // console.log(request.responseText);
        const data =JSON.parse(request.responseText)
        callback(undefined,data)
    }else if (request.readyState===4) {
        // console.log('err');
        callback('no page',undefined)
        
    }
})
request.open("GET",'./data.json')
request.send()
}
getTodos((err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})