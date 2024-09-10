import React, { useState, useEffect } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from "react-toastify" 

const List = ({url}) => {

  const [list, setList] = useState([]); 

  const fetchList = async () => {
    //API Call
    const response = await axios.get(`${url}/item/items`)
    if(response.data.success){ 
      setList(response.data.data);
    }
    else{
      // toast.error("Error");
    }
  }

  const removeItem = async(foodId) =>{
    const response = await axios.delete(`${url}/item/items/${foodId}`);
    await fetchList();
    if(response.data.success){
      // toast.success(response.data.message);
    }
    else{
      // toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Item List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key = {index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt="" />
              {console.log(item.image)}  
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick = {() => removeItem(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List




// import React, { useState, useEffect } from 'react';
// import './List.css'; // Optional for styling
// import axios from 'axios';
// // import { toast } from 'react-toastify';

// const List = ({ url }) => {
//   const [events, setEvents] = useState([]);

//   // Fetch the event list from the API
//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get(`${url}/item/items`);
//       console.log(response.data);
//       if (response.data) {
//         setEvents(response.data.data); // Set the fetched events to the state
//         console.log(events);
//       } else {
//         // toast.error('Error fetching events');
//       }
//     } catch (error) {
//       // toast.error('Error fetching events');
//       console.error(error);
//     }
//   };

//   // Remove an event
//   const removeEvent = async (eventId) => {
//     try {
//       const response = await axios.delete(`${url}/item/items/${eventId}`);
//       if (response.data.success) {
//         // toast.success(response.data.message);
//         fetchEvents(); // Refresh the list after removing an entry
//       } else {
//         // toast.error('Error removing event');
//       }
//     } catch (error) {
//       // toast.error('Error removing event');
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents(); // Fetch the event list when the component mounts
//   }, []);

//   return (
//     <div className='registration-list flex-col'>
//       <p>All Events</p>
//       <div className="registration-table">
//         <div className="registration-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Description</b>
//           <b>Price</b>
//           <b>Category</b>
//           <b>Action</b>
//         </div>
//         {events.length > 0 ? (
//           events.map((event, index) => (
//             <div key={index} className="registration-table-format">
//               <img 
//                 src={event.image ? `${url}/${event.image}` : null} 
//                 alt={event.name} 
//                 className="event-image" 
//                 width="100px" 
//                 height="100px"
//               />
//               <p>{event.name}</p>
//               <p>{event.description}</p>
//               <p>${event.price}</p>
//               <p>{event.category}</p>
//               <p onClick={() => removeEvent(event._id)} className="cursor remove-action">X</p>
//             </div>
//           ))
//         ) : (
//           <p>No events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;
