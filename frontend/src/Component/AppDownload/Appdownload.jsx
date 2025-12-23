import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/Assets'
export default function Appdownload() {
  return (
    <div className='container text-center' id='app-download'>
        <div className='app-dwnl'>
            <h4>For Better Experience Download <br/> Our App</h4>
            <div className='app-download-platform'>
                <img src={assets.play_store} alt=''/>
                <img src={assets.app_store} alt=''/>
            </div>
        </div>

    </div>
  )
}
