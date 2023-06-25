import Form from "./Form"
import Title from "./Title"
import ToDoList from "./ToDoList"
export default function Home() {
  const name:string ="Jonathan"
  const sampleTasks:string[]=["walk the dog","call mom","clean room","buy groceries"]
  return (
    <div>
      <Title name={name}/>
      <Form/>
    <ToDoList tasks={sampleTasks}/>
    </div>
  )
}
