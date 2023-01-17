import { Msg } from './Msg';

export function UserList() {

  const users = [
    {
      pic: "https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Tabasum"
    },
    {
      pic: "https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jasmin"
    },
    {
      pic: "https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Alisha"
    },
    {
      pic: "https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ameera"
    }
  ];
  return (
    <div>
      {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))}

    </div>
  );
}
