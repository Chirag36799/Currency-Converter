import { useEffect, useState } from "react";

 function currencyInfo(From="USD"){
  const [data,setDATA]=useState({})
   useEffect(()=>{
    const url=`https://api.currencyapi.com/v3/latest?apikey=cur_live_rQz4vl4TrfjwPGxUGTRV5Yb7bgcBvy9aUHJFFn2M&base_currency=${From}`;
    //const temp=await((await fetch(url)));
   const temp=fetch(url).then((res)=>res.json()).then((res)=>{setDATA(res.data)}) 
    
},[From])
return data;

}

export {currencyInfo};