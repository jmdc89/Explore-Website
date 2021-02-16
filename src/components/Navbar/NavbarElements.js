import styled from 'styled-components'

export const Nav = styled.nav`
    background: ${({active}) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100% )"};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        background: ${({click}) => (click ? "#fff" : "transparent")};
        transition: 0.8s all ease;
    }
`