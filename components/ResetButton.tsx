import { useEffect } from "react";

interface ButtonProps {
    setClicked: (value: boolean) => void;
    setWingState: (value: boolean) => void;
    setGlassState: (value: boolean) => void;
    setRdState: (value: boolean) => void;
    setRtState: (value: boolean) => void;
    setPdState: (value: boolean) => void;
    setPtState: (value: boolean) => void;
    setSkirtState: (value: boolean) => void;
    setResetButtonState: (value: boolean) => void;
}

export default function ResetButton(props: ButtonProps){

    const HandleResetButton = () => {
            props.setClicked(false);
            props.setWingState(false);
            props.setGlassState(false);
            props.setRdState(false);
            props.setRtState(false);
            props.setPdState(false);
            props.setPtState(false);
            props.setSkirtState(false);
            props.setResetButtonState(true);

            /*const bulletHoles = document.querySelectorAll('.bullet-holes');
            bulletHoles.forEach(bulletHole => bulletHole.remove());*/

            /*const bulletHoles = document.getElementById('bullet-holes');
            if (bulletHoles) {
                bulletHoles.innerHTML = '';
            }*/            
    };

    return(
    <div  onClick={HandleResetButton} >
        <svg className="button" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.86 112.46">
            <path d="M211.86,111.91H0V36.84C0,16.49,16.49,0,36.84,0h138.18c20.35,0,36.84,16.49,36.84,36.84v75.08Z" fill="#333" stroke-width="0"/>
            <text transform="translate(5.57 103.79)" fill="#dfdfdf" font-family="Futura-75Bold, Futura" font-size="34.68" font-weight="700">
                <tspan x="0" y="0">R</tspan>
                <tspan x="22.81" y="0" >E</tspan>
                <tspan x="40.82" y="0" >P</tspan>
                <tspan x="61.31" y="0" >AIR </tspan>
                <tspan x="131.37" y="0" >C</tspan>
                <tspan x="153.32" y="0" >AR</tspan>
            </text>
            <path d="M35.32,59.95c-9.24,0-17.21-5.45-20.85-13.3h23.83l5.57-9.64-5.57-9.64H14.44c3.63-7.89,11.61-13.36,20.88-13.36,8.75,0,16.35,4.88,20.23,12.07h100.55c3.88-7.19,11.48-12.07,20.23-12.07,9.44,0,17.54,5.69,21.08,13.82h-22.4l-5.56,9.63,5.56,9.66h21.95c-3.73,7.61-11.57,12.84-20.63,12.84s-16.34-4.88-20.23-12.07H55.55c-3.89,7.19-11.5,12.07-20.23,12.07Z" fill="#dfdfdf" stroke-width="0"/>
        </svg>
    </div>
    );
}