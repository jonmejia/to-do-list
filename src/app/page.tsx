import ToDoList from "./ToDoList"
export default function Home() {
  const sampleName:string ="Jonathan"
  const sampleTasks:string[]=["walk the dog","call mom","clean room","buy groceries"]
  return (
    <ToDoList name={sampleName} tasks={sampleTasks}/>
  )
}
