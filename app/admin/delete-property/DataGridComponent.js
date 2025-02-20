import React, {useState, useEffect} from 'react'
import theme from '@/app/Theme'
import { ThemeProvider, Box, Stack, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';

// api
import { BASE_API } from '@/components/api';

const DataGridComponent = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'propertyName',
          headerName: 'Property Name',
          width: 150,
          editable: false,
        },
        {
            field: 'propertyType',
            headerName: 'Property Type',
            width: 150,
            editable: false,
          },
        {
          field: 'availableFor',
          headerName: 'Available For',
          width: 150,
          editable: false,
        },
        {
            field: 'area',
            headerName: 'Total Area (Sq. Feet)',
            width: 150,
            editable: false,
          },
        {
          field: 'totalPrice',
          headerName: 'Total Price',
          type: 'number',
          width: 110,
          editable: false,
        },
        {
            field: 'perSqFeetPrice',
            headerName: 'Per Sq. Feet Price',
            type: 'number',
            width: 110,
            editable: false,
          },
          {
            field: 'year',
            headerName: 'Build Year ',
            type: 'number',
            width: 110,
            editable: false,
          },
          {
            field: 'bedroom',
            headerName: 'Bedroom ',
            type: 'number',
            width: 110,
            editable: false,
          },
          {
            field: 'bathroom',
            headerName: 'Bathroom ',
            type: 'number',
            width: 110,
            editable: false,
          },
          
          {
            field: 'parking',
            headerName: 'Parking ',
            type: 'number',
            width: 110,
            editable: false,
          },
          {
            field: 'details',
            headerName: 'Details ',
            type: 'number',
            width: 110,
            editable: false,
          },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            sortable: false,
            renderCell: (params) => (
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </Button>
            ),
          },
      ];
    
    
    const fetchData = async () => {
        
        
        // setLoading(true);
        try {
          const response = await fetch(`${BASE_API}/api/all-properties`); // Adjust API endpoint
          
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setRows(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
        //   setLoading(false);
        
        }
      };

     

    // Delete row using the API
    const handleDelete = async (id) => {
        alert('Data will be deleted')
        try {
        const response = await fetch(`${BASE_API}/api/property/${id}/`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete row');
        }
        fetchData(); // Refresh the data grid after deletion
        } catch (error) {
        console.error('Error deleting row:', error);
        }
    };

    useEffect(() => {
        fetchData();
      }, []);

  
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{width:'100%'}}>
            
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination:{
                            paginationModel:{
                                pageSize:10
                            }
                        }
                    }}
                    pageSizeOptions={[10]}
                />

        </Box>
    </ThemeProvider>
  )
}

export default DataGridComponent