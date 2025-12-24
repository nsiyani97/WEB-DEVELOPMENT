import React, { useId, useState } from 'react'

function NewCrud() {
    const [data, setData] = useState([])
    let id = useId()
    console.log(id)
  return (
    <div>
        <form action="#" method="post" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name='newName' value={form.newName}/>
            <input type="number" onChange={handleChange} name='newAge' value={form.newAge}/>
            <input type="email" onChange={handleChange} name='newEmail' value={form.newEmail}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default NewCrud