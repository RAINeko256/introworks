

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
const GoTopButton = () => {
  return (
      <button className="go_top_button"
      onClick={()=>returnTop()}
      style={{
        backgroundColor: "coral",
        color: "white",
        width: "100px",
        textAlign: "center",
        borderRadius: "32px",
        border:"none",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        transition: ".1s",

      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        >
          <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
        </svg>
        <div>ページの上に戻る</div>
        <style jsx>{`
          .go_top_button:hover{
            
            
          }
        `}</style>
      </button>
  )
}
export default GoTopButton
