import './Header.css';
import AnchorLink from "react-anchor-link-smooth-scroll";


 
function Header() {
    return (
        <header>
            <ul>
                <li className='name'>
                        Tabetha
                </li>
            </ul>
            <ul>
                <li><AnchorLink href='#about'>About</AnchorLink></li>
                <li><AnchorLink href='#portfolio' >Projects</AnchorLink></li>
                <li className='contact'><AnchorLink href='#contact'>Contact</AnchorLink></li>
            </ul>
        </header>
    )
}

export default Header;