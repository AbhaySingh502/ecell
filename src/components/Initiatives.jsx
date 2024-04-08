import React from 'react'
import Initiatives_map from '../subcomponents/Initiatives_map'
import initiatives_data from '../data/initiatives_data'
function Initiatives() {
    return (
        <div className='mt-5 mb-5'>
            {initiatives_data.map((item, index) => {
                return (
                    <Initiatives_map {...item} />
                )
            })}
        </div>
    )
}

export default Initiatives