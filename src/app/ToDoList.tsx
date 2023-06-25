
import Card from "./Card";

const ToDoList = (props: any) => {
  return (
      <div className="bg-green-200 rounded overflow-hidden drop-shadow-2xl">
        <Card data={props.tasks[0]} />
        <Card data={props.tasks[1]} />
        <Card data={props.tasks[2]} />
        <Card data={props.tasks[3]} />
      </div>

  );
};

export default ToDoList;
