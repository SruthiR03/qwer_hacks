import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function ShowBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const bookList =
    books.length === 0
      ? 'there is no book record!'
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className='ShowBookList'>
      
      <div className='container'>
      <div className= 'nav-bar'></div>
      

      <input
                    type="textbox"
                    className={'searchSpeciality'}
                   
              
                  />
      
      
        <div className='row'>
        

         

          <div className='col-md-11'>
         
            <br />
            <br />
          </div>
        </div>


        <div className='list'>{bookList}</div>
        
      </div>
    </div>
  );
}

export default ShowBookList;
