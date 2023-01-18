import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Counter } from './Counter';
import {AddColor} from './AddColor';
import {Routes, Route, Link, useNavigate, useParams} from "react-router-dom";
import { UserList } from './UserList';
import { Home } from './Home';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';


const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
  },
];

function App() {
  return (
    <div className="App">

{/* "Link to" change the page without refresh  */}
      <nav  className='navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/book'>BookList</Link>
          </li>
          <li>
            <Link to='/color-game'>AddColor</Link>
          </li>
          <li>
            <Link to='/users'>UserList</Link>
          </li>
        </ul>
      </nav>

      <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/book" element={<BookList />}></Route>
  <Route path="/color-game" element={<AddColor />}></Route>
  <Route path="/users" element={<UserList />}></Route>
  {/* <Route path="/book/:bookid" element={<BookDetail />}></Route> */}
  

  </Routes>
    </div>
  );
}


function BookDetail()
{
  const {bookid}=useParams();
  return <div>Book Detail Page of {bookid}</div>
  
}

function BookList(){
  // const bookList = INITIAL_BOOK_LIST;

  const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <div className="add-book-form">

      <TextField id="standard-basic" label="Enter a name" variant="standard" 
      onChange={(event) => setName(event.target.value)}
      />


        {/* <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter a name"
        /> */}
<TextField id="standard-basic" label="Enter a poster" variant="standard" 
      onChange={(event) => setPoster(event.target.value)}
      />
        
        {/* <input
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          placeholder="Enter a poster"
        /> */}

<TextField id="standard-basic" label="Enter a rating" variant="standard" 
      onChange={(event) => setRating(event.target.value)}
      />
        {/* <input
          onChange={(event) => setRating(event.target.value)}
          type="text"
          placeholder="Enter a rating"
        /> */}

<TextField id="standard-basic" label="Enter a summary" variant="standard" 
      onChange={(event) => setSummary(event.target.value)}
      />  
        {/* <input
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          placeholder="Enter a summary"
        /> */}
        </div>

        <Button variant="outlined" 
        onClick={() => {
          const newBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
          };
          // {/* //copy the bookList and add newBook to it */}
          setBookList([...bookList, newBook]);
        }}>Add Book</Button>

        {/* <button onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            // {/* //copy the bookList and add newBook to it
            setBookList([...bookList, newBook]);
          }}>Add Book</button>  */}
          

       

    <div className='book-list'>
        {bookList.map((bk,index)=>(
        <Book key={index} book={bk} id={index}/>
        ))}
   </div>
   </div>
  )
}

function Book({book, id})

{
  const [show,setShow]=useState(true);

  const styles={ 
    color:book.rating>8?"green":"red"
  };
  
  const navigate=useNavigate()

  // true:visible
  // false:hide
  const summaryStyle = {
    display :show ? "block" : "none",
  };


  return(
    <div className="book-container">
    <img className="book-poster" src={book.poster} alt={book.name} />
    <div className="book-spec">
      <h2 className="book-name">{book.name}-{id}</h2>
      <p  style={styles}className="book-rating">⭐{book.rating}
      </p>
    </div>

    <IconButton aria-label="toggle-description"  
     onClick={()=>setShow(!show)}
     color="primary"
 >
   { show?<ExpandLessIcon/>:<ExpandMoreIcon/>}  
      </IconButton>

  <IconButton aria-label="information"  
     onClick={()=> navigate("/book/"+id)}
     color="primary"
 >
   <InfoIcon/>
      </IconButton>

    {/* button for toggle */}
    {/* <button onClick={()=>setShow(!show)}>Toggle Summary</button> */}
    {/* Adding info button */}
    {/* <button onClick={()=> navigate("/book/"+id)}>Info</button> */}

    {/* <p style={summaryStyle} className='book-summary'>
      {book.summary}</p> */}
      {/* conditional rendering */}
      {show ? <p  className='book-summary'>{book.summary}</p> :""}
    <Counter/>
    </div>
  )
  }

export default App;
