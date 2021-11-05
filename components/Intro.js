import { Card, CardContent, CardMedia } from "@mui/material"
import { Typography } from "@mui/material"

import GoTopButton from "./GoTopButton"
import Header from "./Header"
/*
  キー名  表示名  解説
  img  NULL  画像
  name  作品名  作品の名前
  author  作者  名前
  overview  概要  おおまかな説明
  explain  説明  詳細な説明
  tech{  技術的なこと  何でもあり
    language  プログラミング言語  c,python,js,...etc
    library  ライブラリ  cv2, jquery ...etc
    framework  フレームワーク  django, Unity, React, Vue, ...etc
    hosting  ホスティング  AWS, Azure, heroku, vercel, 
    env  環境  
    tool  開発ツール  Git, PostMan, ..etc
    editor  テキストエディタ/IDE  VSCode, Vim, ...etc
    other  その他  マジでその他
}
*/
const Intro = (props) => {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "20px",
          paddingInline: "1rem",
        }}
      >
        <Card>
          {props.data.img && ( //{`../../public/img/${props.data.path}.jpg`}
            <CardMedia
              component="img"
              alt={props.data.name}
              height="140"
              image={`/img/${props.data.img}`}
            />
          )}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              作品名
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {props.data.name}
            </Typography>
            {props.data.author && (
              <>
                <Typography variant="body2" color="text.secondary">
                  作者
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.author}
                </Typography>
              </>
            )}
            {props.data.overview && (
              <>
                <Typography variant="body2" color="text.secondary">
                  概要
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.overview}
                </Typography>
              </>
            )}
            {props.data.explain && (
              <>
                <Typography variant="body2" color="text.secondary">
                  説明
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.explain}
                </Typography>
              </>
            )}
            {props.data.tech && (
              <>
                <div
                  style={{
                    width: "100%",
                    height: "1rem",
                    borderTop: "1px dashed #e2421f",
                  }}
                ></div>
                <Typography gutterBottom variant="h6" component="div">
                  技術的なこと
                </Typography>
              </>
            )}
            {props.data.tech.language && (
              <>
                <Typography variant="body2" color="text.secondary">
                  プログラミング言語
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.tech.language}
                </Typography>
              </>
            )}
            {props.data.tech.library && (
              <>
                <Typography variant="body2" color="text.secondary">
                  ライブラリ
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.tech.library}
                </Typography>
              </>
            )}
            {props.data.tech.framework && (
              <>
                <Typography variant="body2" color="text.secondary">
                  フレームワーク
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.tech.framework}
                </Typography>
              </>
            )}
            {props.data.tech.hosting && (
              <>
                <Typography variant="body2" color="text.secondary">
                  ホスティング
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.tech.hosting}
                </Typography>
              </>
            )}
            {props.data.tech.env && (
              <>
                <Typography variant="body2" color="text.secondary">
                  環境
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.tech.env}
                </Typography>
              </>
            )}
            {props.data.tech.tool && (
              <>
                <Typography variant="body2" color="text.secondary">
                  開発ツール
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.tech.tool}
                </Typography>
              </>
            )}
            {props.data.tech.editor && (
              <>
                <Typography variant="body2" color="text.secondary">
                  テキストエディタ/IDE
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.tech.editor}
                </Typography>
              </>
            )}
            {props.data.tech.other && (
              <>
                <Typography variant="body2" color="text.secondary">
                  その他
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.tech.other}
                </Typography>
              </>
            )}
            {props.data.link && (
              <>
                <Typography variant="body2" color="text.secondary">
                  関連リンク
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <a href={props.data.link.path}>{props.data.link.name}</a>
                </Typography>
              </>
            )}
            {props.data.link2 && (
              <>
                <Typography variant="body2" color="text.secondary">
                  関連リンク2
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <a href={props.data.link2.path}>{props.data.link2.name}</a>
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      <div
        style={{
          width: "100%",
          marginBlock: "2vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GoTopButton />
      </div>
      <div
        style={{
          width: "100%",
          height: "10px",
        }}
      ></div>
    </>
  )
}

export default Intro
