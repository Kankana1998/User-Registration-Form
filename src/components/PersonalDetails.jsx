import { FormControl } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';


const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  gender: yup.string().required(),
  mobile: yup
    .string()
    .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
    .min(10, 'Mobile number must be at least 10 characters')
    .max(10, 'Mobile number cannot exceed 10 characters')
    .required('Mobile number is required'),
  ID: yup.string().matches(/^[0-9]+$/, 'Mobile number must contain only digits')
    .min(12, 'Mobile number must be at least 12 characters')
    .max(12, 'Mobile number cannot exceed 12 characters'),
});

export default function PersonalDetails({ onNext }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const genderOptions = [{ label: "Male" }, { label: "Female" }, { label: "Other" }];

  const idTypeOptions = [{ label: "Aadhar" }, { label: "PAN" }];
    const dispatch = useDispatch();
  const onSubmit = (data) => {
    onNext(); // Call the onNext function to move to the next page
  };

  return (
    <div className="pb-5">
      <h1 className="bg-slate-500 mb-7 text-center font-semibold">Personal Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6 pl-2">
          <FormControl className="flex">
            <label className="">Name</label>
            <TextField {...register("name")} id="outlined-basic" variant="outlined" placeholder="Enter Name" />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </FormControl>

          <div className="flex justify-center items-center">
            <FormControl className="flex justify-evenly">
              <label>Age</label>
              <TextField {...register("age")} id="outlined-basic" variant="outlined" sx={{ paddingRight: 5 }} placeholder="Age in years" />
              {errors.age && <span className="text-red-500">{errors.age.message}</span>}
            </FormControl>

            <div>
              <label>Sex</label>
              <Autocomplete
                options={genderOptions}
                getOptionLabel={(option) => option.label}
                sx={{ width: 30 + "vw" }}
                renderInput={(params) => <TextField {...params}  {...register("gender")} />}
              />
              {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
            </div>
          </div>

          <FormControl>
            <label>Mobile</label>
            <TextField {...register("mobile")} variant="outlined" placeholder="Enter Mobile" />
            {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
          </FormControl>

          <div className="flex items-center">
            <div>
              <label>Govt Issued ID</label>
              <Autocomplete
                options={idTypeOptions}
                sx={{ width: 250, marginRight: 10 + "px" }}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Govt Issued ID" {...register("govtId")}/>
                )}
              />
            </div>

            <TextField
              {...register("govtIdNumber")}
              id="outlined-basic"
              variant="outlined"
              className="w-full"
              placeholder="Enter Govt ID"
              sx={{ width: 60 + "vw", marginRight: 30 + "px", marginTop: 3 }}
              name="ID"
            />
          </div>
        </div>

        <button
          type="submit"
          id="submit"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center ml-4 mt-5 me-2 mb-2 w-[10vw]"
        >
          Next
        </button>
      </form>
    </div>
  );
}
