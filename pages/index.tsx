import AboutSide from "../components/LandingPage/AboutSide"
import HeaderSide from "../components/LandingPage/HeaderSide"
import PortfolioSide from "../components/LandingPage/PortfolioSide"
import PageLayout from "../components/layout/PageLeyout"

const index = () => {
    return (
        <PageLayout
            pageTitle="Mert Sabinov"
        >
            <HeaderSide />
            <AboutSide />
            <PortfolioSide/>
        </PageLayout>
    )
}

export default index