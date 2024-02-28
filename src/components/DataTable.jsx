import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

export default function DataTableComponent({ data }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

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
        data={tableData}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
}
