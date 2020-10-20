import React, {useState} from "react"

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [destination, setDestination] = useState('')
  const [isVegan, setIsVegan] = useState(false)
  const [isKosher, setIsKosher] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [errors, setErrors] = useState([])

  const validate = e => {
    let list_errors = []

    if (firstName === '') {
      list_errors.push('First Name can not be empty')
    }
    if (lastName === '') {
      list_errors.push('Last Name can not be empty')
    }

    if (list_errors.length > 0) {
      e.preventDefault()
      setErrors(list_errors)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('submit event occurred')
    setErrors([])
  }
    
  return (
    <main>
      <ul style={{color: 'red'}}>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
          name="firstName" 
          value={firstName} 
          onChange={e => setFirstName(e.target.value)} 
          placeholder="First Name" 
        />
        <br />
        
        <input 
          name="lastName" 
          value={lastName}
          onChange={e => setLastName(e.target.value)} 
          placeholder="Last Name" 
        />
        <br />
        
        <input 
          name="age" 
          value={age}
          onChange={e => setAge(e.target.value)} 
          placeholder="Age" 
        />
        <br />
        
        <label>
          <input 
            type="radio" 
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={e => setGender(e.target.value)}
          /> Male
        </label>
        
        <br />
        
        <label>
          <input 
            type="radio" 
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={e => setGender(e.target.value)}
          /> Female
        </label>
        
        <br />
        
        <select 
          value={destination} 
          name="destination" 
          onChange={e => setDestination(e.target.value)}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="germany">Germany</option>
          <option value="norway">Norway</option>
          <option value="north pole">North Pole</option>
          <option value="south pole">South Pole</option>
        </select>
        
        <br />
        
        <label>
          <input 
            type="checkbox"
            name="isVegan"
            onChange={e => setIsVegan(prev => !prev)}
            checked={isVegan}
          /> Vegan?
        </label>
        <br />
        
        <label>
          <input 
            type="checkbox"
            name="isKosher"
            onChange={e => setIsKosher(prev => !prev)}
            checked={isKosher}
          /> Kosher?
        </label>
        <br />
        
        <label>
          <input 
            type="checkbox"
            name="isLactoseFree"
            onChange={e => setIsLactoseFree(prev => !prev)}
            checked={isLactoseFree}
          /> Lactose Free?
        </label>
        <br />
        
        <button onClick={validate}>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {firstName} {lastName}</p>
      <p>Your age: {age}</p>
      <p>Your gender: {gender}</p>
      <p>Your destination: {destination}</p>
      <p>Your dietary restrictions:</p>
      
      <p>Vegan: {isVegan ? "Yes" : "No"}</p>
      <p>Kosher: {isKosher ? "Yes" : "No"}</p>
      <p>Lactose Free: {isLactoseFree ? "Yes" : "No"}</p>
    </main>
  )
}