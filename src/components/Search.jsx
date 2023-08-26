import { useRef } from "react";

export const Search = ({fn})=>{
    const artist = useRef();
    return (
        <>
    <label>Search</label>
    <input ref = {artist} type = 'text' className="form-control" placeholder="What do you want to listen to?"/>
    <br/>
    <button className="btn btn-success" onClick={()=>{
        fn(artist.current.value);
    }}>Search It</button>
    </>
    );
}   