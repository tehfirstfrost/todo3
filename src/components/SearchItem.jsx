

import './SearchItem.css'

export const SearchItem = ({ search, setSearch }) => {
    return(
        <form className="form-container" onSubmit={(e) => e.preventDefault()}>
            <input 
                id="search"
                className='input-text'
                type="text"
                role="search"
                placeholder="Search todo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='form-submit' style={{color: 'lightblue', pointerEvents: 'none',}}>Submit</button>
        </form>
    )
}