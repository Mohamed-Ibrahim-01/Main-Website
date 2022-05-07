import React, { Component } from "react";
import ViewSDKClient from "./ViewSDKClient";
import {Button} from '@material-ui/core'

class Lightbox extends Component {
    constructor(props) {
        super(props);
        this.viewSDKClient = new ViewSDKClient();
    }

    previewFile = () => {
        console.log(this.props.pdfData);
        this.viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            this.viewSDKClient.previewFile("render-container", {
                /* Pass the embed mode option here */
                embedMode: "LIGHT_BOX"
            },this.props.pdfData);
        });
    }

    render() {
        return (
                <Button {...this.props} onClick={ this.previewFile }> {this.props.text} </Button>
        );
    }
}

export default Lightbox;
