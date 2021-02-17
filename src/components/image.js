import React from 'react';
import {useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.scss"

const Image = () => {
    const data = useStaticQuery(graphql`
        {
            allContentfulImage {
            nodes {
                id
                slug
                title
                category
                image {
                fluid {
                    ...GatsbyContentfulFluid
                }
                }
            }
            }
        } 
    `)

    console.log(data.allContentfulImage.nodes);

    return (
        <div className="image-container">
            <h1>View our Destinations</h1>
            <div className="image-grid">
                {data.allContentfulImage.nodes.map((image, key) => (
                    <Img 
                    key={key}
                    className="image-item"
                    fluid={image.image.fluid}
                    alt={image.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Image