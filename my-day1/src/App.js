import React,{useState} from "react";
import Partent from "./parrnt";
import Hook from "./component/hooks/hook";
import HookXuan from "./component/hooks/xuanran";
import Xuan from "./component/class/xuran";
import Left from "./component/class/left";
import Todo from "./component/class/todo";
function App() {
const [name,setName]=useState("哈利波特")
const [flag,setFlag]=useState(true)
function gaibian(){
  setName("伏地魔")
  setFlag(false)
}
  return (
    <div className="App">
      <p>TodoList</p>
      <Todo></Todo>
      <hr/>
      <Partent></Partent>
      <hr/>
      <Hook></Hook>
      <hr/>
      <Xuan></Xuan>
      <hr/>
      <HookXuan></HookXuan>
      <hr/>
      <button onClick={gaibian}>父亲钩子</button>
      {
        flag&&<Left name={name}/>
      }
     <hr></hr>

      
    </div>
  );
}

export default App;
