'use client'
const Task = (props:any) =>{
    const handleDelete = () =>{
        console.log("delete card")
    }
    return(
        <div className="rounded overflow-hidden shadow-lg p-2 m-2">
            <span className="text-center">{props.data}</span>
            <button className="m-2 rounded-full bg-emerald-200" onClick={handleDelete}>delete</button>
        </div>
    )
}
export default Task;