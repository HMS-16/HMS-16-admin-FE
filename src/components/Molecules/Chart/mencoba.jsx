// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro';
import { Fragment, useState } from 'react';

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = useState([null, null]);

  console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </Fragment>
        )}
      />
    </LocalizationProvider>
  );
}


// import React, { useRef } from 'react'

// const StaticDateRangePickerDemo = (props) => {
//     const textInput = useRef(null);
  
//     function handleClick() {
//       textInput.current.focus();
//     }
  
//     return (
//       <div>
//         <input
//           type="date"
//           ref={textInput} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={handleClick}
//         />
//       </div>
//     );
// }

// export default StaticDateRangePickerDemo


// import React, { Component } from "react";

// class StaticDateRangePickerDemo extends Component {
//   constructor(props) {
//     super(props);

//     this.button = React.createRef();
//   }

//   componentDidMount = () => {
//     this.button.current.click();
//   };

//   checkClick = () => {
//     console.log("clicked");
//   };


//   render() {
//     return (
//       <div>

//         {/* <a
//           href="https://www.youtube.com/"
//           ref={this.button}
//           onClick={this.checkClick()}
//         >
//           Click me!
//         </a> */}
//       </div>
//     );
//   }
// }



//   export default StaticDateRangePickerDemo