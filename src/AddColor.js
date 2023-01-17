import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("skyblue");
  const [colorList, setColorList] = useState(
    ["pink", "orange", "violet", "green"]);

  const styles = {
    backgroundColor: color,
  };
  return (
    <div>
      <div className='addcolor'>
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          value={color} />

        <button
          onClick={() => setColorList([...colorList, color])}>
          Add color</button>
      </div>
      {colorList.map((clr) => (

        <ColorBox color={clr} />
      ))}
    </div>
  );
}
