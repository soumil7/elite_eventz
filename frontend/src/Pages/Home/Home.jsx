import React from 'react' 
import EventScroll from '../../Components/EventScroll/EventScroll'
import './Home.css'
import EventsOffered from '../../Components/EventsOffered/EventsOffered'
import Service from '../Service/Service'
import FeedBack from '../FeedBack/FeedBack'
import Header from '../../Components/Header/Header'

const Home = () => {
  return (
    <div>
        <br />
      <Header/>
      <h1 className='events'>ELITE EVENTS</h1>
      <EventScroll/>
      <h1 className='events-menu'>EVENTS MENU</h1>
      <EventsOffered/>
      <h1 className='service'>SERVICES</h1>
      <Service/>
      <h1 className='userfeedback'>USER FEEDBACK</h1>
      <FeedBack/>
    </div>
  )
}

export default Home
