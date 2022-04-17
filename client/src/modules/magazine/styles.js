import styled from "styled-components"
import {Container, Grid} from "@material-ui/core"
import { ItemGrid, ContainerGrid } from "shared"
import { PDFPreviewButton } from "./components/pdf"
import {
    Card ,
    CardActionArea ,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core" 

export const Edition = styled(ItemGrid).attrs({})`
  &&{
    padding: 10px;
  }
`
export const StyledCard = styled(Card).attrs({})`
  max-width: 350px;
`
export const StyledCardActionArea = styled(CardActionArea).attrs({})``
export const StyledCardMedia = styled(CardMedia).attrs({})`
  &&{
    height: 170px;
    background-size: contain;
    background-position: center;
  }
`
export const StyledCardContent = styled(CardContent).attrs({})``
export const StyledCardActions = styled(CardActions).attrs({})``
export const CardTitle = styled(Typography).attrs({
    gutterBottom:true, variant:"h5", component:"h2"
})`
  &&{
    text-align: left;
  }
`
export const CardDescription = styled(Typography).attrs({
    variant:"body2", color:"textSecondary",component:"p"
})`
  &&{
    text-align: left;
  }
`
export const CardButton= styled(PDFPreviewButton).attrs({size:"small"})`
  && {
    color: #2276e7;
    font-weight: 400;
  }
`

export const StyledContainer = styled(Container)`
  &&{
    text-align: center;
  }
`

export const Title = styled.h1`
  margin-top: 15vh;
  text-align: center;
  font-size: 3em;
  color: #000b26;
`
export const Description = styled.p`
  text-align: center;
  color: #000E33;
  font-size: 1em;
  font-weight: 500;
  & b{
    color: #DB2A32;
  }
`
export const FeatureList = styled(Grid)`
  &&&{
    margin-top : 10vh;
  }
`
export const Feature = styled(Grid)`
  justify-content: center;
`
export const Shelf = styled(ContainerGrid)`
  justify-content:center;
  padding: 10vh 10vw;
  @media(max-width: 948px){
    padding : 3vh 3vw;
  }
`
export const FeatureImage = styled.img`
  width: 100px;
  height: auto;
`
export const FeatureTitle = styled.h3`
  width : 100%;
  color: #000b26;
  text-align: center;
`
export const FeatureDescription = styled.p`
  text-align: center;
  color: #000b26;
`
