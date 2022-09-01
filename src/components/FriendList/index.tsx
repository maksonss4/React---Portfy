import { DivContainer } from "./style";

interface IFriend {
  name: string;
  img: string;
}

interface IUser {
  friends: IFriend[];
}

const FriendList = () => {
  const user: IUser = {
    friends: [
      {
        name: "João",
        img: "",
      },
      {
        name: "Maria",
        img: "",
      },
      {
        name: "Fabio",
        img: "",
      },
      {
        name: "Ana",
        img: "",
      },
      {
        name: "Carlos",
        img: "",
      },
    ],
  };

  return (
    <DivContainer>
      <h2>Amigos</h2>
      {user?.friends.length > 0 ? (
        <ul>
          {user.friends.map((friend, i) => {
            return (
              <li key={i}>
                <figure>
                  <img
                    src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
                    alt=""
                  />
                </figure>
                <p>{friend.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Lista de amigos está vazia. Adicione amigos</p>
      )}
    </DivContainer>
  );
};

export default FriendList;
