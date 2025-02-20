import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';

export default function BasicDatePicker({label="Date Picker", fullWidth = false, onDateChange}) {

    const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    if (onDateChange) {
      onDateChange(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
            label={label}  
            sx={{ width: fullWidth ? '100%' : 'auto' }}
            slotProps={{
                textField: {
                    fullWidth,
                },
            }} 
            value={selectedDate}
            onChange={handleDateChange}/>
    </LocalizationProvider>
  );
}