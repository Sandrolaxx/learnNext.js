export default function If(props) {
    if (props.condition === true) {
        return props.children;
    } else {
        return false;
    }
}