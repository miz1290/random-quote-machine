import Button from "./Button";
import Socials from "./Socials";

const Footer = ({ onclick, color }) => {
  return (
    <footer id="footer">
      <Socials />
      <Button color={color} onClick={onclick} />
    </footer>
  );
};

export default Footer;
