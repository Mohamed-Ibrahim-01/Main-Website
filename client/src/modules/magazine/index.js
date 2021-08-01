import React from 'react'
import Magazine from './magazine'
import { magazine } from './constants'
import Edition1 from './images/edition1.png'

const desc = `The 1st edition of our Magazine sails with us through various fields of biomedical engineering.
If you want to know what is the role of maintenance engineer, or how to be a bioinformatician, or medical imaging and virtual reality market in BME, or the role of AI in the medical field or even have some fun solving our games and puzzles, click and open our Magazine and enjoy.`
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
                    <Magazine.Edition title='1st Edition' image={Edition1} description={desc} pdfData={pdfData}/>
                </Magazine.Shelf>
            </Magazine>
        </div>
    )
}
