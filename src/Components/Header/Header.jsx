import React from "react";
import * as H from './Styles'
import logo from '../../img/logo.png'

export default function Header() {
    return (
        <>
            <H.Content>
                <H.imgContent>
                    <H.Img src={logo} alt="" />
                </H.imgContent>

                <H.nav>
                    <H.ul>
                        <H.li>Home</H.li>
                        <H.li>Services</H.li>
                        <H.li>About us</H.li>
                        <H.li>Contact us</H.li>
                    </H.ul>
                </H.nav>
            </H.Content>
        </>
    )
}