import React,{Component,useState,useRef,useEffect} from 'react'
export default function Hook({name}){
    let refcount=useRef()
    const [count ,setCount]=useState(0)
  function hand(n){
      console.log("点击"+n);
  }
  function hand1(e){
    console.log("点击",e);
}
function hand2(){
   // setCount(1)
   setCount((n )=>{
    
   return n+1
   })
   
}
useEffect(() => {
   // console.log(refcount.current.textContent);
}, [count])
    return(
        <div>
           hook 子组件+{name}+{count}
           <br/>
           <button onClick={()=>{hand(10)}}>点击事件传参</button>
           <button onClick={hand1}>普通点击事件</button>
           <button onClick={hand2}>点击+</button>
           <p ref={refcount}>{count}</p>
        </div>
    )
} 