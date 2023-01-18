import { useState } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';


export function Counter() {
  // let like=0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>

<IconButton aria-label="like-btn"
onClick={() => setLike(like + 1)}
color="primary"
>
<Badge badgeContent={like} color="primary">
    
👍
    </Badge>
    </IconButton>

    {/* dislike button */}

    <IconButton aria-label="dislike-btn"
onClick={() => setDislike(dislike + 1)}
color="error"
>
<Badge badgeContent={dislike} color="error">    
👎
    </Badge>
    </IconButton>



      {/* <button onClick={() => setLike(like + 1)}>👍-{like}</button> */}
      {/* <h1>Unlike</h1> */}
      {/* <button onClick={() => setDislike(dislike + 1)}>👎-{dislike}</button> */}
    </div>
  );
}
