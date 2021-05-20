import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles.module.css'
import ImageWithCover from '../components/image-with-cover'

const Background = ({ imgPlaceHolderStr }) => (
  <div>
    <ViewSource pathname="pages/background.js" />
    <div className={bgWrap}>
      <ImageWithCover
        coverImgStr={imgPlaceHolderStr}
        imgSrc="/mountains.jpg"
        altName="mountains"
      />
    </div>
    <p className={bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
)

export async function getStaticProps() {

  const sharp = require('sharp');
  const buffer = await sharp('./public/mountains.jpg')
    .resize({width:100}).jpeg({quality: 60}).toBuffer()
  const base64Str = buffer.toString('base64')
  const imgData = `data:image/jpg;base64,${base64Str}`
  
  return {
    props: {
      imgPlaceHolderStr: imgData,
    }
  }
}

export default Background
