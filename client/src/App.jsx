import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
    const[empList,setEmplist]=useState([]);

    let [empData,setEmpdata]=useState({
      eId:"",
      eName:"",
      eDepartment:"",
      eDesignation:"",
      eSalary:"",
      eDoj:"",
      _id:""
    })
   
    let getValue =(e)=>{
         let inputName = e.target.name;
         let inputValue = e.target.value;
         let oldData = {...empData}
         oldData[inputName]=inputValue;
         setEmpdata(oldData);
    }

    let saveEmpdetails = (e)=>{
         e.preventDefault();
         axios.post(`http://localhost:4000/api/employee/records/insert`,empData).then(()=>{
            alert("Employee details added")
            setEmpdata({
      eId:"",
      eName:"",
      eDepartment:"",
      eDesignation:"",
      eSalary:"",
      eDoj:"",
      _id:""
    })
         }).catch((err)=>{
          alert("Error",err)
         })
    }

    let getAllEmp=()=>{
      axios.get(`http://localhost:4000/api/employee/records/view`).then((res)=>{
        return res.data;
      }).then((data)=>{
        if(data.status){
           setEmplist(data.viewObj);
        }
      })
    }

     useEffect(()=>{
      getAllEmp();
     },[]);

  return (
    <>
       <h1 className='text-center mt-2'>Employee Record System</h1>
       <div className='d-flex gap-1'>
       <div className='container col-4 p-3 shadow rounded '>
         <form onSubmit={saveEmpdetails}>
          <h3>Employee Details</h3>
            <label className='form-label' name='eId'>Employee Id :</label>
            <input type="text" placeholder='Enter Employee Id' className='form-control' name='eId' value={empData.eId} onChange={getValue}/>
            <label className='form-label' name='eName'>Employee Name :</label>
            <input type="text" placeholder='Enter Employee Name' className='form-control' name='eName' value={empData.eName} onChange={getValue}/>
            <label className='form-label' name='eDepartment'>Employee Department :</label>
            <select name='eDepartment' className='form-select'  value={empData.eDepartment} onChange={getValue}>
              <option>Select Department</option>
              <option>Development</option>
              <option>Designing</option>
              <option>Sales</option>
            </select>
            <label className='form-label' name='eDesignation'>Employee Designation :</label>
            <select name='eDesignation' className='form-select' value={empData.eDesignation} onChange={getValue}>
              <option>Select Designation</option>
              <option>Senior</option>
              <option>Junior</option>
              <option>Intern</option>
            </select>
            <label className='form-label' name='eSalary'>Salary :</label>
            <input type="number" name='eSalary' placeholder='Enter salary' className='form-control' value={empData.eSalary} onChange={getValue}/>
            <label className='form-label' name='eDoj'>Date of Joining :</label>
            <input type="date" name='eDoj' className='form-control'  value={empData.eDoj}  onChange={getValue} />
            <button type="Submit" className='btn btn-success w-100 mt-3'>Submit</button>
         </form>
       </div>
        <div className='container col-8'>
          <table className='table table-bordered '>
            <thead className='table-light'>
               <tr>
                 <th>SR.No</th>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Department</th>
                 <th>Designation</th>
                 <th>Salary</th>
                 <th>Date-Of-Joining</th>
                 <th>Edit</th>
                 <th>Delete</th>
               </tr>
            </thead>
             {
              empList.map((item,index)=>{
                return(
                  <tbody>
                     <tr>
                       <td>{index+1}</td>
                       <td>{item.eId}</td>
                       <td>{item.eName}</td>
                       <td>{item.eDepartment}</td>
                       <td>{item.eDesignation}</td>
                       <td>{item.eSalary}</td>
                       <td>{item.eDoj}</td>
                        <td>
                          <button className='btn btn-danger'>Delete</button>
                        </td>
                        <td>
                          <button className='btn btn-danger'>Edit</button>
                        </td>
                     </tr>
                  </tbody>
                );
              })
             }
          </table>
         </div>
        </div>
    </>
  )
}

export default App
