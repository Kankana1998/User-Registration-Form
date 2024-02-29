import { FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { updateFormData } from "../redux/FormDataSlice";
import DataTable from "datatables.net-dt";


const schema2 = yup.object().shape({
  country: yup.string().required(),
  pincode: yup.number().positive().integer().required(),
});

 

let config = {
  cUrl: "https://api.countrystatecity.in/v1/countries",
  ckey: "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==",
};

const countries = [{ label: "India" }];

function AddressDetail() {
  const [geo, setGeo] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cityy, setCityy] = useState([]);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ address: '', state: '', city: '', pincode: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema2),
  });
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${config.cUrl}/IN/states`, {
        headers: { "X-CSCAPI-KEY": config.ckey },
      });
      const data = await res.json();
      console.log(data);
      setGeo(data);
    };
    fetchData();
  }, []);

  const handleStateChange = (event, value) => {
    setSelectedState(value);
    fetchCities(value);
  };

  const fetchCities = async (state) => {
    const response = await fetch(`${config.cUrl}/IN/states/${state}/cities`, {
      headers: { "X-CSCAPI-KEY": config.ckey },
    });
    const data = await response.json();
    setCityy(data);
  };

  const onSubmit = () => {
   
   dispatch(updateFormData(formData));
   <DataTable />
  };

  return (
    <div>
      <h1 className="bg-slate-500 mb-7 text-center font-semibold">
        Address Details
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-6 pl-2">
        <FormControl className="flex">
          <label className="">Address</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter Name"
            name="address"
          />
        </FormControl>
        <FormControl>
          <label>State</label>
          <Autocomplete
            id="combo-box-state"
            options={geo.map((list) => list.iso2)}
            sx={{ width: 30 + "vw" }}
            renderInput={(params) => <TextField {...params} />}
            onChange={handleStateChange}
             name="state"
          />
        </FormControl>
        <FormControl>
          <label>City</label>
          <Autocomplete
            id="combo-box-city"
            name="city"
            options={cityy.map((list) => list.name)}
            sx={{ width: 30 + "vw" }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
        <FormControl className="flex">
          <label>Country</label>
          <Autocomplete {...register("country")}
            id="combo-box-country"
            sx={{ width: 30 + "vw" }}
            options={countries}
            renderInput={(params) => <TextField {...params} name="country" />}
          />
        </FormControl>
        <FormControl className="flex">
          <label className="">Pincode</label>
          <TextField
            {...register("pincode")}
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter pincode"
            name="pincode"
          />
          {errors.pincode && (
            <span className="text-red-500">{errors.pincode.message}</span>
          )}
        </FormControl>
      </div>
      <button
        type="submit"
        id="submit"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center ml-4 mt-5 me-2 mb-2 w-[10vw]"
      >
        Submit
      </button>
      </form>
      
    </div>
  );
}

export default AddressDetail;
