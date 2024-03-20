import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ConditionPage from "../../pages/Condition/ConditionPage";
import PrivacyPage from "../../pages/Privacy/PrivacyPage";
const HomePage=()=>{
    return(<>
    <div>
    <Header />
    homepage
    </div>
    <div>

    <ConditionPage/>
    <PrivacyPage/>
    </div>

    <Footer/>
    </>)
}
export default HomePage;