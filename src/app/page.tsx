import Form from "./Form"
import Title from "./Title"
import ToDoList from "./ToDoList"
export default function Home() {
  const name:string ="Jonathan"
  return (
    <div>
      <Title name={name}/>
      <Form/>
    <ToDoList/>
    </div>
  )
}
