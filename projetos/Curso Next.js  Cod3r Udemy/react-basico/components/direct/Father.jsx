import Son from "./Son";

export default function Father(props) {
    return (
        <div>
            <Son name="Sandrolax" family={props.family} />
            <Son name="João" family={props.family} />
            <Son {...props} name="Nathália" />
        </div>
    )
}