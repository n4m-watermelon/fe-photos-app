import React from 'react'

export default function Post(props) {
    const {imgLink} = props
    return (
        <div  style={{background: '#242526'}} className="rounded px-4 py-4 mb-4">
              <div className="w-full h-4/5">
                  <img src={imgLink}  className="w-full h-full object-contain"/>
              </div>
        </div>
    )
}
