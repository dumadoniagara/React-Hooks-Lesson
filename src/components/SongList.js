import React, { useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   /* initial state */
   const [songs, setSongs] = useState([
      { title: 'Aku bukan boneka', id: 1 },
      { title: 'Lagu Indonesia', id: 2 },
      { title: 'Dina tanjakan burangrang', id: 3 },
   ])
   const [age, setAge] = useState(20);

   /* initial state end */

   const addSong = (title) => {
      setSongs([...songs, { title, id: uuid() }])
   }

   const addAge = () => {
      setAge(age + 1);
   }

   /* use effect will run for both state change (data of component)*/
   useEffect(() => {
      console.log('useEffect ran', songs);
   }, [songs, age])

   /* use effect will run just for age-state change */
   useEffect(() => {
      console.log('useEffect ran', songs);
   }, [age])

   return (
      <div className="song-list">
         <ul>
            {songs.map(song => {
               return (<li key={song.id}>{song.title}</li>)
            })}
         </ul>
         <hr />
         <NewSongForm addSong={addSong} />
         <br />
         <button onClick={addAge}>add 1 to Age: {age}</button>
      </div>
   )
}

export default SongList;