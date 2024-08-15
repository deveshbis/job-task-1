import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
                <aside>

                    <h2 className="text-3xl font-bold">
                        <span className="text-orange-600">Flower </span>Shop
                    </h2>
                    <p className="mt-4 max-w-xs">
                        Flower Shop offers exquisite blooms for every occasion, from elegant bouquets to vibrant arrangements. Our flowers are meticulously curated to bring beauty and joy to your life.
                    </p>

                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;