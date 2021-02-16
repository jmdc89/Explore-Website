import React, {useState, useEffect} from 'react'
import { FaBars, Fatimes } from "react-icons/fa"
import { IconContex } from "react-icons/lib"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
            <IconContex.Provider value={{color:"#141414"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            EXPLOR
                        </NavLogo>
                    </NavbarContainer>
                </Nav>
            </IconContex.Provider>
        </>
    )
}

export default Navbar