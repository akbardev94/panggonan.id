import React from 'react'
import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/image/img/img-hero.png'
import FrameHero from 'assets/image/img/frame-hero.png'
import TravelerIcon from 'assets/image/icons/icon-traveler.svg'
import TreasureIcon from 'assets/image/icons/icon-treasure.svg'
import CitiesIcon from 'assets/image/icons/icon-cities.svg'

import WebFont from 'webfontloader';

import NumberFormat from "utils/formatNumber";
import Button from 'elements/Button'

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    WebFont.load({
        google: {
            families: ['Poppins', 'sans-serif']
        }
    });


    return (
        <Fade bottom delay={200}>
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 520 }}>
                    <h1 className="line-height-1 mb-3">
                        Forget Busy Work, <br />
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                        We provide what you need to enjoy your holiday
                        with family time to make another memorable moments.
                    </p>
                    <Button className=" btn px-5 font-weight-bold" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>
                    <div className="row" style={{ marginTop: 100 }}>
                        <div className="col-auto" style={{ marginRight: 25 }}>
                            <img width="36" height="36" src={TravelerIcon} alt={'{props.data.travelers} Travelers'} />
                            <h6 className="mt-3 font-weight-bold">
                                {NumberFormat(props.data.travelers)}{" "}
                                <span className="text-gray-500">
                                    travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 30 }}>
                            <img width="36" height="36" src={TreasureIcon} alt={'{props.data.treasures} Treasures'} />
                            <h6 className="mt-3 font-weight-bolder">
                                {NumberFormat(props.data.treasures)}{" "}
                                <span className="text-gray-500">
                                    treasures
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={CitiesIcon} alt={'{props.data.cities} Cities'} />
                            <h6 className="mt-3 font-weight-bold">
                                {NumberFormat(props.data.cities)}{" "}
                                <span className="text-gray-500">
                                    cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div style={{ width: 480, height: 350 }}>
                        <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '-50px 0 0 -50px', zIndex: 1 }} />
                        <img src={FrameHero} alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: '-8px 0 0 -25px' }} />
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    )
}
