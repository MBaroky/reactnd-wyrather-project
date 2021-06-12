import { connect } from "react-redux";
import User from "./User";

export const Leaderboard = ({ usersIds }) => {
  return (
    <div>
      {usersIds.map((userId, index) => (
        <User
          rank={index + 1}
          key={userId}
          userId={userId}
          navUser={false}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  function sumUpActivity(user) {
    return user.questions.length + Object.keys(user.answers).length;
  }
  return {
    usersIds: Object.keys(users).sort(
      (a, b) => sumUpActivity(users[b]) - sumUpActivity(users[a])
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
