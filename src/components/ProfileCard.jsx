import './ProfileCard.css'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const ProfileCard = ({ name, role, image }) => {
  return (
    <div className="profile-card">
      <img src={image} />
      <p className="name">{name}</p>
      <p className="role">{role}</p>
      <div className="links">
        <FaLinkedin className="link" />
        <FaTwitter className="link" />
      </div>
    </div>
  )
}

export default ProfileCard
