import Logo from "./Logo";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white py-4 px-12 shadow-md">
      <div className="flex items-center gap-10 w-full max-w-6xl">
        <Logo />
      </div>
      <div className="flex gap-5">
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
