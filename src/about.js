function About(props) {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>About Me</h1>
        <div className="me">
          <p>
          Hello! I'm Henil.I am study in BCA. I am Know about Web Design. I am a skilled Front-end Developer and also knowledge about Back-end developement.
          </p>
        </div>
      </div>
      <div className="about_detail">
        <div className="block">Age </div>
        <div className="block">{props.age}</div>
        <div className="block">Email </div>
        <div className="block">{props.email}</div>
        <div className="block">Phone </div>
        <div className="block">{props.number}</div>
        <div className="block">Address </div>
        <div className="block">{props.address}</div>
      </div>
    </div>

  );
}

export default About;
