import './OurTeam.css'
import ProfileCard from './ProfileCard'
import ceo from '../assets/ceo.webp'

const OurTeam = () => {
  return (
    <>
      <div className="outer">
        <h1>OUR TEAM</h1>
        <div className="our-team">
          <ProfileCard name="Zebra" role="Assulter" image={ceo} />
          <ProfileCard name="Zebra" role="Assulter" image={ceo} />
          <ProfileCard name="Zebra" role="Assulter" image={ceo} />
        </div>
      </div>
    </>
  )
}

export default OurTeam
