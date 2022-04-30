import React from "react"
import Magazine from "./magazine"
import { magazineHeader, magazines } from "./constants"

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
                            <Magazine.Feature key={feature.Title}>
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
                                key={title}
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
