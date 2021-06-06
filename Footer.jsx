var React = require("react");

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer> //header is a normal tag in html
  );
}

export default Footer;
