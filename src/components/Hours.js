// Import React Library
import React from "react";

const Hours = () => {
    // Define Shelter Hours according app requirements
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "9:00", close: "20:00" },
        { day: "Sunday", open: "9:00", close: "20:00" },

    ];

    // Get the long day name and store it in a variable called today to use it later
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    // Get today's hours according shelter hours
    const todayHours = shelterHours.find((day) => day.day === today);

    // Display today and the hours in an div with an id of hours
    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
        </div>
    )
}

export default Hours;