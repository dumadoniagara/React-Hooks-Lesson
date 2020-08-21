import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';

const SongList = () => {
   const [songs, setSongs] = useState([
      { title: 'Aku bukan boneka', id: 1 },
      { title: 'Lagu Indonesia', id: 2 },
      { title: 'Dina tanjakan burangrang', id: 3 },
   ])

   const addSong = () => {
      setSongs([...songs, { title: 'new song', id: uuid() }])
   }

   return (
      <div className="song-list">
         <ul>
            {songs.map(song => {
               return (<li key={song.id}>{song.title}</li>)
            })}
         </ul>
         <button onClick={addSong}>Add Song</button>
      </div>
   )
}

export default SongList;