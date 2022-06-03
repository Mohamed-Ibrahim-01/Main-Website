import styled from "styled-components"
import background from "./images/cover_.jpg"

export const Cover = styled.div`
  background-image: url(${background});
  @media (max-width: 950px) {
    height: 40vh;
  }
  @media (min-width: 950px) {
    height: 67vh;
  }
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: 60px;
`
