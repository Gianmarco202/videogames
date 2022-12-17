import { useState } from "react";
import {useDispatch} from "react-redux"
import {searchVideogame} from "../redux/action";


export default function SearchBar() {
    const [search, setSearch] = useState('')
    let dispach = useDispatch()
    function onSubmit(e) {
        e.preventDefault();
        dispach(searchVideogame(search))
    }
    function onInputChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return  <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search" onChange={onInputChange} value={search}/>
            <input type="submit" value="Buscar"/>

        </form>
    </div>
}