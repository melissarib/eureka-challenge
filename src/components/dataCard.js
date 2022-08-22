import "./components.css";

const usersMock = [
  {
    id: "a3276e5b-d846-435c-8a86-feb6189374b2",
    name: "Savannah Nguyen",
    balance: {
      points: 622,
      miles: 1146,
      currency: 439.3676984879685,
    },
    image:
      "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/1.jpg",
  },
  {
    id: "a3276e5b-d846-435c-8a86-feb6189374b3",
    name: "Cameron Williamson",
    balance: {
      points: 541,
      miles: 623,
      currency: 1070.977381376953,
    },
    image:
      "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/2.jpg",
  },
];

function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <span>Pos.</span>
        <span>Member</span>
        <span>Points</span>
      </div>
      <div className="card-body">
        {usersMock.map((user, index) => {
          return (
            <div key={user.id}>
              <span>{index + 1}</span>
              <div className="user-info">
                <img src={user.image} alt={user.name} />
                <p>{user.name}</p>
              </div>
              <span>{user.balance.points}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
