import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';
import IconText from 'parts/IconText';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <Fade>
                <div className="row">
                    <div className="col-auto" style={{ width:350 }}>
                            <IconText />
                            <p className="brand-tagline">
                            We respect your beauty holiday instantly and memorable
                            </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2 font-weight-bold">For Beginner</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Book a Room</Button>
                                </li>
                            <li className="list-group-item">
                                <Button type="link" href="/payment">Payment</Button>
                                </li>
                        </ul>
                    </div>
                <div className="col-auto mr-5">
                        <h6 className="mt-2 font-weight-bold">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/About">About</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/policy">Privacy Policy</Button>
                                </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">Term & Conditions</Button>
                                </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2 font-weight-bold">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@panggonan.id">support@panggonan.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+62341398882">0341-398-882</Button>
                                </li>
                            <li className="list-group-item">
                                <span>Panggonan.id, in Banyuwangi</span>
                                </li>
                        </ul>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col text-center copyrights">
                        Copyright 2019 - 2020 &#9830; All right reserved &#9830; Panggonan.id
                        </div>
                    </div>
                    </Fade>
            </div>
        </footer>
    )
}
