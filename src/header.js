import logo from './File/Henil.ico';

function Header(props) {
  return (
      <div className="top">
        <div className="image place-self">
          <img src={logo} alt="logo" />
        </div>
        <div className="title_detail place-self text-center">
          <h2 className="title_name">{props.name}</h2>
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
        <a href='https://github.com/HENILCODES' className="bi bi-github"></a>
        <a href='https://www.facebook.com/henil.prajapati.376' className="bi bi-facebook"></a>
        <a href='https://www.instagram.com/henil_v_p/' className="bi bi-instagram"></a>
      </div>
    </div>
  );
}
export {Header,Social};
