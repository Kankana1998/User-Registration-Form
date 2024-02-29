import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

export default function DataTableComponent() {
  
  const formData = useSelector((state) => state.formData);
 

  const columns = [
    {
      name: 'Name',
      selector: 'column1Key',
      sortable: true,
    },
    {
      name: 'Age',
      selector: 'column2Key',
      sortable: true,
    },
    {
        name: 'Sex',
        selector: 'column3Key',
        sortable: true,
    },
    {
        name: 'Mobile',
        selector: 'column4Key',
        sortable: true,
    },
    {
        name: 'ID Type',
        selector: 'column5Key',
        sortable: true,
    },
    {
        name: 'ID',
        selector: 'column6Key',
        sortable: true,
    },
    {
        name: 'ID Type',
        selector: 'column7Key',
        sortable: true,
    },
    {
        name: 'Address',
        selector: 'column8Key',
        sortable: true,
    },
    {
        name: 'State',
        selector: 'column9Key',
        sortable: true,
    },
    {
        name: 'City',
        selector: 'column10Key',
        sortable: true,
    },
    {
        name: 'Country',
        selector: 'column11Key',
        sortable: true,
    },
    {
        name: 'Pincode',
        selector: 'column12Key',
        sortable: true,
    },
  ];

  return (
    <div>
      <DataTable
        title="Data Table"
        columns={columns}
        data={formData.map((data, index) => (
        <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
              <td>{data.mobile}</td>
            </tr>
            ))}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
}
