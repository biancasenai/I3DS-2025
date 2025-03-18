import "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <p>
        Feito com 💜 por {"Bianca Furlanetto"}
        <a href={props.devlink} target="_blank">
          {props.devname}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
