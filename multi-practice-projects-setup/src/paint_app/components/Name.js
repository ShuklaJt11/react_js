import React, {useState} from 'react'

const Name = React.memo(() => {
  const [name, setName] = useState('')
  console.log('rendering name')  
  return (
    <label className="header-name">
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="App Name"
      />
    </label>
  )
})

export default Name