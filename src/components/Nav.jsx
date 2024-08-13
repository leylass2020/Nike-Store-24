import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="w-full absolute py-8 z-10 padding-x">
      <nav className="flex justify-between items-center max-container">
        <a>
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-slate-gray text-lg font-montserrat leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="menu" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
