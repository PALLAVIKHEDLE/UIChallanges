
  function memoizeAdd(){
    const cache={}

    return function(a,b){
        const key =`${a}, ${b}`;
        //if its already exist
        if(cache[key]!==undefined) return cache[key]

        const result=a+b
        cache[key]=result
        return result
    }
  }

  const memoize=memoizeAdd();
//   console.log('memoizeAdd',memoize(3,8))