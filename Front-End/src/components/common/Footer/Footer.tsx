import classes from './Footer.module.css';
const { footerContainer } = classes;

const Footer = () => {
  return (
    <div className={footerContainer}>
      &copy; 2024 Our Ecom. All rights reserved.
    </div>
  );
};
export default Footer;
