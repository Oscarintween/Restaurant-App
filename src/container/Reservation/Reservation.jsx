import React, { useState } from 'react'
import { SubHeading } from '../../components'
import './Reservation.css'
import { images } from '../../constants'
import {
    onSnapshot,
    collection,
    addDoc
} from 'firebase/firestore'
import { db } from '../../firebase/firebase.js'


const collectionDb = collection(db, 'reservation')



const Reservation = () => {

  const [ form, setForm ] = useState({})

  const getReservation = () => {
      const reservationsArr = []
      onSnapshot(collectionDb, (snapshot) => {
          snapshot.docs.forEach((doc) => {
            reservationsArr.push(doc.data())
            console.log(doc.data())
              
          })
      })
  }

  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.name]: ev.value,
    })
  }

  const addReservation = async () => {
    await addDoc(collection(db, 'reservation'), form)
    getReservation()
  }


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
                    <input className='inputText' name="name" onChange={(ev) => handleChange(ev.target)} placeholder="Full Name"  type="text" /><br />
                    <input className='inputText' name="email" onChange={(ev) => handleChange(ev.target)} placeholder="Email adress" type="text" /><br />
                    <input className='inputText' name="phone" onChange={(ev) => handleChange(ev.target)} placeholder="Phone Number" type="text" /><br />
                    <input className='inputText' name="guests" onChange={(ev) => handleChange(ev.target)} placeholder="Number of Guests" type="text" /><br />
                    <input className='inputDate' name="date" onChange={(ev) => handleChange(ev.target)}  type="date" />
                    <input className='inputTime' name="time" onChange={(ev) => handleChange(ev.target)}  type="time" />
                </form>
            </div>
            <button type="button" onClick={() => addReservation()} className="custom__button app__reservation-item" style={{ marginTop: '2rem' }}>Reserve</button>
        </div>

        <div className="app__wrapper_img app__reservation_img">
        <img src={images.reservation} alt="reservation_img" />
        </div>
    </div>
  )
}

export default Reservation