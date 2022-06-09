import React,{Component} from "react";
import Tab from "./todolist/tab";
import List from "./todolist/list";
import { Modal,Input  } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[{
                id:1,
                text:"任务一",
                flage:false
            }],
            isModalVisible:false,
            val:"",
            keys:""
        }
    }
    toadd=(conet)=>{
        this.setState((state)=>{
           
            state.list.push({
                id:state.list.length+1,
                text:conet,
                flage:false
            })
            console.log("添加",state.list);
            return state.list
        })
    }
    del=(key)=>{
        this.setState((state)=>{
            console.log("删除",key);
            for(let i=0;i<state.list.length;i++){
                if(state.list[i].id==key){
                    state.list.splice(i,1)
                }
            }
            return state.list
        })
    }
    xiugai=(key)=>{
        console.log("修改",key);
        this.setState({
            isModalVisible:true,
            keys:key,
            val:""
        })

    }
    handleOk=()=>{
        console.log("OK",this.state.val);
        this.setState({
            isModalVisible:false
        })
        this.setState((state)=>{
            console.log("修改",this.state.keys,state);
            for(let i=0;i<state.list.length;i++){
                if(state.list[i].id==this.state.keys){
                    state.list[i].text=this.state.val
                }
            }
            return state.list
        })
    }
    handleCancel=()=>{
        this.setState({
            isModalVisible:false
        })
    }
    change=(e)=>{
        this.setState({
            val:e.target.value
        })
    }
    render(){
        const{list}=this.state
        return(
            <div>
                <Tab toadd={this.toadd}/>
                <List list={list} del={this.del} xiugai={this.xiugai}/>
                <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Input placeholder="Basic usage" value={this.state.val}  onChange={this.change}/>
                </Modal>
            </div>
        )
    }
}

export default Todo