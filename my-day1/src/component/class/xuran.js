import React,{Component} from 'react'

class Xuan extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"张三",
            xml:"<div>带标签的数据展示</div>",
            flag:true,
            list:["列表1","列表2","列表3"]
        }
    }
    add=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    render(){
        const{name,xml,flag,list}=this.state
        return(
            <div>
                class渲染<br/>
                <div>1.数据展示</div>
                <p>{name}</p>
                <p dangerouslySetInnerHTML={{__html:xml}}/>
                <br/>
                <div>2.条件展示</div>
                <button onClick={this.add}>条件</button>
                <p>{flag?"真":"假"}</p>
                {flag?<p>真</p>:""}
                <br/>
                <div>3.列表展示</div>
                <ul>
                    {list.map((item,index)=>{
                      return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
           
        )
    }
}
export default Xuan