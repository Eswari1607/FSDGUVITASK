import propTypes from "prop-types";
export default function Square(props) {
    return
    <div  ClassName = "Square">
        {props.label}
    </div>
    
}
Square.propTypes = {
    label: propTypes.number
};