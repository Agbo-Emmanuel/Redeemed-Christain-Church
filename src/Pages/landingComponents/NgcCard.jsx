import React from 'react'
import '../Css/ngccard.css'

const NgcCard = ({ title, subT, text, btn, img, text2 }) => {


    const send = ()=>{

        if(btn === "Buy Stall"){
            window.location.href = "https://forms.office.com/r/NUgpXm82tb"
        }else{
            window.location.href = "https://forms.office.com/r/QwZ6ymVTnd"
        }
    }

  return (

    <>
    
        <div className='ngc_card_holder'>
            <div className='ngc_card'>
                <div className='ngc_card_left'>
                    <div className='ngc_card_left_top'>
                        <h3>{title} <span>{subT}</span></h3>
                    </div>
                    <p>{text}</p>
                    <p>{text2}</p>
                    <button className='apply_btn' onClick={send}>{btn}</button>
                </div>
                <div className='ngc_card_right'><img src={img} alt=''/></div>
            </div>
        </div>
        
    </>

  )
}

export default NgcCard