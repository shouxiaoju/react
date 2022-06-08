import Children from "./component/class/children"



export default function Partent(){
    const name="父组件"
    return(
        <div>
            <div>父组件</div>
            <br></br>
            <Children name={name}/>
        </div>
    )
}