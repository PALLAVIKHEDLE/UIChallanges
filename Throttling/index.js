const throttle =(func,limit)=>{
    let flag=true
    return function(){
        let context=this,
        args=arguments;
        if(flag){
            func.apply(context,args)
            flag=false
            setTimeout(()=>flag=true,limit)
        }
    }
}