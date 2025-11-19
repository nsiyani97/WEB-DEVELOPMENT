// This array stores all the user data (id, name, age, salary) as objects
let allData = []

//  Reads user's entered name, age, salary from the form.
const savedata = ()=>{
    let nm = document.getElementById('name').value
    let age = document.frm.age.value
     let sal = document.frm.salary.value
     let id = document.frm.id.value
     //to improve the id 
     let data = JSON.parse(localStorage.getItem('userinfo'))
     let len = (data!=null)?data.length+1 : 1

     if(id!=''){
      //update
      //match cha id of element and create new array
      allData = data.map((i)=>{
        if(i.id == id){//if id match they you can change in this id
          i.name = nm
          i.age = age
          i.salary = sal
        }
        return i
      })
     }else{
      //insert
     let obj = {
        id : len,//otherwise start from 1
        name : nm,
        age: age,
        salary : sal
     }

//      Adds the object to allData array.
// Saves the updated array to browser’s local storage (after converting to a JSON string).
     allData.push(obj)
     }
     document.frm.reset()
     document.frm.id.value = ''
     localStorage.setItem("userinfo",JSON.stringify(allData))
     dispdata()
}

const dispdata = ()=>{
    let data = JSON.parse(localStorage.getItem('userinfo'))
    let tr = ''
    data.map((i)=>{
        //backquotes uses that call Template literal
        tr += `<tr>
        <td>${i.id}</td>
         <td>${i.name}</td>
          <td>${i.age}</td>
           <td>${i.salary}</td>
           <td>
             <button onclick =editdata(${i.id})>Edit</button>
           <button onclick =deldata(${i.id})>Delete</button>
           </td>

        </tr>`
    })
    document.getElementById('allData').innerHTML = tr
}
//delete the  dataa
const deldata=(id)=>{
      let data = JSON.parse(localStorage.getItem('userinfo'))
      //1 2 3 4 5 3 delete krvu hoy to == id  =3
      let res = data.filter((i)=>{//dataa filter use to search item
        return i.id != id//3 id remove  so they give other id 
      })

      //when id delete sqauentially add the item to use j=1
      let j=1
      //map can numbering the item
      let newdata = res.map((i)=>{
        i.id = j++
        return i
      })
      allData = newdata
         localStorage.setItem("userinfo",JSON.stringify(newdata))
         dispdata()
}

const editdata = (id)=>{
  let data = JSON.parse(localStorage.getItem('userinfo'))
  let res = data.find((i)=>{
    //searches fpr single value and element
    return i.id == id
  })
  console.log(res)
   document.getElementById('name').value =  res.name
    document.frm.age.value = res.age
      document.frm.salary.value = res.salary
     document.frm.id.value = id
  
}
dispdata()