import { useRouter } from 'next/router'
import GoogleLogin from 'react-google-login'
import {MouseEvent} from 'react';


const Home = () => {

  const router = useRouter()

  let onClickHandle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push("./decks")
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <button className="bg-blue-600 p-4 rounded-lg text-white" onClick={onClickHandle}>LOG-IN with Google</button>
    </div>
  )
}

export default Home