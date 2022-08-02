import React, { useState } from 'react'

const TodoItem = ({handleAdd}) => {
    const [text, setText] = useState("")
  return (
    <div>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="write task"></input>
        <button onClick={()=>handleAdd(text)}>ADD Task</button>
    
    </div>
  )
}

export default TodoItem