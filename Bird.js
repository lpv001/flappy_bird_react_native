import React, { Component } from "react";
import { View } from "react-native";

export default class Bird extends Component {
    render(){
        const width = this.props.size[0]
        const height = this.props.size[1]
        const x = this.props.body.position.x - width / 2
        const y = this.props.body.position.y - height / 2
        const color = this.props.color
        
        return (
            <View style={{position: 'absolute', top: y, left: x, width: width, height: height, backgroundColor: color}} />
        )
    }
}