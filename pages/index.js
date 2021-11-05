import Header from "../components/Header"
import MediaCard from "../components/MediaCard"
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
          justifyContent:"center",
          paddingTop:"5vw",
          gap:"2vw",
        }}
      >
          <MediaCard data={DataIntroWorks} />
          <MediaCard data={Test} />
      </div>
    </>
  )
}
export default Index
