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
                    <p>{magazineHeader.description.a}</p>
                    <b>{magazineHeader.description.b}</b>
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
                        const {title, image, desc, pdfdata} = magazine
                        return (
                            <Magazine.Edition
                                key={title}
                                title={title}
                                image={image}
                                description={desc}
                                pdfdata={pdfdata}
                            />
                        )
                    })}
                </Magazine.Shelf>
            </Magazine>
        </div>
    )
}
