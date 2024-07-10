import React from 'react'

const Option = (props) => {
  return (
    <div>
       <div className="grid bg-black text-white gird-rows-2 grid-cols-2 gap-3 py-8 px-16 uppercase font-poppins">
          {
            props.question &&
            props.question.options.map((option) => {
                return (
                <button onClick={props.selectOption} className="transition-all duration-200 rounded-lg text-md p-2 capitalize border border-white hover:bg-white hover:text-black active:scale-95">
                  {option}
                </button>
                )
            })
          }
        </div>
    </div>
  )
}

export default Option
