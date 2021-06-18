// import { NextPageContext } from 'next'
import DeckCard from '../components/DeckCard/DeckCard'
import NavBar from '../components/NavBar/NavBar'

let testDECK = (id) => {
  return {
  deckName: "JavaScript",
  uid: id,
  content: [],
  createdAt: "yesterday",
  userHandle: "admin"
  }
}

const decks = ({list}) => {
  return (
    <div>
      <NavBar/>
      <DeckCard deck={testDECK(123)}/>
      <DeckCard deck={testDECK(255)}/>
      <DeckCard deck={testDECK(951)}/>

    </div>
  )
}

// decks.getInitialProps = async (ctx: NextPageContext) => {
//   const json = getRequsetWithMiddleware('http://localhost:3000/api/decks', ctx);
//   return json
// }

export default decks;
