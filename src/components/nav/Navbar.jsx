import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../nav/Navbar.scss'
import { Link } from 'react-scroll';

const Navbar = ({ navOptions, toggle }) => {

    const [toggleNav, setToggleNav] = useState(true);

    useEffect(() => {
        setToggleNav(!toggle);
    }, [toggle])

    return (
        <nav id="nav-wrap" className= {toggleNav ? "nav_wrap nav_wrap--opaque" : "nav_wrap nav_wrap--transparent"}>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                Show navigation
            </a>
            <a className="mobile-btn" href="##" title="Hide navigation">
                Hide navigation
            </a>
            <ul id="nav" className="nav">
                {navOptions.map((navOption, index) => {
                    return (
                        <Link
                            key={index}
                            activeClass="active"
                            to={navOption.id}
                            spy={true}
                            offset={navOption.offset}
                            isDynamic={navOption.isDynamic}>
                            {navOption.description}
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    navOptions: []
}

Navbar.propTypes = {
    navOptions: PropTypes.array
};

export default Navbar
