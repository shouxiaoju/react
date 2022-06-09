import React,{Component} from "react";

class Tab extends Component{

    constructor(props){
        super(props)
        this.state={
            val:""
        }
    }

    add=(e)=>{
        if(e.type=="keydown"){
            if(e.keyCode==13){
                this.props.toadd(e.target.value)
                e.target.value=""
            }
        }else if(e.type=="click"){
            this.props.toadd(this.input.value)
            this.input.value=""
        }
    }

    render(){
        return(
            <div>
               <input type="text" onKeyDown={this.add} ref={(el)=>this.input=el}  placeholder="请输入内容"/>
               <button onClick={this.add}>添加</button>
            </div>
        )
    }
}

export default Tab