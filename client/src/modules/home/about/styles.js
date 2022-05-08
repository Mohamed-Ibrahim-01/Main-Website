import styled from "styled-components"
import {ContainerItemGrid, ContainerGrid} from "shared"

export const Container = styled(ContainerGrid)``
export const TitleContainer = styled(ContainerItemGrid).attrs({md:12, xs:12})`
   text-align: center;
   align-content: center;
   justify-content: center;
`
export const Title = styled.h1`
   font-size: 3em;
   color: #000b26;
`
