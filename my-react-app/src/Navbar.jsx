import React,{useState} from 'react';
import Projektmetodik from './Projektmetodik';
import useSubnavState from './useSubnavState';
import HTMLCSS from './HTMLCSS';
import UxDesign from './UxDesign';
import Programmeringsmetodik from './Programmeringsmetodik';
import JavaScript from './JavaScript';
import Backendutveckling from './Backendutveckling';
import AvanceradJavaScript from './AvanceradJavaScript';
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
    <nav className={`fixed top-18 z-50 sm:relative bg-[#6BA368] min-h-screen border-t-[1.5px] border-[#98c897] w-full max-h-screen pb-10 ${navbarStatus ? 'overflow-y-auto' : ''} ${navbarStatus ? 'translate-x-0 transform transition-transform duration-1000' : '-translate-x-full transform transition-transform duration-1000 sm:translate-x-0 w-80'} sm:max-h-none sm:pb-0 xl:max-w-lg`}>
        <ul className='relative flex flex-col space-y-6 justify-center py-10 overflow-y-auto sm:sticky sm:-top-6 sm:overflow-none'>
            {menuItems.map((item, index) => (
                <MenuItem key={index} index={index} title={item.title} content={item.content} toggleSubnav={item.toggleSubnav} isVisible={item.isVisible} />
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
