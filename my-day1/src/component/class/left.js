import React,{Component} from 'react'
class Left extends Component{
    constructor(props){
        /* 
            1、通过super将绑定在组件上的props赋值给this.props
            2、定义state
            3、可以绑定this指向
        */
        super(props)
        console.log("constructor");
        this.state={
            name:"张三"
        }
    }
   UNSAFE_componentWillMount(){
        /* 
            组件将要挂载，用于初始化事件和生命周期。
            react内部完成任务。(弃用)
            可以得到数据，也可以操作数据，无法获取dom，虚拟dom也没有。
        */
        console.log("componentWillMount");
    }
    componentDidMount(){
        /* 
            组件挂载结束，可以获取dom。
            可以拿到数据，数据请求，数据修改

        */
        console.log("componentDidMount");
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate",nextProps, nextState);
        return true;
    }
    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate");
       
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    add=()=>{
        this.setState({
            name:"李四"
        })
    }
    render(){
        /* 
           底层为 React.createElement
           解析this.props和this.state
           生产虚拟dom
           注意：不能使用this.setState
        */
        console.log("render");
        return(
            
            <div>
                <button onClick={this.add}>点击</button>
                <p>{this.props.name}</p>
                <p>{this.state.name}</p>
            </div>
        )
    }
   
}
export default Left