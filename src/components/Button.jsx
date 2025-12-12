import React from 'react'

export default function Button({ onClick }) {
    return (
        <button 
        onClick={onClick}
         className="text-white rounded-lg w-full py-3 px-6 bg-gradient-to-r from-[#8297F2] to-[#D1A2D8]">
            Engage Warp Speed !
        </button>
    )
}
