import './section.css'

const section = ({ image, reverse }) => {
  let classN = 'section'
  if (reverse === true) {
    classN += ' reverse'
  }

  return (
    <div className={classN}>
      <div className="section-image">
        <img src={image} />
      </div>
      <div className="content">
        <h1 className="heading">Heading</h1>
        <h3 className="subheading poppins-light">Subheading</h3>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          natus aperiam ipsum fugit magnam? Non, nobis perferendis accusantium,
          corrupti numquam et id dicta est nisi, quo delectus laborum temporibus
          veniam.
        </p>
      </div>
    </div>
  )
}

export default section
