import React, {  useState } from 'react';
/*eslint-disable no-unused-expressions*/
import LinkedList from './Linked_List';


const ll=new LinkedList();
function Ui () {
  const [FName,setFName]=useState('')
  const [LName,setLName]=useState('')
  
  const [Salary,setSalary]=useState('')
  const [string,setString]=useState('')
  const [stringL,setStringL]=useState('')
  
  const [stringS,setStringS]=useState('')
  const button= <button onClick={()=>{remove(0)}} type="submit" class="btn btn-danger">Delete</button>
  const [Array,setArray] =useState([])

const handleevent=(e)=>{
setString(e.target.value)

// console.log(string)
}
const handleevent2=(e)=>{
setStringL(e.target.value)

// console.log(string)
}

const handleevent3=(e)=>{
setStringS(e.target.value)

// console.log(string)
}
const remove=(i)=>{
  if (i=0){
    ll.removeAt(0)
    ll.removeAt(1)
    ll.removeAt(2)
  }else if (i=3){
    ll.removeAt(3)
    ll.removeAt(4)
    ll.removeAt(5)
  }
// ll.removeAt(1)
// ll.removeAt(2)


setFName ('')
setLName (ll.getAt(1))
setSalary (ll.getAt(2))
}
let L=[]
const submit=(e)=>{
  e.preventDefault();
const value=string;
const value2=stringL;

const value3=stringS;

ll.insertFirst(value)
ll.insertLast(value2)
ll.insertLast(value3)



setFName (ll.getAt(0))
setLName (ll.getAt(1))
setSalary (ll.getAt(2))
L.push(<td>{FName}</td>)
L.push(<td>{LName}</td>)
L.push(<td>{LName}</td>)
L.push(<button>del</button>)
setArray(...Array,L[0])


console.log(FName)


}

 





  

    return ( <div className='back'>
      <nav style={{backgroundColor:"#252625"}}>

 <h1> <span class="badge bg-secondary">Employee Regstery</span></h1>
      </nav>
     
   
      <div>
      <form class="row gx-3 gy-2 align-items-center">
  <div class="col-sm-3">
    
    <label  for="specificSizeInputName">Name</label>
    <input style={{width:"200px"}} type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe" onChange={handleevent}/>
  </div>
  <div class="col-sm-3">
    
    <label  for="specificSizeInputName">Name</label>
    <input style={{width:"200px"}} type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe"  onChange={handleevent2}/>
  </div>
  <div class="col-sm-3">
    
    <label  for="specificSizeInputName">Name</label>
    <input style={{width:"200px",innerHeight:"20px"}} type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe"onChange={handleevent3}/>
  </div>

  
 

  <div class="col-auto">
    
  </div>
  <div class="col-auto">
    <button onClick={submit} type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
     
       

        <table className="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Profession</th>
      <th scope="col">Salary</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr className='table-dark'>
      <th scope="row">1</th>
     
      <td>{FName}</td>
      <td>{LName}</td>
      <td>{Salary}</td>
      <td> <button onClick={()=>{remove(0)}} type="submit" class="btn btn-danger">Delete</button></td>
     
    </tr>
    <tr className='table-dark'>
      <th scope="row">1</th>
     
      <td>{FName}</td>
      <td>{LName}</td>
      <td>{Salary}</td>
      <td> <button onClick={()=>{remove(3)}} type="submit" class="btn btn-danger">Delete</button></td>
     
    </tr>    
    <tr className='table-dark'>
      <th scope="row">1</th>
     
      <td>{FName}</td>
      <td>{LName}</td>
      <td>{Salary}</td>
      <td> <button onClick={()=>{remove(6)}} type="submit" class="btn btn-danger">Delete</button></td>
     
    </tr>
    <tr className='table-dark'>
      <th scope="row">1</th>
     
      <td>{FName}</td>
      <td>{LName}</td>
      <td>{Salary}</td>
      <td> <button onClick={()=>{remove(9)}} type="submit" class="btn btn-danger">Delete</button></td>
     
    </tr>
    <tr className='table-dark'>
      <th scope="row">1</th>
     
      <td>{FName}</td>
      <td>{LName}</td>
      <td>{Salary}</td>
      <td> <button onClick={()=>{remove(12)}} type="submit" class="btn btn-danger">Delete</button></td>
     
    </tr>
    <tr className='table-dark'>
      <th scope="row">1</th>
     
      <td>{FName}</td>
      <td>{LName}</td>
      <td>{Salary}</td>
      <td> <button onClick={()=>{remove(15)}} type="submit" class="btn btn-danger">Delete</button></td>
     
    </tr>
    <tr className='table-dark'>
      <th scope="row">1</th>
     
      <td>{FName}</td>
      <td>{LName}</td>
      <td>{Salary}</td>
      <td> <button onClick={()=>{remove(18)}} type="submit" class="btn btn-danger">Delete</button></td>
     
    </tr>
  </tbody>
</table>


      </div>
      

      
   
    </div> );
  }


export default Ui;


