import { FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


let config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}

const countries = [
    {label: "India"},
]

function AddressDetail() {
    const [geo, setGeo] = useState([]);
    const [selectedState, setselectedState] = useState()
    let apiEndPoint = config.cUrl;
    useEffect(()=> {
       
    
        const fetchData =  async() => {
       const res = await fetch(`${config.cUrl}/IN/states`, {headers: {"X-CSCAPI-KEY": config.ckey}})
       //fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}});
        const data = await res.json();
        //console.log(data);
        setGeo(data);

    }

    fetchData();

    }, []);

    function handleState(e){
       setselectedState(e.target.value)
        
    fetch(`${config.cUrl}/IN/${selectedState}/cities`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(response => response.json())
    .then(data => console.log(data))
    }

  return (
    <div>
      <h1 className="bg-slate-500 mb-7 text-center font-semibold">
        Address Details
      </h1>
      <div className="grid grid-cols-2 gap-6 pl-2">
        <FormControl className="flex">
          <label className="">Address</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter Name"
            
          />
        </FormControl>
        <FormControl>
          <label>State</label>
          <Autocomplete
            id="combo-box-demo"
             options={geo.map((list) => list.name)}
            sx={{ width: 30 + "vw" }}
            renderInput={(params) => <TextField {...params} label="state" />}
            onChange={handleState}
          />
        </FormControl>
        <FormControl>
          <label>City</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={geo.city}
            sx={{ width: 30 + "vw" }}
            renderInput={(params) => <TextField {...params} label="city" />}
          />
        </FormControl>
        <FormControl className="flex">
          <label>Country</label>
          <Autocomplete
            id="combo-box-demo"
           
            sx={{ width: 30 + "vw" }}
            options={countries}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
        <FormControl className="flex">
          <label className="">Pincode</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter pincode"
          />
        </FormControl>
      </div>
    </div>
  );
}

export default AddressDetail;
