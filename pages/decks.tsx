import { NextPageContext } from 'next'
// import {getRequsetWithMiddleware} from '../utils/getRequsetWithMiddleware'

const decks = ({list}) => {
  return (
    <div>
      <h1 onClick={() => console.log(list)
        }>Your Deck LIST</h1>
      <br />
      <br />
      <br />
      <ul>
        {/* {list.map(item => {
          if(item === null){
            return <li key={Math.random()}>deck undefined</li>
          }
          return <li key={Math.random()}>{item.name}</li>
        })} */}
        TEST
      </ul>
    </div>
  )
}

// decks.getInitialProps = async (ctx: NextPageContext) => {
//   const json = getRequsetWithMiddleware('http://localhost:3000/api/decks', ctx);
//   return json
// }

export default decks;
