function About(props) {
  return (
    <div className="box" id="about">
      <h1>About Me</h1>
      <div className="about spaceTop">
        <div className="title">
          <div className="me capitalize">
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
          <div className="block"> <a href="mailto:henilcode@gmail.com" className="white text-decoration-none">{props.email}</a></div>
          <div className="block">Phone </div>
          <div className="block">  <a href="tel:+919081807209" className="white text-decoration-none" >{props.number}</a> <a className="bi bi-whatsapp" href="https://wa.me/919081807209/?text=Hi"> </a> </div>
          <div className="block">Address </div>
          <div className="block">
            {props.address}{" "}
            <a target='blank'
              href="https://goo.gl/maps/mixcNp5zhomBYMEA7"
              className="bi bi-geo-alt"
            >
              {" "}
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="other_about capitalize me">
        <p>
          {" "}
          I am Contribute Time for My Education, Knowledge and Work's. I have
          interest about Technology and learn programming language. i know about web development.
        </p>
      </div>
    </div>
  );
}
function Education(){
  return(
    <div className="box" id="Education">
      <h1>Education</h1>
      <div className="spaceTop">
        <div className="konwledge_blook">
            <details open>
              <summary>College</summary>
              <div className="me">
                <p>R K Desai College Vapi</p>
                <p>Status : Runing</p>
                <p>SGPA : 8.1</p>
              </div>
            </details>
            <details open>
              <summary>12<sup>TH</sup></summary>
              <div className="me">
                <p>Desai N.D.N High School Vapi</p>
                <p>Status : Complet</p>
                <p>Result : 52.26</p>
              </div>
            </details>
        </div>
      </div>
    </div>
  )
}
function Knowledge() {
  return (
    <>
      <div className="box" id="konwledge">
        <h1>Knowledge</h1>
        <div className="knowledge spaceTop">
          <div className="blocks">
            <div className="konwledge_blook">
              <h2>Know about</h2>
              <div className="icon_box">
                {Icon_Detail("fa fa-brands fa-html5", "html")}
                {Icon_Detail("fa fa-brands fa-css3-alt", "CSS")}
                {Icon_Detail("fa fa-brands fa-square-js", "js")}
                {Icon_Detail("icon-jquery", "jquery")}
                {Icon_Detail("fa fa-brands fa-sass", "sass")}
                {Image_Detail(
                  "https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg",
                  "V S code"
                )}
                {Icon_Detail("fa fa-brands fa-github", "github")}
                {Icon_Detail("fa fa-brands fa-git-alt", "git")}
                {Icon_Detail("fa fa-brands fa-bootstrap", "Bootstrap")}
              </div>
            </div>
            <div className="konwledge_blook">
              <h2>Basic </h2>
              <div className="icon_box">
                {Icon_Detail("fa fa-brands fa-react", "reactjs")}
                {Icon_Detail("icon-mongodb", "Mongodb")}
                {Icon_Detail("fa fa-brands fa-php", "php")}
                {Icon_Detail("bi bi-server", "DBMS")}
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
      <div className="box me spaceTop">
        <p>
          i am use Visual Studio Code editor last 3 year for website development and use git & GitHub for store code. i have basic knowledge of website hosting. 
        </p>
      </div>
    </>
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
export { About, Knowledge ,Education };
