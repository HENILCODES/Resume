function About(props) {
  return (
    <div className="box">
      <h1>About Me</h1>
      <div className="about spaceTop" id="about">
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
          <div className="block">15 / February / 2003</div>
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
      <h1>Knowledge</h1>
      <div className="knowledge spaceTop">
        <div className="blocks">
          <div className="konwledge_blook">
            <h4>Web Language</h4>
            <div className="icon_box">
              {Icon_Detail("fa fa-brands fa-html5", "html")}
              {Icon_Detail("fa fa-brands fa-css3-alt", "CSS")}
              {Icon_Detail("fa fa-brands fa-square-js", "js")}
              {Icon_Detail("fa fa-brands fa-php", "php")}
              {Icon_Detail("fa fa-brands fa-git-alt", "git")}
              {Icon_Detail("fa fa-brands fa-github", "github")}
              {Icon_Detail("fa fa-brands fa-react", "reactjs")}
              {Icon_Detail("fa fa-brands fa-sass", "sass")}
              {Icon_Detail("icon-mongodb", "Mongodb")}
              {Icon_Detail("icon-jquery", "jquery")}
              {Icon_Detail("bi bi-server", "DBMS")}
            </div>
          </div>
          <div className="konwledge_blook">
            <h4>Frame Work</h4>
            <div className="icon_box">
              {Icon_Detail("fa fa-brands fa-bootstrap", "Bootstrap")}
            </div>
          </div>
          <div className="konwledge_blook">
            <h4>Programming Language</h4>
            <div className="icon_box">
              {Image_Detail(
                "https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg",
                "V S code"
              )}
              {Image_Detail(
                "https://miro.medium.com/max/800/1*BBYoIy6qy2jmBtOMJx7Ndw.png",
                "ajax"
              )}
              {Image_Detail(
                "https://cdn.cdnlogo.com/logos/m/48/microsoft-dot-net.svg",
                ".net"
              )}
              {Icon_Detail("fa fa-brands fa-python", "python")}
              {Icon_Detail("fa fa-brands fa-c", "C/C++")}
              {Icon_Detail("fa fa-brands fa-java", "java")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Image_Detail(Isrc, Ititle) {
  return (
    <div className="icon_block">
      <div className="icon">
        <img src={Isrc} alt={Ititle} />
      </div>
      <div className="icon_title">
        <span>{Ititle}</span>
      </div>
    </div>
  );
}
function Icon_Detail(code, title) {
  return (
    <div className="icon_block">
      <div className="icon">
        <i className={code}></i>
      </div>
      <div className="icon_title">
        <span>{title}</span>
      </div>
    </div>
  );
}
export { About, Knowledge };
