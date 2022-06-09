import React,{Component} from "react";

class List extends Component{
    constructor(props){
        super(props)
    }
    delat=(index)=>{
        console.log(index);
        this.props.del(index)
    }
    xiugai=(index)=>{
        console.log(index);
        this.props.xiugai(index)
    }
    render(){
        const{list}=this.props
        return(
            <div>
               <ul>
                   {
                     list.map((item,index)=>{
                         return (
                         <li key={item.id}>
                            {item.text}
                            <button onClick={()=>{this.xiugai(item.id)}} >修改</button>
                            <button onClick={()=>{this.delat(item.id)}}>删除</button>
                         </li>
                         )
                     })  
                   }
               </ul>
            </div>
        )
    }
}

export default List