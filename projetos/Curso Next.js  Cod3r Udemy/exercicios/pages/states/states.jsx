import { useState } from "react"

export default function states() {
    const [xAxis, setXaxis] = useState(0);
    const [yAxis, setYaxis] = useState(0);

    function handleChangeAxis(event) {
        setXaxis(event.pageX);
        setYaxis(event.pageY);
    }

    return (
        <div className="default" onMouseMove={e => handleChangeAxis(e)} >
            <h1>Eixo X: {xAxis}</h1>
            <h1>Eixo Y: {yAxis}</h1>
        </div>
    )
}