import { useRouter } from 'next/router'
import {MouseEvent} from 'react';


const Home = () => {

  const router = useRouter()

  let onClickHandle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push("./decks")
  }

  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button style={{backgroundColor: "#034EDF", padding: "1rem", borderRadius: "15px", color: "white"}} onClick={onClickHandle}>LOG-IN with Google</button>
    </div>
  )
}

export default Home