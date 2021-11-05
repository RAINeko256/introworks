import Header from "./components/Header"
import MediaCard from "./components/MediaCard"
import DataIntroWorks from "../works/IntroWorks.json"
import Test from "../works/test.json"

const Index = () => {
  return (
    <>
      <Header />
      <div
        style={{
          height: "calc(100vh - 80px)",
          display: "flex",
          flexWrap:"wrap",
          padding: "10px",
          gap:"10px",
        }}
      >
        <div>
          <MediaCard data={DataIntroWorks} />
        </div>
        <div>
          <MediaCard data={Test} />
        </div>
      </div>
    </>
  )
}
export default Index
