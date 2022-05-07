import styled from "styled-components"

const LOGO_HEIGHT = 72

export const Container = styled.div`
    padding: 5vh 3vw;
`
export const Logo = styled.img`
    height: ${(props) => LOGO_HEIGHT * props.scale}px;
    width: ${(props) => (props.width * LOGO_HEIGHT * props.scale)}px;
    @media(max-width: 650px) {
        display:block;
        margin-bottom:20px;
        height: ${LOGO_HEIGHT/1.3}px;
        width: ${(props) => (props.width * LOGO_HEIGHT/1.3)}px;
    }
`
export const Title = styled.p`
   
   font-size: 30px;
    color: #000c26;
    margin-bottom: 40px;
    font-weight: bold;
    margin-top: 0;
    text-align: center;
`
