import React from 'react'
import Edge from '../edge';

const SkillsModel =() =>{
    const content = `
    <h1>hello</h1>
    
    `
    return(
        <>
        <h1 className='text-center text-blue-600'>Hello</h1>
        <Edge slug={"skills"} content={content}/>
        </>
    )
}

export default SkillsModel;