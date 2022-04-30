import React from "react"
import PropTypes from "prop-types"
import {
    StyledContainer,
    Title,
    Description,
    FeatureList,
    Shelf,
    Feature,
    FeatureImage,
    FeatureTitle,
    FeatureDescription,
    Edition,
    StyledCard,
    StyledCardActionArea,
    StyledCardMedia,
    StyledCardContent,
    CardTitle,
    StyledCardActions,
    CardDescription,
    CardButton
} from "./styles"

export default function Magazine({children}) {
    return <StyledContainer> {children} </StyledContainer>
}

Magazine.propTypes = {
    children: PropTypes.array.isRequired
}

Magazine.Title = function MagazineTitle({children}) {
    return <Title> {children} </Title>
}

Magazine.Title.propTypes = {
    children: PropTypes.string.isRequired
}

Magazine.Description = function MagazineDescription({children}) {
    return <Description> {children} </Description>
}

Magazine.Description.propTypes = {
    children: PropTypes.string.isRequired
}

Magazine.FeatureList = function MagazineFeatureList({children}) {
    return <FeatureList container> {children} </FeatureList>
}

Magazine.FeatureList.propTypes = {
    children: PropTypes.array.isRequired
}

Magazine.Shelf = function MagazineShelf({children}) {
    return <Shelf> {children} </Shelf>
}

Magazine.Shelf.propTypes = {
    children: PropTypes.array.isRequired
}

Magazine.Edition = function MagazineEdition({image, title, description, pdfdata}){
    return(
        <Edition>
            <StyledCard>
                <StyledCardActionArea/>
                <StyledCardMedia image={image}/>
                <StyledCardContent>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </StyledCardContent>
                <StyledCardActions>
                    <CardButton pdfdata={pdfdata} text="Preview"/>
                </StyledCardActions>
            </StyledCard>
        </Edition>
    )
}

Magazine.Edition.propTypes = {
    image: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pdfdata: PropTypes.shape({
        pdfURL: PropTypes.string.isRequired,
        pdfName: PropTypes.string.isRequired,
        pdfId: PropTypes.string.isRequired
    })
}

Magazine.FeatureImage = function MagazineImage({src}) {
    return (
        <StyledContainer>
            <FeatureImage src={src}/>
        </StyledContainer>
    )
}

Magazine.FeatureImage.propTypes = {
    src: PropTypes.node.isRequired
}

Magazine.FeatureTitle = function MagazineTitle({children}) {
    return <FeatureTitle> {children} </FeatureTitle>
}

Magazine.FeatureTitle.propTypes = {
    children: PropTypes.string.isRequired
}

Magazine.FeatureDescription = function MagazineDescription({children}) {
    return <FeatureDescription> {children} </FeatureDescription>
}

Magazine.FeatureDescription.propTypes = {
    children: PropTypes.array.isRequired
}

Magazine.Feature= function MagazineFeature({ children}) {
    return <Feature container item md={4} sm={4} xs={12}> {children} </Feature>
}

Magazine.Feature.propTypes = {
    children: PropTypes.array.isRequired
}
