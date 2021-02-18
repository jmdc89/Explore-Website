import { graphql, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import "./layout.scss"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )

}

// Layout.PropTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Layout