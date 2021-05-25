import {useRef, useState} from 'react'
import axios from 'axios'


export default function login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null)
  async function handleLogin(){
    const resp = await axios.post('http://localhost:3000/api/login', {
      email : emailRef.current?.value
    });
    const data = resp.data;
    console.log(data);
    
    setMessage(data)
  }
  return (
    <div>
      <input type="text" placeholder="email" ref={emailRef}/>
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      <div>
                <h1>{JSON.stringify(message?.message)}</h1>
                <a href='/decks'>click</a>
                </div>
    </div>
  )
}
