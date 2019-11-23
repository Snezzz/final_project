import React, { Component } from "react";
import "./information.css";

class Information extends Component {
    render() {
        return (
            <div className="company-information">
                <div className="company-about">
                    <h2>About us</h2>
                    We are not just a barbershop, we are a stylish club for real men, in
                    which they appreciate your masculine exclusivity. Each guest for us is
                    not just a client, but a true friend, and with friends you can feel
                    free to be yourself. We follow the highest quality standards and use
                    only expensive high-quality cosmetics in our work so that you would
                    definitely return to us when you leave us.We strive to change not only
                    your appearance, but also your lifestyle, adding a little style and
                    self-confidence to it. We employ only experienced masters with great
                    experience, trained throughout Russia and around the world, who
                    regularly improve their skills.We have only the best cosmetics for
                    face and hair care. You will not find a single speck of dust with us,
                    because we are obsessed with cleanliness - regularly clean working
                    surfaces and process tools.
                </div>
                <div className="company-contacts">
                    <h3>Our contacts:</h3>
                    <ul className="company-phone-numbers">
                        <li>+78129992832</li>
                        <li>+79503939393</li>
                        <li>+79509322383</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Information;
