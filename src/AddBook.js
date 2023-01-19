import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


export function AddBook( {bookList,setBookList}) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate= useNavigate()

  return (
    <div>
    <div className="add-book-form">

        <TextField id="standard-basic" label="Enter a name" variant="standard"
          onChange={(event) => setName(event.target.value)} />


       
        <TextField id="standard-basic" label="Enter a poster" variant="standard"
          onChange={(event) => setPoster(event.target.value)} />

        

        <TextField id="standard-basic" label="Enter a rating" variant="standard"
          onChange={(event) => setRating(event.target.value)} />
        

        <TextField id="standard-basic" label="Enter a summary" variant="standard"
          onChange={(event) => setSummary(event.target.value)} />
       
       <TextField
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
          onChange={(event) => setTrailer(event.target.value)}
        />
      </div>
      <Button variant="outlined"
        onClick={() => {
          const newBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer:trailer,
          };
          // {/* //copy the bookList and add newBook to it */}
          setBookList([...bookList, newBook]);
          navigate("/book");
        }}>Add Book</Button>

      </div>
  );
}
