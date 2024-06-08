import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: 'nickname', headerName: "Nickname", flex: 1},
    { field: 'make', headerName: "Make", flex: 1},
    { field: 'model', headerName: "Model", flex: 1},
    { field: 'year', headerName: "Year", flex: 1},
    { field: 'engine', headerName: "Engine", flex: 1},
    { field: 'original_price', headerName: "Original Price", flex: 1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row pt-5">
            <div>
                <button
                    className="p-3 bg-blue-300 rounded-lg m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add New Car
                </button>
            </div>
            <Button onClick={handleOpen} className="px-8 bg-blue-300 rounded-lg m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="px-8 bg-blue-300 rounded-lg m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-blue-300 my-2 rounded">My Cars</h2>
            <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true}
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable
