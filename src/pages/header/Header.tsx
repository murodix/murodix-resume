import '../header/Header.scss';
import TypeWriter from 'react-typewriter';
import Navbar from '../../components/nav/Navbar';
import useWindowHeight from '../../hooks/useWindowHeight';
import { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import InfiniteSlide from '../../components/infinite-slide/InfiniteSlide';



const Header = ({ data }) => {

    const headerHeight = useWindowHeight(800);
    const headerRef = useRef<any>(null);
    const isHeaderVisible = useOnScreen(headerRef, { threshold: 0.8 });


    if (data) {
        var name = data.info.name;
        var occupation = data.info.occupation;
        var initialDescription = data.info.description.initialDescription;
        var descriptionCont = data.info.description.descriptionCont;

        var socials = data.socials.map((social) => {
            return (
                <li key={social.name}>
                    <a target="_blank" rel="noreferrer" href={social.url}>
                        <i className={social.className}></i>
                    </a>
                </li>
            )
        });
    }

    return (
        <header id="home" ref={headerRef} style={{ height: headerHeight }}>
            <Navbar navOptions={data?.navOptions} toggle={isHeaderVisible} />

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">
                        <TypeWriter typing={1}>{name ? `I'm ${name}.` : null}</TypeWriter>
                    </h1>
                    <h3>
                        {initialDescription} <span>{occupation}</span> {descriptionCont}.
                    </h3>
                    <hr />
                    <ul className="social">{socials}</ul>
                    <InfiniteSlide>
                        <img className="home__image" src="../images/skills/angular.png" alt="tech" />
                        <img className="home__image" src="../images/skills/react.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/javascript.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/git.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/spring-boot.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/web-development.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/sass.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/angular.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/react.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/javascript.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/git.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/spring-boot.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/web-development.png" alt="tech"/>
                        <img className="home__image" src="../images/skills/sass.png" alt="tech"/>
                    </InfiniteSlide>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="fa fa-angle-down"></i>
                </a>
            </p>
        </header>
    )
}

export default Header
