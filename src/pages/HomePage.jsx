import AboutSection from "../components/Homepage/About/aboutSection";
import Carousel from "../components/Homepage/Carousel/Carousel";
import ContactSection from "../components/Homepage/Contact/contactSection";
import HeroSection from "../components/Homepage/Hero/heroSection";
import ProjectSection from "../components/Homepage/Projects/projectSection";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProjectSection />
			<Carousel />
			<ContactSection animation={true} />
		</>
	);
}


