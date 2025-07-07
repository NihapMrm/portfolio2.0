import React from 'react'
import Edge from '../edge';

const SkillsModel =() =>{
    const content = (
        <div>
        <h2 className="text-blue-600 font-bold text-xl">Hello Nihap 👋</h2>
        <p className="text-gray-700 mt-2">This is rendered using <span className="font-semibold">JSX</span>.</p>
      </div>
    )
    return(
        <>
        
        <Edge slug={"skills"} content={content}/>
        </>
    )
}

export default SkillsModel;