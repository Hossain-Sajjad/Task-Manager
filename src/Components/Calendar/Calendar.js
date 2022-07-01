import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    return (
        <div className='mt-24 flex items-center flex-col'>
            <DayPicker />
        </div>
    );
};

export default Calendar;