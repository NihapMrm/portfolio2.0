import React, { forwardRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable'
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiArrowUp, FiGlobe, FiLayers, FiLayout, FiMinimize2, FiMinus, FiMoreHorizontal, FiPlus, FiX } from "react-icons/fi";
import Close from './close';
import Minimize from './minimize';
import Restore from './restore';
import { PiFileDoc, PiListStar } from 'react-icons/pi';
import { MdOutlineRefresh } from 'react-icons/md';
import { AiOutlineExclamation, AiOutlineExclamationCircle } from 'react-icons/ai';
import Search from './search';

const FileManager = forwardRef(({ slug, content, onClose, isMaximized, onRestore }, ref) => {
        const nodeRef = React.useRef(null); // 👈 use your own ref for Draggable
        const [position, setPosition] = useState({ x: 0, y: 0 });

        // Whenever maximized is true, reset position
        useEffect(() => {
            if (isMaximized) {
                setPosition({ x: 0, y: 0 });
            }
        }, [isMaximized]);

    return (
        <Draggable
            handle=".edge-drag-handle"
            bounds="parent"
            disabled={isMaximized}
            position={isMaximized ? { x: 0, y: 0 } : null} // 👈 controlled when maximized
            nodeRef={nodeRef}
            onStop={(e, data) => {
                setPosition({ x: data.x, y: data.y });
            }}
        >
            <div
                className={`bg-[#2e2e2e] ${isMaximized ? 'w-full h-[calc(100vh-3rem)]' : 'w-[600px] h-[500px]'} relative`}
                style={{ transition: 'width 0.3s, height 0.3s' }}
                ref={nodeRef}
            >
                <div className="absolute top-0 w-full h-10 flex justify-between edge-drag-handle">
                    <div className="items flex items-center">
                       
                        <div className='flex items-center justify-between pl-5 pr-5 bg-[#3b3b3b] w-64 h-full rounded-tl-xl rounded-tr-xl after:content-[""] after:w-3 after:h-3 after:bg-[#3b3b3b] after:bottom-[-2px] after:left-[-0.5rem] after:absolute relative after:rounded-full before:content-[""] before:w-3 before:h-3 before:bg-[#3b3b3b] before:bottom-[-2px] before:right-[-0.5rem] before:absolute  before:rounded-full'>
                            <div className='flex items-center justify-center gap-2  '>
                                <img src='/src/assets/icons/folder.svg' className='bg-transparent flex w-6 h-6 group active:scale-100 p-1' />
                                Nihap Mrm
                            </div>
                            <FiX />
                        </div>
                        <div className='after:content-[""] after:w-4 after:h-4 after:bg-[#2e2e2e] after:bottom-0 after:left-0 after:absolute relative after:rounded-full z-50'>
                            <FiPlus className="bg-transparent flex w-10 h-9 group active:scale-100 p-[0.6rem] hover:bg-[#ffffff20] duration-300 rounded ml-4" />
                        </div>
                    </div>
                    <div className="actions w-1/4 flex justify-end items-center">
                        <Minimize onClose={onClose} />
                        <Restore onRestore={onRestore} />
                        <Close onClose={onClose} />
                    </div>
                </div>
                <div className="bg-[#3b3b3b] absolute top-[2.5rem] w-full h-9 flex gap-4 pl-2 pr-2">
                    <div className="flex items-center h-full gap-2 w-40 text-xl justify-between">
                        <FiArrowLeft className='bg-transparent flex w-10 h-full group active:scale-100 p-1 hover:bg-[#ffffff20] duration-300 rounded' />
                        <FiArrowRight className='bg-transparent flex w-10 h-full group active:scale-100 p-1 hover:bg-[#ffffff20] duration-300 rounded' />
                        <FiArrowUp className='bg-transparent flex w-10 h-full group active:scale-100 p-1 hover:bg-[#ffffff20] duration-300 rounded' />
                        <MdOutlineRefresh className='bg-transparent flex w-10 h-full group active:scale-100 p-1 hover:bg-[#ffffff20] duration-300 rounded' />
                    </div>

                    <div className="bg-[#3b3b3b] w-full h-full flex items-center justify-start  gap-2 hover:bg-[#3b3b3b] transition-all">
                        <AiOutlineExclamationCircle className='bg-[#3b3b3b] bg-opacity-50 h-full rounded-full w-7 p-1 hover:bg-opacity-100' />
                        <p className='text-base pb-[2px]'>This Pc &gt; Disc (C:) &gt; {slug}</p>
                    </div>
                    <div className="w-96">
                        <input
                            type="text"
                            placeholder="Type here to search"
                            className="bg-[#3b3b3b] w-full h-full "
                        />                    
                    </div>

                </div>

                <div className="absolute top-[4.75rem] h-[calc(100vh-7.75rem)] w-full overflow-y-hiden overflow-x-hidden">
                {content}
                </div>

            </div>
        </Draggable>
    )
});

export default FileManager;