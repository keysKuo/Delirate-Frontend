import GetTouch from "../../components/Intro/GetTouch";
import HeroText from "../../components/Intro/HeroText";
import Members from "../../components/Intro/Members";
import Services from "../../components/Intro/Services";
import SliderBrand from "../../components/Intro/SliderBrand";
import SliderCross from "../../components/Intro/SliderCross";

export default function LandingScreen() {
    return (
        <>
            <HeroText />
            <SliderCross />
            <GetTouch />
            <SliderBrand />
            <Services />
            <Members />
        </>
    )
}