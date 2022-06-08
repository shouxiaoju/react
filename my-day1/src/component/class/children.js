import React,{Component,useState} from 'react'
import PropTypes from 'prop-types'


//外部传入的props    hook组件

/* export default function Children({name}){
    const [count ,setCount]=useState(0)
    return(
        <div>
            子组件+{name}+{count}
        </div>
    )
} */

//类组件  
//1、外部传入的props 只能由父级进行更改
//2、组件自身定义的属性  static 关键字只有类组件有函数组件没有。内部设置的属性不可更改

class Children extends Component{
    constructor(props){
        super(props)//this.props=props
        //this.hander=this.hander.bind(this) //改变this指向
        this.state={
            count:0
        }
    }
    static defaultProps={
        height:1.8
    }
    hander2=(n)=>{
        console.log("点击触发箭头函数",n);
        console.log("点击触发箭头函数",this)
    }
    hander1(n){
        console.log("点击触发普通函数",this);//undefined  如果类组件中绑定的是普通函数this指向为undefined
        console.log(n);
    }
    hander3=(arr)=>{
       // console.log("点击触发",arr);//直接触发，this.hander3相当于一个函数，加()相当于调用
    }
    hander4=(n)=>{

       /*  this.setState({
            count:++this.state.count
        }) */
       
        /* this.setState((state)=>{  //合并
           return {
            count:++state.count
           }
        })
        this.setState((state)=>{
            return {
             count:++state.count
            }
         })
         this.setState((state)=>{
            return {
             count:++state.count
            }
         }) */
      /*   this.setState({
            count:++this.state.count
        },()=>{
            console.log(this.state);
        }) */
       /*  this.setState((state)=>{
            console.log(state);
           return {
            count:++state.count
           }
        },()=>{
            console.log(this.state);
        }) */
    }
    render(){
      //  console.log(this.props);
        const {name,height}=this.props
        return(
            <div>
               class 子组件+{name}+身高+{height}+{this.state.count}
                <button onClick={this.hander1.bind(this,10)}>普通函数</button>
                <button onClick={()=>{this.hander2(10)}}>箭头函数</button>
                <button onClick={this.hander3(10)}>箭头函数</button>{/* 直接触发，this.hander3相当于一个函数，加()相当于调用 */}
                <button onClick={()=>{this.hander4(10)}}>点击+</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
    
}

export default Children

/* 
    校验，校验传入的值。
        react 中的校验需要引入第三方库 npm install --save prop-types
        如果使用了ts就不需要进行校验
*/
/* Children.propTypes={
    name:PropTypes.string,
    height:PropTypes.number
} */


//状态，state 


//事件，react中的事件类型是大写的，不是原生事件，而是合成事件（封装的事件）e也不是原生的，操作方法与原生相同