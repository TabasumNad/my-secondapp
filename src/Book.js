import { useState } from 'react';
import { Counter } from './Counter';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

export function Book({ book, id }) {
  const [show, setShow] = useState(true);

  const styles = {
    color: book.rating > 8 ? "green" : "red"
  };

  const navigate = useNavigate();

  // true:visible
  // false:hide
  const summaryStyle = {
    display: show ? "block" : "none",
  };


  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">{book.name}-{id}</h2>
        <p style={styles} className="book-rating">⭐{book.rating}
        </p>
      </div>

      <IconButton aria-label="toggle-description"
        onClick={() => setShow(!show)}
        color="primary"
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      <IconButton aria-label="information"
        onClick={() => navigate("/book/" + id)}
        color="primary"
      >
        <InfoIcon />
      </IconButton>

      {show ? <p className='book-summary'>{book.summary}</p> : ""}
      <Counter />
    </div>
  );
}
