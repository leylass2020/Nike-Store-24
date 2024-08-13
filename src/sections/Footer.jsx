import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex gap-20 flex-wrap max-lg:flex-col items-start justify-between">
        <div className="flex flex-col items-start gap-10">
          <a href="/">
            <img src={footerLogo} alt="logo" width={136} height={103} />
          </a>
          <p></p>
          <div className="flex items-start justify-between gap-5">
            {socialMedia.map((social) => (
              <div key={social.alt} className="bg-white rounded-full p-2">
                <img src={social.src} alt={social.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-white flex items-start w-full gap-10">
          {footerLinks.map((lt) => (
            <div key={lt.title} className="">
              <h3 className="font-semibold text-xl font-palanquin py-3 leading-normal">
                {lt.title}
              </h3>
              <ul className="flex flex-col">
                {lt.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    className="font-montserrat"
                  >
                    {link.name}
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-start text-white gap-20">
          <p>copyright@</p>
          <p>all reservied</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
