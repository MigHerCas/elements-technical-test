import ElementsLogoBig from '../../public/icons/elements.svg';

const Sidebar = (): JSX.Element => {
  return (
    <aside className="sidebar" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={1000}>
      <ElementsLogoBig className="sidebar__logo" />
    </aside>
  );
};

export default Sidebar;
