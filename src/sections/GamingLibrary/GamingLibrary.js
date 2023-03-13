import React from 'react'
import './GamingLibrary.css'
import {  GamingLibraryCard, SectionHeader, SectionWrapper } from '../../combonents/index'

import GamingLibraryData from '../../Data/GamingLibraryData'

 const GamingLibrary = () => {
    const cards = GamingLibraryData.map(lib => {
    return <GamingLibraryCard key={lib.id} image= {lib.image} title={lib.title} category={lib.category} date_added={lib.date_added} hours_played={lib.hours_played} download={lib.download} />
  })
  return (
<>
    <SectionWrapper >
      <SectionHeader>Gaming Library</SectionHeader>
        <div className='gaming-library-cards'>
          {cards}
        </div>
    </SectionWrapper>
</>
  )
}

export default GamingLibrary