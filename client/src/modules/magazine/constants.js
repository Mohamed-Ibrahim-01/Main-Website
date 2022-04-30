import {engineering ,research, technology, edition1 } from "./images"
const features = [
    {
        Title: "Biomedical Engineering",
        Image: engineering,
        Description: "A lot of interesting articles about biomedical engineering fields",
    },

    {
        Title: "New Technology",
        Image: technology,
        Description: "Discover the latest technology in biomedical engineering",
    },

    {
        Title: "Latest Researchs & Projects",
        Image: research,
        Description: "Explore the latest researchs and projects in biomedical engineering",
    }
]

const title = "BEAT Magazine"

const description = {
    a: " Follow the latest updates in biomedical engineering with",
    b: "BEAT Magazine."
}

export const magazineHeader = { title,features,description }

export const magazines = [
    {
        title: "1st Edition",
        image: edition1,
        desc: "The 1st edition of our Magazine sails with us through various fields of biomedical engineering.  If you want to know what is the role of maintenance engineer, or how to be a bioinformatician, or medical imaging and virtual reality market in BME, or the role of AI in the medical field or even have some fun solving our games and puzzles, click and open our Magazine and enjoy.",
        pdfdata: {
            pdfURL: "https://dl.dropboxusercontent.com/s/di9wqri9jpu00q2/Magazine%27s%201st%20edition.pdf",
            pdfName: "1st Edition",
            pdfId: "6d07d124-ac85-43b3-a867-36930f502ac6",
        },
    },
]

