import { Outlet, Link } from "react-router-dom";

import Wrapper from "../Wrapper/Wrapper";

import logoImg from "../../images/logo.png";

export default function Layout() {
    return (
        <Wrapper>
            <Link to="/">
                <img src={logoImg} alt="" />
            </Link>
           <Outlet />
        </Wrapper>
    )
}