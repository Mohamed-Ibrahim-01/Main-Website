import React from 'react'
import Magazine from './magazine'
import { magazine } from './constants'
import Lazard from './images/lazard.jpg'

const desc = `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica`
const pdfData = {pdfURL:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf", pdfName:"1st Edition", pdfId: "6d07d124-ac85-43b3-a867-36930f502ac6"}
export default function MagazineContainer() {
    return (
        <div>
            <div id="render-container"></div>
            <Magazine >
                <Magazine.Title> BEAT Magazine </Magazine.Title>
                <Magazine.Description>
                    {magazine.description.a} <b>{magazine.description.b}</b>
                </Magazine.Description>
                <Magazine.FeatureList>
                    {magazine.features.map((feature) => {
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
                    <Magazine.Edition title='Lazard' image={Lazard} description={desc} pdfData={pdfData}/>
                    <Magazine.Edition title='Lazard' image={Lazard} description={desc} pdfData={pdfData}/>
                </Magazine.Shelf>
            </Magazine>
        </div>
    )
}
