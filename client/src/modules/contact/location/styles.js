import styled from "styled-components"
import {ContainerItemGrid} from "shared"

export const LocationGrid = styled(ContainerItemGrid).attrs({ xs:12, md:6})`
  &&{
    padding: 20px;
    width: 100%;
    @media (max-width: 948px){ height: 70vh; }
  }
`
