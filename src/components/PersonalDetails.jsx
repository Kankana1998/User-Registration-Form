import { FormControl } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function PersonalDetails() {
  const gender = [{ label: "Male" }, { label: "Female" }, { label: "Other" }];

  const idType = [{ label: "Aadhar" }, { label: "PAN" }];

  return (
    <div>
      <h1 className="bg-slate-500 mb-7 text-center font-semibold">
        Peronal Details
      </h1>
      <div className="grid grid-cols-2 gap-6 pl-2">
        <FormControl className="flex">
          <label className="">Name</label>
          <TextField id="outlined-basic" variant="outlined" placeholder="Enter Name" required />
        </FormControl>

        <div className="flex justify-center items-center">
          <FormControl className="flex justify-evenly">
            <label>Age</label>
            <TextField id="outlined-basic" variant="outlined" sx={{paddingRight: 5}} placeholder="Age in years"/>
          </FormControl>
          <div>
          <label>Sex</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={gender}
            sx={{ width: 30 + "vw" }}
            renderInput={(params) => <TextField {...params} label="gender" />}
          />
          </div>
         
        </div>

        <FormControl>
          <label>Mobile</label>
          <TextField id="outlined-basic" variant="outlined"  placeholder="Enter Mobile"/>
        </FormControl>

        <div className="flex items-center">
             <div>
             <label>Govt Issued ID</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={idType}
            sx={{ width: 250, marginRight: 10 + "px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Govt Issued ID"
                
              />
            )}
          />
             </div>
        
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="w-full"
            placeholder="Enter Govt ID"
            sx={{ width: 60 + "vw", marginRight:  30 + "px", marginTop: 3}}
          />
        </div>
      </div>
    </div>
  );
}
