import logo from './File/Henil.ico';

function Header() {
  return (
      <div className="top">
        <div className="image place-self">
          <img src={logo} alt="logo" />
        </div>
        <div className="title_detail place-self text-center">
          <h1 className="title_name">Henil Prajapati</h1>
          <div className="job_title">
            <span className="span">Web Devloper</span>
          </div>
        </div>
      </div>
  );
}
export default Header;
