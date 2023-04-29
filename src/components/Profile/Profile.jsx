import user from "./user.json"
// import user from 'path/to/user.json;

{/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */}

export const Profile = () => {
    return (
    <div className="profile">
  <div className="description">
    <img
      src={user.avatar}
      alt="User avatar"
      className="avatar"
      width="250"
    />
    <p className="name">{user.username}</p>
    <p className="tag">{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.fllowers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>)
}