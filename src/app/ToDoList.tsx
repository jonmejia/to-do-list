'use client'
import Card from "./Card";

const ToDoList = (props: any) => {




  const handleClick = () =>{
    console.log("this works")
  }

  return (
    <div className="flex justify-center mt-12">
      <div className="max-w-sm bg-green-200 rounded overflow-hidden drop-shadow-2xl">
        <h1 className="text-center text-4xl">{props.name}&rsquo;s</h1>
        <h2 className="text-center text-4xl">to do list</h2>
        <div>
          <input className="mx-2" type="text" name="" id="" />
          <button className="mr-2 pr-2" onClick={handleClick}>
            add
          </button>
        </div>
        <Card data={props.tasks[0]} />
        <Card data={props.tasks[1]} />
        <Card data={props.tasks[2]} />
        <Card data={props.tasks[3]} />
      </div>
    </div>
  );
};

export default ToDoList;
