import React from 'react'
import './Rules.css'
import hand from './rules-images/hand.svg'
import pm from './rules-images/pm.svg'
import processor from './rules-images/processor.svg'
import bulb from './rules-images/bulb.svg'

function Rules() {
  return (
    <div className='body'>
      <div className='content'>
        <h1 className='header'>
          Rules
        </h1>
        <div className='block1'>
          <div className='text1'>
            <p className='para1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div >
            <img className='img1' src={hand} alt='logo1' />
          </div>
        </div>
        <div className='block2'>
          <div className='text2'>
            <p className='para2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <img className='img2' src={bulb} alt='logo2' />
          </div>
        </div>
        <div className='block3'>
          <div className='text3'>
            <p className='para1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div >
            <img className='img3' src={processor} alt='logo1' />
          </div>
        </div>
        <div className='block4'>
          <div className='text4'>
            <p className='para4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div >
            <img className='img4' src={pm} alt='logo1' />
          </div>
        </div>
      </div>

    </div>

  )
}

export default Rules