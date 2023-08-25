import FollowersCard from './FollowersCard'
import UserCard from './UserCard'

const User = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
      <UserCard />
      <FollowersCard />
    </div>
  );
}

export default User