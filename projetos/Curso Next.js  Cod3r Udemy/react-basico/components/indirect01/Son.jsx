export default function Son(props) {
    
    function talkWithFather() {
        console.log("Vou falar com meu pai.🙏");

        props.talk("E ai pai suave?😎");
    }
    
    return (
        <div>
            <button onClick={talkWithFather}>Falar com Father</button>
        </div>
    )
}