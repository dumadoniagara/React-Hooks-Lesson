import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   const [songs, setSongs] = useState([
      { title: 'Aku bukan boneka', id: 1 },
      { title: 'Lagu Indonesia', id: 2 },
      { title: 'Dina tanjakan burangrang', id: 3 },
   ])

   const addSong = (title) => {
      setSongs([...songs, { title, id: uuid() }])
   }

   return (
      <div className="song-list">
         <ul>
            {songs.map(song => {
               return (<li key={song.id}>{song.title}</li>)
            })}
         </ul>
         <hr />
         <NewSongForm addSong={addSong} />
      </div>
   )
}

export default SongList;