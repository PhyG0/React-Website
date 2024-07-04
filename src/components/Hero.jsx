import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="background-image-div">
        <div className="text-container">
          <h1>Main Text</h1>
          <p>Subtext goes here</p>
        </div>
        <div className="fade-transition"></div>
      </div>
    </div>
  )
}

export default Hero
