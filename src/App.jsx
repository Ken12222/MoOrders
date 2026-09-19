import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import AiSection from './components/AiSection'
import PipelineSection from './components/PipelineSection'
import FeatureCards from './components/FeatureCards'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <AiSection />
        <PipelineSection />
        <FeatureCards />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
