import React from "react";
import * as H from './Styles'
import logo from '../../img/logo.png'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <H.Content>
                <H.imgContent>
                    <H.Img src={logo} alt="" />
                </H.imgContent>

                <H.nav>
                    <H.ul>
                        <Link to={'/'}><H.li>Home</H.li></Link>
                        <Link to={'/services'}><H.li>Services</H.li></Link>
                        <Link to={'/aboutus'}><H.li>About us</H.li></Link>
                        <Link to={'/contact'}><H.li>Contact us</H.li></Link>
                    </H.ul>
                </H.nav>
            </H.Content>
        </>
    )
}