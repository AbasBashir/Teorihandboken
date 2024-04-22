import React from 'react';
import Projektmetodik from './NavLinks/Projektmetodik';
import useSubnavState from './useSubnavState';
import HTMLCSS from './NavLinks/HTMLCSS';
import UxDesign from './NavLinks/UxDesign';
import Programmeringsmetodik from './NavLinks/Programmeringsmetodik';
import JavaScript from './NavLinks/JavaScript';
import Backendutveckling from './NavLinks/Backendutveckling';
import AvanceradJavaScript from './NavLinks/AvanceradJavaScript';
import MenuItem from './MenuItem';

function Navbar({navbarStatus}) {
    
    const [isSubnavVisibleProjektmetodik, toggleSubnavProjektmetodik] = useSubnavState(false);
    const [isSubnavVisibleHTMLCSS, toggleSubnavHTMLCSS] = useSubnavState(false);
    const [isSubnavVisibleUXDesign, toggleSubnavUXDesign] = useSubnavState(false);
    const [isSubnavVisibleProgrammeringsMetodik, toggleSubnavProgrammeringsMetodik] = useSubnavState(false);
    const [isSubnavVisibleJavaScript, toggleSubnavJavaScript] = useSubnavState(false);
    const [isSubnavVisibleBackendutveckling, toggleSubnavBackendutveckling] = useSubnavState(false);
    const [isSubnavVisibleAvanceradJavaScript, toggleSubnavAvanceradJavaScript] = useSubnavState(false);

    const menuItems = [
        { title: 'Projektmetodik', content: <Projektmetodik />, toggleSubnav: toggleSubnavProjektmetodik, isVisible: isSubnavVisibleProjektmetodik },
        { title: 'HTML-CSS', content: <HTMLCSS />, toggleSubnav: toggleSubnavHTMLCSS, isVisible: isSubnavVisibleHTMLCSS },
        { title: 'UX-design', content: <UxDesign />, toggleSubnav: toggleSubnavUXDesign, isVisible: isSubnavVisibleUXDesign },
        { title: 'Programmeringsmetodik', content: <Programmeringsmetodik />, toggleSubnav: toggleSubnavProgrammeringsMetodik, isVisible: isSubnavVisibleProgrammeringsMetodik },
        { title: 'JavaScript', content: <JavaScript />, toggleSubnav: toggleSubnavJavaScript, isVisible: isSubnavVisibleJavaScript },
        { title: 'Backendutveckling', content: <Backendutveckling />, toggleSubnav: toggleSubnavBackendutveckling, isVisible: isSubnavVisibleBackendutveckling },
        { title: 'Avancerad-JavaScript', content: <AvanceradJavaScript />, toggleSubnav: toggleSubnavAvanceradJavaScript, isVisible: isSubnavVisibleAvanceradJavaScript },
      ];

  return (
    <nav className={`fixed top-18 z-50 sm:relative bg-[#ffffff] min-h-screen w-full max-h-screen pb-10 sm:border-r-[2px] sm:border-black ${navbarStatus ? 'overflow-y-auto' : ''} ${navbarStatus ? 'translate-x-0 transform transition-transform duration-1000' : '-translate-x-full transform transition-transform duration-1000 sm:translate-x-0 w-80'} sm:max-h-none sm:pb-0 xl:max-w-lg`}>
        <ul className='relative flex flex-col space-y-6 justify-center py-10 overflow-y-auto sm:sticky sm:-top-6 sm:overflow-none'>
            {menuItems.map((item, index) => (
                <MenuItem key={index} index={index} title={item.title} content={item.content} toggleSubnav={item.toggleSubnav} isVisible={item.isVisible} />
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
