import Son from "./Son";

export default function Father() {
    
    function talking(sonResponse) {
        console.log("E ai filhão!");

        console.log(sonResponse);
    }
    
    return (
        <div>
            <Son talk={talking} />
        </div>
    )
}