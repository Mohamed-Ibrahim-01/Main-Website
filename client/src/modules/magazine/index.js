import React from "react"
import Magazine from "./magazine"
import { magazineHeader, magazines } from "./constants"


//https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf
export default function MagazineContainer() {
    return (
        <div>
            <div id="render-container"></div>
            <Magazine >
                <Magazine.Title> BEAT Magazine </Magazine.Title>
                <Magazine.Description>
                    {magazineHeader.description.a} <b>{magazineHeader.description.b}</b>
                </Magazine.Description>
                <Magazine.FeatureList>
                    {magazineHeader.features.map((feature) => {
                        return (
                            <Magazine.Feature>
                                <Magazine.FeatureImage src={feature.Image} />
                                <Magazine.FeatureTitle>
                                    {feature.Title}
                                </Magazine.FeatureTitle>
                                <Magazine.FeatureDescription>
                                    {feature.Description}
                                </Magazine.FeatureDescription>
                            </Magazine.Feature>
                        )
                    })}
                </Magazine.FeatureList>
                <Magazine.Shelf >
                    {magazines.map((magazine) => {
                        const {title, image, desc, pdfData} = magazine
                        return (
                            <Magazine.Edition
                                title={title}
                                image={image}
                                description={desc}
                                pdfData={pdfData}
                            />
                        )
                    })}
                </Magazine.Shelf>
            </Magazine>
        </div>
    )
}
