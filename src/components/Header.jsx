

import { Link } from 'react-router-dom'


export const Header = ({count}) => {
  return (
    <header>
        <h1>TODO: {count} </h1><h3 className='counter'>{(count) ? "Thing tracked" : "Things tracked"}</h3>
        <h3> <Link className='to-start' to='/'>Back to start</Link> </h3>
        
    </header>
  )
}

