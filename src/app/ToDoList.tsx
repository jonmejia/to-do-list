import Card from "./Card";

const ToDoList =(props:any)=>{
    return(
       <div className="flex justify-center mt-12">
         <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <h1 className="text-center text-4xl">{props.name}&rsquo;s</h1>
            <h2 className="text-center text-4xl">to do list</h2>
            <Card data={props.tasks[0]}/>
            <Card data={props.tasks[1]}/>
            <Card data={props.tasks[2]}/>
            <Card data={props.tasks[3]}/>
        </div>
       </div>
    )
}
export default ToDoList;