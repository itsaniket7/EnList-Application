import React, { useState, useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import "./saved.scss";

    const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();
  
    const slideLeft = () => {
      var slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
      var slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft + 500;
    };
  
    useEffect(() => {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedShows);
      });
    }, [user?.email]);
  
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
          const result = movies.filter((item) => item.id !== passedID)
          await updateDoc(movieRef, {
              savedShows: result
          })
        } catch (error) {
            console.log(error)
        }
    }
  
    return (
      <>
        <h2 className='heading'>My Shows</h2>
        <div className='container221'>
          <MdChevronLeft
            onClick={slideLeft}
            className='leftbt'
            size={40}
          />
          <div
            id={'slider'}
            className='slider1'
          >
            {movies?.map((item) => (
              <div
                key={item.id}
                className='card'
              >
                <img
                  className='img1'
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className='card2'>
                  <p className='p1'>
                    {item?.title}
                  </p>
                  <p onClick={()=> deleteShow(item.id)} className='p2'><AiOutlineClose /></p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            className='rightbt'
            size={40}
          />
        </div>
      </>
    );
  };
  
  export default SavedShows;

  