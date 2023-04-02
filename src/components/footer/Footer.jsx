import Invite from "./Invite";
import Form from './Form'
import Logo from './Logo'
import Menu from './Menu'
import SocialMedia from "./SocialMedia";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Invite />
              <Form />
            </div>
            <Logo />
            <Menu />
          </div>
          <SocialMedia />
        </div>
      </footer>
    </>
  );
};

export default Footer;
