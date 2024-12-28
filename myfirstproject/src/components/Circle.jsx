import React from "react";
    class Circle extends React.Component {
    constructor (props){
    super(props)
}
render (){
    return<>
    <div className="Circle">{this.props.label}</div>
    </>
}
}
export default Circle;