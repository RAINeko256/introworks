import Link from "next/link"
import { useRouter } from "next/router"
const test = (router) => {
  console.log(router.pathname)
}
const Header = () => {
  const router = useRouter()
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        color: "white",
        paddingLeft: "1rem",
        position: "relative",
        background:
          "linear-gradient(90deg, #ff7f50, #fb7749, #f76f42, #f3673b, #ef5e34, #eb552d, #e64c26, #e2421f)",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        userSelect: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href={{ pathname: "/" }}>
          <h1>IntroWorks</h1>
        </Link>
        <Link href={{ pathname: "/" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            {/*トップページのときは表示しない */}
            {router.pathname != "/" && (
              <>
                <button
                  className="return_top"
                  style={{
                    height: "30px",
                    margin: "0 auto",
                    cursor:"pointer",
                  }}
                >
                  Topページに戻る
                </button>
                <style jsx>{`
                  .return_top {
                    background-color: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(12.5px);
                    -webkit-backdrop-filter: blur(12.5px);
                    border: 1.06667px solid rgba(255, 255, 255, 0.18);
                    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
                    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px
                      0px;
                    border-radius: 16px;
                    -webkit-border-radius: 16px;
                    color: rgba(255, 255, 255, 0.8);
                  }
                `}</style>
              </>
            )}
          </div>
        </Link>
      </div>
      <h3>こうよう祭 コンピュータ部 作品紹介</h3>
    </div>
  )
}

export default Header
