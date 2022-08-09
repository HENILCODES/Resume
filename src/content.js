function About(props) {
  return (
    <div className="box">
      <h1>About Me</h1>
      <div className="about" id="about">
        <div className="title">
          <div className="me">
            <p>
              Hello! I'm Web Devloper.I am study in BCA. I am Know about Web
              Design. I am a skilled Front-end Developer and also Knowledge
              about Back-end developement.
            </p>
          </div>
        </div>
        <div className="about_detail">
          <div className="block">DOB </div>
          <div className="block">15 February 2003</div>
          <div className="block">Email </div>
          <div className="block">{props.email}</div>
          <div className="block">Phone </div>
          <div className="block">{props.number}</div>
          <div className="block">Address </div>
          <div className="block">{props.address}</div>
        </div>
      </div>
    </div>
  );
}

function Knowledge() {
  return (
    <div className="box">
      <div className="knowledge">
        <h1>f</h1>
      </div>
    </div>
  );
}
export { About, Knowledge };
