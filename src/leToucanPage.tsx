import { FunctionComponent } from "react";
import "./css/tailwind.css";

const LeToucanPage: FunctionComponent<{}> = () => {
    return (
        <div className="w-full flex flex-col justify-start items-center">
            <span className="font-poppins font-semibold text-6xl text-white mt-40">
                Le Toucan
            </span>
            <span className="font-poppins font-semibold text-6xl text-white mt-5 mb-10">
                Privacy Policy
            </span>
            <div className="w-[50rem] bg-white/5 border-white/20 border-2 rounded-2xl flex flex-col justify-start items-start p-10 mb-10">
                <span className="font-poppins text-white text-xl">
                    Email: mail@loqrin.dev
                </span>
                <span className="font-poppins text-white text-xl">
                    Last Updated: November 2023
                </span>
                <span className="font-poppins text-white text-xl mt-10">
                    loqrin.dev ("we") are commited to protecting and respecting
                    your privacy.
                    <br /> <br />
                    This policy sets out the basis on which any personal data we
                    collect from you, or that you provide to us, will be
                    processed by us. Please read the following carefully to
                    understand out views and practicies regarding your personal
                    data and how we will treat it.
                </span>
                <span className="font-poppins text-white text-xl mt-10">
                    1. INFORMATION WE MAY COLLECT FROM YOU
                    <br /> <br />
                    We may collect and process the following data about you:
                    <br />
                    1.1 Information that you provide by filling in forms on our
                    mobile app "Le Toucan". This includes information provided
                    at the time of registering to use our mobile app.
                    <br />
                    1.2 If you contact us, we may keep a record of that
                    correspondence.
                    <br />
                    1.3 Your approximate and precise location for the mobile
                    app's functionality (providing the ability to create bird
                    observations at your current location).
                </span>
                <span className="font-poppins text-white text-xl mt-10">
                    2. WHERE WE STORE YOUR PERSONAL DATA
                    <br /> <br />
                    2.1 The data we collect from you may be transferred to, and
                    stored at, Google's secure servers utilizing Firebase. By
                    submitting your personal data, you agree to this transfer,
                    storing or processing. We will take all steps reasonably
                    necessary to ensure that your data is treated securely and
                    in accordance with this privacy policy.
                    <br />
                    2.2 Account creation details are encrypted and stored on
                    secure servers. You are responsible for keeping your
                    password confidential.
                    <br />
                    2.3 Unfortunately, the transmission of information via the
                    internet is not completely secure. Although we will do our
                    best to protect your personal data, we cannot guarantee the
                    security of your data transmitted to our mobile app; any
                    transmission is at your own risk. Once we have received your
                    information, we will use strict procedures and security
                    features to try to prevent unauthorised access.
                </span>
                <span className="font-poppins text-white text-xl mt-10">
                    3. USES MADE OF THE INFORMATION
                    <br /> <br />
                    We use information held about you in the following ways:
                    <br />
                    3.1 Email and password for account creation; to store app
                    data specifically to your account such as bird observations
                    created by you.
                    <br />
                    3.2 Your location data is used for the app functionality,
                    specifically for bird observations created by you.
                    <br />
                    3.3 Your data will not be passed on or sold to third
                    parties.
                    <br />
                    3.4 Your data will not be shared with any other users.
                </span>
                <span className="font-poppins text-white text-xl mt-10">
                    4. DISCLOSURE OF YOUR INFORMATION
                    <br /> <br />
                    4.1 If loqrin.dev, Le Toucan, or substantially all of its
                    assets are acquired by a third party, in which case personal
                    data held by it about its users will be one of the
                    transferred assets.
                    <br />
                    4.2 If we are under a duty to disclose or share your
                    personal data in order to comply with any legal obligation,
                    or in order to enforce or apply our agreements, or to
                    protect the rights, property or safety of loqrin.dev. This
                    includes exchanging information with other companies and
                    organisations for the purposes of fraud protection and
                    credit risk reduction.
                </span>
                <span className="font-poppins text-white text-xl mt-10">
                    5. YOUR RIGHTS
                    <br /> <br />
                    5.1 You have the right to ask us to remove your account and
                    personal data at any given time. Please contact at
                    mail@loqrin.dev for a request.
                </span>
                <span className="font-poppins text-white text-xl mt-10">
                    6. CHANGES TO OUR PRIVACY POLICY
                    <br /> <br />
                    6.1 Any changes we may make to our privacy policy in the
                    future will be posted on this page and, where appropriate,
                    notified to you by email.
                </span>
                <span className="font-poppins text-white text-xl mt-10">
                    7. CONTACT
                    <br /> <br />
                    7.1 Questions, comments and requests regarding this privacy
                    policy are welcomed and should be addressed to
                    mail@loqrin.dev .
                </span>
            </div>
        </div>
    );
};

export default LeToucanPage;
