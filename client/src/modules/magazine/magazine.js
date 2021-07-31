import React from 'react'
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
} from './styles'

                    //url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
                //fileName: "Bodea Brochure.pdf",
                //id: "6d07d124-ac85-43b3-a867-36930f502ac6",

export default function Magazine({ children, ...restProps }) {
    return <StyledContainer {...restProps}> {children} </StyledContainer>
}

Magazine.Title = function MagazineTitle({ children, ...restProps }) {
    return <Title {...restProps}> {children} </Title>
}

Magazine.Description = function MagazineDescription({ children, ...restProps }) {
    return <Description {...restProps}> {children} </Description>
}

Magazine.FeatureList = function MagazineFeatureList({ children, ...restProps }) {
    return <FeatureList container {...restProps}> {children} </FeatureList>
}

Magazine.Shelf = function MagazineShelf({ children, ...restProps }) {
    return <Shelf {...restProps}> {children} </Shelf>
}

Magazine.Edition = function MagazineEdition({...restProps}){
    const {image, title, description, pdfData} = restProps
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
                    <CardButton pdfData={pdfData} text='Preview'/>
                    <CardButton pdfData={pdfData} text='Annotate'/>
                </StyledCardActions>
            </StyledCard>
        </Edition>
    )
}

Magazine.FeatureImage = function MagazineImage({ ...restProps }) {
    return (
        <StyledContainer>
            <FeatureImage {...restProps} />
        </StyledContainer>
    )
}

Magazine.FeatureTitle = function MagazineTitle({ children, ...restProps }) {
    return <FeatureTitle {...restProps}> {children} </FeatureTitle>
}

Magazine.FeatureDescription = function MagazineDescription({ children, ...restProps }) {
    return <FeatureDescription {...restProps}> {children} </FeatureDescription>
}

Magazine.Feature= function MagazineFeature({ children,item, ...restProps }) {
    return <Feature container item md={4} sm={4} xs={12} {...restProps}> {children} </Feature>
}
