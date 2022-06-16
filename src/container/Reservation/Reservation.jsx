import React from 'react'
import { SubHeading } from '../../components'
import './Reservation.css'
import { images } from '../../constants'


const Reservation = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="reservation">
        <div className="app__wrapper_info">
            <SubHeading title="Reservation" />
            <h1 className="headtext__cormorant app__reservation-item" style={{ marginBottom: '3rem' }}>Book a Table</h1>
            <div className="app__wrapper-content app__reservation-item">
                <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Choose your options below</p>
            </div>
            <div className='app__wrapper-form app__reservation-item'>
                <form action="">
                    <input type="date" />
                    <input type="time" />
                    <input type="number" />
                </form>
            </div>
            <button type="button" className="custom__button app__reservation-item" style={{ marginTop: '2rem' }}>Reserve</button>
        </div>

        <div className="app__wrapper_img app__reservation_img">
        <img src={images.reservation} alt="reservation_img" />
        </div>
    </div>
  )
}

export default Reservation