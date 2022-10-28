import React, { useState, useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import "./plan.scss";

    const PlanShows = () => {
    
    const history = useHistory();
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
        setMovies(doc.data()?.planShows);
      });
    }, [user?.email]);
  
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
          const result = movies.filter((item) => item.id !== passedID)
          await updateDoc(movieRef, {
              planShows: result
          })
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = async(ID)=>{
      try {
        history.push(ID);
      } catch (error) {
          console.log(error)
      }
    }
  
    return (
      <>
        <h2 className='heading'>Plan to Watch</h2>
        <div className='container221'>
          <MdChevronLeft
            onClick={slideLeft}
            className='leftbt'
            size={40}
          />
          <div id={'slider'} className='slider1'>
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
                {/* <div className='card2' onClick={()=> history.push('${item?.link}')} > */}
                <div className='card2' onClick={()=> navigate(item.link)} >
                  <p className='p1'>
                    {item?.title}
                  </p>
                  </div>
                  <p onClick={()=> deleteShow(item.id)} className='p2'><AiOutlineClose /></p>
                
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
  
  export default PlanShows;

  