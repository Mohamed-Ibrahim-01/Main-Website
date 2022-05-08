import React, { Component } from "react"
import PropTypes from "prop-types"
import ViewSDKClient from "./ViewSDKClient"
import {Button} from "@material-ui/core"

class Lightbox extends Component {
    constructor(props) {
        super(props)
        this.viewSDKClient = new ViewSDKClient()
        this.previewFile = ()=>{
            this.previewFileAsync()
        }
    }

    previewFileAsync() {
        this.viewSDKClient.ready().then(() => {
            this.viewSDKClient.previewFile(
                "render-container", { embedMode: "LIGHT_BOX" }, this.props.pdfdata
            )
        })
    }

    render() {
        return (
            <Button {...this.props} onClick={ this.previewFile }> {this.props.text} </Button>
        )
    }
}

Lightbox.propTypes = {
    text: PropTypes.string.isRequired,
    pdfdata: PropTypes.shape({
        pdfURL: PropTypes.string.isRequired,
        pdfName: PropTypes.string.isRequired,
        pdfId: PropTypes.string.isRequired
    })
}

export default Lightbox
