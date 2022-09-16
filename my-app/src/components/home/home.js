import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase';
import { QuerySnapshot } from '@firebase/firestore';
import moment from "moment";
//styles
import '../../assets/styles/home.css'
//variables



const months = [
    "January", 
    "February", 
    "March",
    "April", 
    "May", 
    "June",
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

const ref = firebase.firestore().collection('events');




// ADD FUNCTION
function postEvent(newEvent) {
    // setLoading();
    ref
      //.doc()
      .doc(newEvent.id)
      .set(newEvent)
      .catch((err) => {
        console.error(err);
    });
}

function  GetCurrentMonthName(num) {
    return months[num];
}
function firstDayOfMonth(date){
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
function getDaysInMonth(date, month){
    return new Date(date.getFullYear(), month, 0).getDate();
}
function PastMonthEnd(date){
    let pastMonthDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    let days = [];
    for (let i = firstDayOfMonth(date).getDay(); i > 0; i--) {
        days.push(
            <td className="pastmonth">{getDaysInMonth(pastMonthDate, pastMonthDate.getMonth())-i+1}</td>
            
        );
        
    }
    
    return days;
}
function NextMonthBeginning(date){
    let NextMonthDate = new Date(date.getFullYear(), date.getMonth()+1, 0)
    let days = [];
    for (let i = 0; i < 6-NextMonthDate.getDay() ; i++) {
        days.push(
            <td className="pastmonth">{i+1}</td>
        );
    } 
    return days;
}
function addEvent(date){
    
    //Time Stamp
    let timeStmp = moment().set({'year': date.getFullYear(), 
                                'month': date.getMonth(), 
                                'date': date.getDate(),
                                'hour': date.getHours(),
                                'minute': date.getMinutes(),
                                'second': 0,
                                'millisecond': 0 
                            }).format()
                              
    var name = prompt("What's your Event?");
    if(name){
        postEvent({ name : name, 
                    time : timeStmp+"",
                    id: uuidv4() 
                });
    }
}

function fillMonth(date, month, today, currDate, events){
    let days = [];
    let dayEvents = [];
    let bool = false;
    let t = 1;
    console.log(events)
    for (let d = 1; d <= getDaysInMonth(date, month); d++) {
        if(checkEventsEmpty(events) === false){
            events.forEach(event => {
                
                bool = event.time.split("T")[0].split("-")[0] == date.getFullYear() && 
                        event.time.split("T")[0].split("-")[1] == date.getMonth()+1  &&
                        event.time.split("T")[0].split("-")[2] == d

                if(bool){
                    
                    days.push(
                        <td  className="event"
                        onClick={() => {
                            window.alert("Event: "+event.name)
                        }}
                        > 
                            {event.time.split("T")[0].split("-")[2]}
                        </td>
                    )
                    dayEvents.push(event.time.split("T")[0].split("-")[2])

                }
            })
                
            if(!bool){
                if(d === today && currDate.getMonth()+1 === month && currDate.getFullYear === date.getFullYear){
                    days.push(
                        <td key={d} className="today"
                       
                            onDoubleClick={() => {
                                addEvent(new Date(date.getFullYear(), date.getMonth(), d)); 
                            }}
                        > 
                            {d}
                        </td>
                    );
                    dayEvents.push(d)
                }else{
                    if(dayEvents.pop() == d){
                    }else{
                        days.push(
                            <td key={d} className="calendar-day"
                                
                                onDoubleClick={() => {
                                    addEvent(new Date(date.getFullYear(), date.getMonth(), d));
    
                                }}  
                            >
                                {d}
                            </td>
                        );
                    }
                    
                    dayEvents.push(d)
                    
                }
            }
        }else{
            if(d === today && currDate.getMonth()+1 === month && currDate.getFullYear === date.getFullYear){
                days.push(
                    <td key={d} className="today" 
                        onDoubleClick={() => {
                            addEvent(new Date(date.getFullYear(), date.getMonth(), d));     
                        }}
                    > 
                        {d}
                    </td>
                );
            }else{
                days.push(
                    <td key={d} className="calendar-day"
                        onDoubleClick={() => {
                            addEvent(new Date(date.getFullYear(), date.getMonth(), d));
                        }}
                    >
                        {d}
                    </td>
                );
            }
        }
        
    }
    return days;
}
function checkEventsEmpty(events){
    var bool = true;
    if(events.length !== 0){
        bool = false;
    }
    return bool
}

const Home = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    function getEvents(){
        ref.onSnapshot((QuerySnapshot)=>{
          const items =[];
          QuerySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setEvents(items);
        });
    }
    useEffect(() =>{
        getEvents();
    }, []);

    
    
    
    var num = date.getMonth();
    var month = (date.getMonth()+1);
    var year = date.getFullYear();
    let DaysPastMonth = PastMonthEnd(date);
    let DaysNextMonth = NextMonthBeginning(date);
    let currDate = new Date();
    let today = currDate.getDate();
    let days = fillMonth(date, month, today, currDate, events);
    var totalSlotsMem = [...DaysPastMonth, ...days, ...DaysNextMonth];
    let rows = [];
    let TempHoldcells = [];

    totalSlotsMem.forEach((row, i) => {
        if (i % 7 !== 0){
            TempHoldcells.push(row);
        } else{
            rows.push(TempHoldcells); 
            TempHoldcells = []; 
            TempHoldcells.push(row);
        }
        if (i === totalSlotsMem.length - 1) {
            rows.push(TempHoldcells);
        }
    });
    let tableCalendarDays = rows.map((d, i) => {
        return <tr>{d}</tr>;
    });
    

    
    
    return (
        <div>    
             <div class="container">
                <table>
                    <thead> 
                        <div>
                            <button onClick={() => {setDate(new Date(date.getFullYear(), date.getMonth()-1, date.getDate()))}}>Prev</button>
                            <button onClick={() => {setDate(new Date(date.getFullYear(), date.getMonth()+1, date.getDate()))}}>Next</button>
                            <tr>
                                <th>{year}{' '}{GetCurrentMonthName(num)} </th>
                            </tr>
                        </div>
                        <tr>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Thuesday</th>
                            <th> Wendsday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableCalendarDays}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Home