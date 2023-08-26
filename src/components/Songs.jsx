import { Song } from "./Song"

export const Songs = ({fn, allSongs})=>{
    console.log('**********All Songs', allSongs);
    // map (JS)
    // allSongs (data) ---> convert --> JSX
    return(<>
          {allSongs.map((currentSong,index) =><Song fn = {fn} key={index} song = {currentSong}/>)}
    </>)
} 