import React, { Component } from "react";
import "./footer.css";
import $ from "jquery";

class Footer extends Component {
    open = type => {
        $("#" + type)
            .css("display", "block")
            .css("opacity", "1");
    };
    close = type => {
        $("#" + type)
            .css("display", "")
            .css("opacity", "");
    };
    render() {
        return (
            <div className="footer">
                <div
                    className="modal fade"
                    id="policy"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="policyLabel">
                                    Privacy policy
                                </h5>
                            </div>
                            <div className="modal-body">
                                1. GENERAL PROVISIONS
                                <br />
                                1.1. This User Agreement (hereinafter - the Agreement) applies
                                to the site
                                <br />
                                1.2. The site is the property of S. Schenikova.
                                <br />
                                1.3. This Agreement governs the relationship between the Site
                                Administration and the User of this Site.
                                <br />
                                1.4. The site is subject to change.
                                <br />
                                1,5. Agreement on Amendments to this Agreement.
                                <br />
                                1.6. The user is personally responsible for checking this
                                Agreement for changes to it.
                                <br />
                                <br />
                                2. DEFINITIONS OF TERMS
                                <br />
                                2.1. Terms listed below
                                <br />
                                2.1.1. topgunbarbershop - a site located on the domain name
                                www.topgunbarbershop.ru, which operates through an Internet
                                resource and related services.
                                <br />
                                2.1.2. A site containing information about the Goods, the
                                Seller, allows you to make a selection, order and (or) purchase
                                the Goods.
                                <br />
                                2.1.3. Site administration - authorized site management staff.
                                <br /> 2.1.4. Site User (hereinafter referred to as the User) is
                                a person who has access to the Site through the Internet and
                                using the site.
                                <br />
                                2.1.5. The content of the site (hereinafter - the Content) - the
                                protected results of intellectual activity, including texts of
                                literary works, their names, forewords, annotations, articles,
                                illustrations, covers, musical works with or without text,
                                graphic, textual, photographic, derivative, compound and other .
                                works, user interfaces, visual interfaces, trademark names,
                                logos, computer programs, databases, design, structure,
                                selection, coordination, appearance, general style and
                                arrangement of this Content included in the Site and other
                                intellectual property all together and / or individually
                                contained on the site.
                                <br />
                                3. SUBJECT OF THE AGREEMENT
                                <br />
                                3.1. The agreement is available to users of the site.
                                <br />
                                3.1.1. The site provides the user with the following types of
                                services (services):
                                <br />- access to search and navigation tools on the site;
                                <br />- Access to product information;
                                <br />- other types of services (services) implemented on the
                                site.
                                <br />
                                3.1.2. Currently, all additional services (services) are
                                available on the site.
                                <br />
                                3.2. Access to the site is provided free of charge.
                                <br />
                                3.3. This Agreement is a public offer. The User is considered to
                                have acceded to this Agreement.
                                <br />
                                3.4. Use of materials and services
                                <br />
                                4. RIGHTS AND OBLIGATIONS OF THE PARTIES
                                <br />
                                4.1. The site administration has the right:
                                <br />
                                4.1.1. Changes to the rules for using the Site. Changes come
                                into force from the moment the new version of the Agreement is
                                published on the Site.
                                <br />
                                4.2. The user has the right to:
                                <br />
                                4.2.1. Use all the services available on the Site, as well as
                                purchase any
                                <br />
                                4.2.2. They use the Site strictly for the purposes and in
                                accordance with the Agreement and not prohibited by the
                                legislation of the Russian Federation.
                                <br />
                                4.3. The user of the Site agrees:
                                <br />
                                4.3.1. Providing additional information.
                                <br />
                                4.3.2. Owners of property and non-property rights of authors and
                                copyright holders when using the Site.
                                <br />
                                4.3.3. Actions of entrepreneurs.
                                <br />
                                4.3.4. Information about individuals and persons of the Russian
                                Federation.
                                <br />
                                4.3.5. Confidential Guarded Federal Information Federation.
                                <br />
                                4.3.6. Do not use the site to disseminate advertising
                                information.
                                <br />
                                4.3.7. Do not use site services with the aim of:
                                <br />
                                4.3.7.1. Downloading content that is illegal violates any rights
                                of third parties; promotes violence, cruelty, hatred and (or)
                                discrimination on racial, national, gender, religious, social
                                grounds; contains inaccurate information and (or) insults
                                addressed to specific individuals, organizations, authorities.
                                <br />
                                4.3.7.2. Binding to committing unlawful acts.
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        this.close("policy");
                                    }}
                                >
                                    I've read
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="terms"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="termsLabel">
                                    Terms of use
                                </h5>
                            </div>
                            <div className="modal-body">
                                <div className="body-text">
                                    This site uses cookies to provide a personal touch and
                                    functionality to the site. You agree to the use of cookies.
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        this.close("terms");
                                    }}
                                >
                                    Agree
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-10 col-xl-10 col-lg-10">
                        <div className="information">
                            <img src="/img/4.png" alt=""/>
                            <label>
                                © 2019, St.Petersburg,
                                <br />
                                +78129992832, +79503939393, +79509322383
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-md-2 col-xl-2 col-lg-2">
                        <ul className="list-group list-group-flush">
                            <li
                                className="list-group-item"
                                onClick={() => {
                                    this.open("policy");
                                }}
                            >
                                Privacy policy
                            </li>
                            <li
                                className="list-group-item"
                                onClick={() => {
                                    this.open("terms");
                                }}
                            >
                                Terms of use
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
