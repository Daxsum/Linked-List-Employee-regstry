/*eslint-disable-next-line*/
import React, {  useState } from 'react';
import data from './j.json'
import LinkedList from './Linked_List';


const ll=new LinkedList();
function Ui () {
  const [FName,setFName]=useState('')
  const [LName,setLName]=useState('')
  const [NO,setNO]=useState(0)
  const [Add,setAdd]=useState([])
  const [Salary,setSalary]=useState('')
  const [string,setString]=useState('')
  const [stringL,setStringL]=useState('')
  const [stringS,setStringS]=useState('')
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    Profession: "",
    Salary: "",
    index: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    ll.insertLast(addFormData.index)//////adding value to linked list
    ll.insertLast(addFormData.fullName)//////adding value to linked list
    ll.insertLast(addFormData.Profession)//////adding value to linked list
    ll.insertLast(addFormData.Salary)//////adding value to linked list
    ll.printListData()
    const newContact = {
   
      fullName: addFormData.fullName,
      Profession: addFormData.Profession,
      Salary: addFormData.Salary,
      index: addFormData.index,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const inde = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(inde, 1);
    console.log('after removing')
    console.log(inde)
    ll.removeAt(inde)
    ll.removeAt(inde+1)
    ll.removeAt(inde+2)
    
    ll.printListData()
    setContacts(newContacts);
  };
  const handleclear=(contactId)=>{
    const newContacts = [...contacts];

    const inde = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(inde, inde);

  }
  // const [stringNO,setStringNO]=useState('')
  

 
// const handleevent=(e)=>{
// const v=(e.target.value)
// return v
// }
// const handleevent2=(e)=>{
// setStringL(e.target.value)


// }

// const handleevent3=(e)=>{
// setStringS(e.target.value)
// return e.target.value

// }
// const handleevent4=(e)=>{
// setNO(e.target.value)


// }
// const remove=()=>{
//   setAdd('')

//     ll.removeAt(0)
//     ll.removeAt(0)
//     ll.removeAt(0)
//   setAdd(...Add)
//   setFName (ll.getAt(0))
//   setLName (ll.getAt(1))
//   setSalary (ll.getAt(2))
// }


// const submit=(e)=>{
//   e.preventDefault();
//   let valueName=string;
//   let valueLast=stringL;
//   let valueSalary=stringS;
//   let valueNO=NO;
  
//   ll.insertLast(valueName)
//   ll.insertLast(valueLast)
//   ll.insertLast(valueSalary)
//   setFName (ll.getAt(0))
//   setLName (ll.getAt(1))
//   setSalary (ll.getAt(2))
//   console.log(valueNO)
//   // console.log(FName)
//   setAdd([...Add,{id:valueNO ,name:FName,profession:LName,salary:Salary}])}




    return ( <div className='back'>
      <nav style={{backgroundColor:"#252625"}}>

 <h1> <span class="badge bg-secondary">Employee Registry</span></h1>
      </nav>
     
   
      <div>
      <form class="row gx-2 gy-3 align-items-center">
  <div class="col-sm-3">
    
    <label  for="specificSizeInputName">Full Name</label>
    <input name='fullName' style={{width:"200px"}} type="text" className="form-control" id="specificSizeInputName" placeholder="Jane Doe" onChange={handleAddFormChange}/>
  </div>
  <div class="col-sm-3">
    
    <label  for="specificSizeInputName">Profession</label>
    <input name='Profession' style={{width:"200px"}} type="text" class="form-control" id="specificSizeInputName" placeholder="Engineer"  onChange={handleAddFormChange}/>
  </div>
  <div class="col-sm-3">
    
    <label  for="specificSizeInputName">Salary</label>
    <input name='Salary' style={{width:"200px",innerHeight:"20px"}} type="text" class="form-control" id="specificSizeInputName" placeholder="$10000"onChange={handleAddFormChange}/>
  </div>

  <div class="col-auto">
    
  </div>
  <div class="col-sm-3">
    
    <label  for="specificSizeInputName">Index</label>
    <input name='index' style={{width:"100px"}} type="number" class="form-control" id="specificSizeInputName" placeholder="1" onChange={handleAddFormChange}/>
  </div>
  <div class="col-auto">
    <button onClick={handleAddFormSubmit} type="submit" class="btn btn-primary">Submit</button>
    
  </div>
  <div class="col-auto">
  <button onClick={handleclear} type="submit" class="btn btn-warning">Clear</button>
    
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
  
   {/* {Add.map((name)=>(
     <tr key={name.id}  className='table-dark'>
      <td></td>
      <td>{name.name}</td>
      <td>{name.profession}</td>
      <td>{name.salary}</td>
      </tr>
      
    ))} */}
       {contacts.map((contact) => (
         <tr>
      <td>{contact.index}</td>
      <td>{contact.fullName}</td>
      <td>{contact.Profession}</td>
      <td>{contact.Salary}</td>
      <td><button onClick={()=>{handleDeleteClick(contact.id)}} type="submit" class="btn btn-danger">Delete</button></td>
      



        </tr>
       ))}
               
      </tbody>
    </table>
 


      </div>
      

      
   
    </div> );
  }


export default Ui;


