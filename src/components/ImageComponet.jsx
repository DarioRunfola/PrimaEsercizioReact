import { Component } from "react";

class ImageComponent extends Component {
    render(){
        return (
        <img src={this.props.imge} width="500" height="600" alt={this.props.alter}></img>        
        )
    }
}

export default ImageComponent