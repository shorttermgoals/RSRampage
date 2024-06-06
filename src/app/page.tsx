'use client'


import Car from "../../components/Car";



export default function Home() {

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
            <img className="valla" src="/images/Valla.png"></img>
            <Car></Car>
          </div>
          
        </div>
        <div className="reset-button">
          <div className="button"></div>
        </div>
      </div>
    </main>
  );
}
