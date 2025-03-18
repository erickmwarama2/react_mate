import Logo from "../assets/Logo.png";

export const Header = () => {
  return (
    <header>
      <img width="30px" src={Logo} alt="logo" />
      <a href="/">Home</a>
    </header>
  );
};
