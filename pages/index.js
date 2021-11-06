import Header from "../components/Header"
import MediaCard from "../components/MediaCard"
import DataIntroWorks from "../works/IntroWorks.json"
import DataTest from "../works/test.json"
import DataGACalc from "../works/GACalc.json"
import DataVisualizer from "../works/visualizer.json"
import DataRandomRun from "../works/RandomRun.json"

const Index = () => {
  return (
    <>
      <Header />
      <div
        style={{
          height: "calc(100vh - 80px)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "5vw",
          gap: "2vw",
        }}
      >
        <MediaCard data={DataIntroWorks} />
        <MediaCard data={DataVisualizer} />
        <MediaCard data={DataRandomRun} />
        <MediaCard data={DataGACalc} />
        <MediaCard data={DataTest} />
      </div>
    </>
  )
}
export default Index
