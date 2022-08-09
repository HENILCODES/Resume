import logo from './File/Henil.ico';

function Header(props) {
  return (
      <div className="top">
        <div className="image place-self">
          <img src={logo} alt="logo" />
        </div>
        <div className="title_detail place-self text-center">
          <h1 className="title_name">{props.name}</h1>
          <div className="job_title">
            <span className="span">Web Devloper</span>
          </div>
        </div>
      </div>
  );
}
function Social(props) {
  return (
    <div className="header">
      <div className="title">
        <span>{props.nikename}</span>
      </div>
      <div className="social">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-instagram"></i>
      </div>
    </div>
  );
}
export {Header,Social};
