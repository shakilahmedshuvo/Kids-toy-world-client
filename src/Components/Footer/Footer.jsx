import { FaHome, FaHeadset, FaRegClock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <div className=" bg-sky-500 font-bold text-white">
            <div className="max-w-6xl mx-auto">
                <div className="items-center grid-flow-col">
                    <div className="flex items-center pt-10 px-10">
                        <img
                            className="w-[5%] rounded-xl mr-3"
                            src="https://img.freepik.com/free-vector/kids-zone-fun-play-banner-design_1017-33753.jpg?w=826&t=st=1684432416~exp=1684433016~hmac=a1b3560be2db226556845656f23fe53a4d397dac4f010a8deb4f96e28f304643" alt="" />
                        <p className="text-2xl">
                            Kids Toy World
                        </p>
                    </div>
                </div>
                <footer className="footer px-10">
                    <div>
                        <div>
                            <p className="mt-2">
                                This will be the only place where you can meet the person
                                <br />
                                who wrote the rules for this company. That's right, the
                                <br />
                                creator of the best toy company on planet earth.
                                <br />
                                <small>
                                    Thank You. . .
                                </small>
                            </p>
                        </div>
                        <div className="mt-5">
                            <h2 className="footer-title">
                                Follow Our Social Links
                            </h2>
                            <div className="grid grid-flow-col gap-1 mt-2">
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">
                            Support
                        </span>
                        <a className="link link-hover">
                            Contact
                        </a>
                        <a className="link link-hover">
                            About us
                        </a>
                        <a className="link link-hover">
                            Terms of use
                        </a>
                        <a className="link link-hover">
                            Privacy policy
                        </a>
                        <a className="link link-hover">
                            News & FAQ
                        </a>
                        <a className="link link-hover">
                            Legal
                        </a>
                    </div>
                    <div>
                        <h2 className="footer-title">
                            Content Information
                        </h2>
                        <a className="link link-hover flex mt-2">
                            <FaHome className="text-2xl"></FaHome>
                            <p className="items-center ms-1">
                                88 MANOR STATION ST.DHAKA BD
                            </p>
                        </a>
                        <a className="link link-hover flex mt-2">
                            <FaHeadset className="text-2xl"></FaHeadset>
                            <p className="items-center ms-1">
                                PHONE: +0123456789
                            </p>
                        </a>
                        <a className="link link-hover flex mt-2">
                            <FiMail className="text-2xl"></FiMail>
                            <p className="items-center ms-1">
                                Email: KIDS.TOY.WORLD@GMAIL.COM
                            </p>
                        </a>
                        <a className="link link-hover flex mt-2">
                            <FaRegClock className="text-2xl"></FaRegClock>
                            <p className="items-center ms-1">
                                9.00AM - 6.00PM
                            </p>
                        </a>
                    </div>
                </footer>
                <footer className="footer px-10 py-4">
                    <small className="text-zinc-700">
                        @ ALL RIGHTS RESERVED BY KIDS TOYS WORLD SAS.
                        <br />
                        © 2023 Trademarks and brands are the property of their respective owners.
                    </small>
                </footer>
            </div>
        </div>
    );
};

export default Footer;