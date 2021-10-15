import React, { useEffect, useState } from 'react'
import preLoader from '../../assets/preloader.gif'

const LazyBackground = props => {
    const [source, setSource] = useState(preLoader)

    useEffect(() => {
        const img = new Image()
        img.src = props.src
        img.onload = () => {
            setTimeout(() => {
                setSource(props.src)
            }, 1000)
        }
    }, [props.src])

    return (
        <div className={`${props.className}`} style={{backgroundImage: `url(${source})`}}>
            {props.children}
        </div>
    )
}

export default LazyBackground
