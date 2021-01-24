import aos from 'aos';
import { useEffect } from 'react';
import ElementsLogoBig from '../../public/icons/elements.svg';

const Sidebar = (): JSX.Element => {
  useEffect(() => {
    aos.init({
      duration: 600,
      delay: 1000,
    });
  }, []);

  return (
    <aside className="sidebar" data-aos="fade-right">
      <ElementsLogoBig className="sidebar__logo" />
    </aside>
  );
};

export default Sidebar;
