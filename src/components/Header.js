import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Header.css'

function Header() {

  const [navBackground, setNavBackground] = useState('transparent');
  const [navBoxShadow, setNavBoxShadow] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / window.innerHeight) * 100;

      if (scrollPercent > 10) {
        setNavBackground(`rgba(255, 255, 255, 0.7)`);
        setNavBoxShadow('0 2px 4px rgba(0, 0, 0, 0.1)')
      }
      else {
        setNavBackground('transparent');
        setNavBoxShadow('none')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav style={{ backgroundColor: navBackground, boxShadow: navBoxShadow }}>
          <div className='logo'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFUlEQVR4nO1Zb4hVRRSfAiEIEi3WSHfNwpBYTZ15u7oU9cWM/uGXstRSoSKoNPxQH/qwBlJQQVifNtd35m1ooMi2c+7zboS67vu3lB/cKNySKCr/fNBQd6WWdnfi3H1v2OW+P3fuu/sP3g8OXGbmnvM7M+ecuTOXsRpqqKGGWQ+uEg3cgbeEgm6OckAoGOJK/iNQXuBKuhzhneZOuDeovqaujmXcke+SPqHgoqeLdI7rJhtvis54fdXEm45/uYQreZAjjAiUupzkxxwqZ5gmQiActtDXvg7l4lDkuYJNAmGwkiG/YXlDqMRmn74u+WJofSiftSIvUO4WKEdtjRlRMCYQ3p4w83vG20LqQznKFeyymPkqyE90QiU2C4QXqiSvC05UXAmK+TDLXG758yEQmb41X7ffU3r2EeJRGZs6gQMlQifREKQ6zLRwhBGKlGKxv2umyYmgouCNIg5Id+44IJM+BwTC+WoVb3X36V8z93uyxd1n2p93P9C/ZJbr3zPL9HZ3bwRhJAeKOVB19fk+tVoP993hyXepNaY93Rsz7T+kH4xgFWCwWA5cr1bxlewiQ/Rqrs60X8jWm/ah3EIdQ6g2hK4VKaHyp7myAhzhR38IKXmkWsVbSuTAc+6H+ufMA5HlgFDyiM+BGMJWW0Uvu+97pChBKVGDvrfp+Mf6bKpRn0uv8BLf1i5x9YfQt23zbRO5P9VoQiOTigV+7+TpFvNef6rR1oGbK51DC3wO5PPgIxtlN3J3GSKXs4sn9T3ifKE/PbHNE3qe2PdXtsG8d7NvgV1SK/kJK4VVxzrqbD6+yq3AVz1Pmr7Dp56e1JftFabvXHqFBXkYijlwd0kH8uX0dZsc+K1IDmxIfq6v5+40JOmZ2gr9lOB/ZJZ6q/Zq93uBHaBjLasIrW8RKE/YJlZBNib36zPphwz5glCJfTz52aSxTY7VfpBmra23VnaAMdbcdWARV/CnLfmdbqu+lF3iI1+Qi9l6vaO71XpSOMrL1od8jrIpf/MQyAglIhEsRb4gtCvb7cQwzFXiYRYGQsWf4Qr+C2JovdOuB/sWVnSAxtDYgA6M0pE0FHnjhCO3BT0jd/ZsqOgAjQlEXsGYcORrLArQQT9IOFG9P9rzhP47V+eF08neFk/omdqO9mz07QmiaMzDCFfylUjIGycQHqOvwLDVKbAoGOIOPMWmAgI7GsNUp8DVRsmrwom3sKkE3YEKhP7IyaMcaMb4cjYdePQU3CZQ7o9w5o/RxySbbggFL1HMho93+S9dY7KZBE/GV9IJKUzIcBVfy2YD+Jm2eRxhb6CLMQVjXMm2Vd903M5mG9Z2wTrvJ0VJB+B86M+C6VyN8ev5iac7GKakn5WzXvY3EkrFEVA4B+8rObCGGmqogc1l/A9UhIqBbYjNHAAAAABJRU5ErkJggg==" alt='logo' />

            <Link to="hero" smooth={true} duration={500}>my<span className='logo__span__title'>Pet</span></Link>
          </div>

          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul className='nav__links'>
              <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="featured" smooth={true} duration={500}>Feature</Link></li>
              <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>

          <div className="burger" onClick={toggleMenu}>
            {isOpen ? <FiMenu /> : <FiX />}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header