import React, {useState, useRef, useEffect} from 'react'
import './Glide.css'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import PropTypes from 'prop-types'
import {Image} from 'semantic-ui-react'

const initialOptions = {
  startAt: 0,
  perView: 4,
  type: 'carousel'
}

const GlideJS = ({images}) => {
  const refs = useRef('#slider')
  const [slider] = useState(new Glide(refs.current, initialOptions))

  useEffect(() => {
    slider.mount()
    return () => slider.destroy()
  }, [])

  return (
    <div id="slider" ref={refs} className="glide">
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {images.map(slide => <Image
            className="glide__slide"
            size='small'
            src={slide.url}
            alt=""
            key={slide.id}
            wrapped/>)}
        </div>
      </div>
    </div>
  )

}

GlideJS.propTypes = {
  images: PropTypes.array.isRequired
}

export default GlideJS