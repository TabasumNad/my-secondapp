export function Msg({ pic, name }) {
  return (
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h1>hello {name}</h1>
    </div>
  );
}
