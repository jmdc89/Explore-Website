import { graphql, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import "./layout.scss"
import Navbar from "./Navbar"

const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )

}

// Layout.PropTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Layout