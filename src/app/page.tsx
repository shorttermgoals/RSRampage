'use client'


import Car from "../../components/Car";
import ResetButton from "../../components/ResetButton";
import Fence from "../../components/Fence";
import { useState } from "react";



export default function Home() {

  const [clicked, setClicked] = useState(false);
  const [wingState, setWingState] = useState(false);
  const [glassState, setGlassState] = useState(false);
  const [rdState, setRdState] = useState(false);
  const [rtState, setRtState] = useState(false);
  const [pdState, setPdState] = useState(false);
  const [ptState, setPtState] = useState(false);
  const [skirtState, setSkirtState] = useState(false);
  const [resetButtonState, setResetButtonState] = useState(false);

  return (
    <main>
      <div className="container">
        <div className="title">
          <a>Vandalize me!</a>
        </div>
        <div className="under-title">
          <div className="url">
            <span className="url-text">made by <a className="url-text" href="">shorttermgoalz</a></span>
          </div>
        </div>
          <div className="image-background">
          <div className="image">
            <Fence/>
            <Car 
            clicked={clicked} setClicked={setClicked}
            wingState={wingState} setWingState={setWingState}
            glassState={glassState} setGlassState={setGlassState}
            rdState={rdState} setRdState={setRdState}
            rtState={rtState} setRtState={setRtState}
            pdState={pdState} setPdState={setPdState}
            ptState={ptState} setPtState={setPtState}
            skirtState={skirtState} setSkirtState={setSkirtState}
            resetButtonState={resetButtonState} setResetButtonState={setResetButtonState}
            />
          </div>
          
        </div>
        {/**
         * <div className="reset-button">
          <div className="button">
            <ResetButton
            setClicked={setClicked}
            setWingState={setWingState}
            setGlassState={setGlassState}
            setRdState={setRdState}
            setRtState={setRtState}
            setPdState={setPdState}
            setPtState={setPtState}
            setSkirtState={setSkirtState}
            setResetButtonState={setResetButtonState}
            />
          </div>
        </div>
         * 
         */}
        
      </div>
    </main>
  );
}
