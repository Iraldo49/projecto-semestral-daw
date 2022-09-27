import'./SearchBar.css'
import {IoMdSearch} from 'react-icons/io';
function SearchBar(){
    return (
        <div className="topnav">
            <div className="search-container">
                <form action="">
                <input type="text" placeholder="Pesquisar..." name="search"/>
                <button type="submit"><IoMdSearch/></button>
                </form>
            </div>
        </div>
    )
}
export default SearchBar