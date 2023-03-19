import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import {set,ref,getDatabase} from "firebase/database"
import {useState, useEffect} from "react";
function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyAEZvtHZ_jETm_hx_fgtTIYyamFN1Y78Oo",
    authDomain: "spelling-app-62e45.firebaseapp.com",
    databaseURL: "https://spelling-app-62e45-default-rtdb.firebaseio.com",
    projectId: "spelling-app-62e45",
    storageBucket: "spelling-app-62e45.appspot.com",
    messagingSenderId: "1035322571527",
    appId: "1:1035322571527:web:d27ba8a76e59924414a3a2",
    measurementId: "G-QCXDD50ZR7"
  };
  // const faltu = {
  //   msg: {
  //     name: "Nothing"
  //   }
  // }
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  // const [obj1, setObj1] = useState(faltu)

var obj;
async function getdata(){
    const data = await  fetch('http://localhost:3000',{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
    }
  });
  obj = await data.json();
  // setObj1(obj)
  // console.log(obj1)
  console.log(obj);
  console.log(obj.msg);
  console.log(obj.msg.name);
  console.log(obj.msg.param);
  logEvent(analytics,obj.msg.name,
    obj.msg.param
);
}


// console.log(obj);
//     const x = window.location.href;
//  console.log(x);
//   const searchparams = new URL(x).searchParams;
  
//   console.log(searchparams);
  
//   const entries = new URLSearchParams(searchparams).entries();
  
//   const array = Array.from(entries);
  
//   console.log(array);
  
//   var obj1={};
//  for( var i=0;i<array.length-1;i++){
//   obj1[array[i][0]]=array[i][1];
//  }

//   console.log(obj1);

  // var name = array[array.length-1][1];
  // console.log(name);

  // console.log(obj)
// logEvent(analytics,obj.msg.name,
//     obj.msg.param
// );


  function submitForm(e){
    e.preventDefault();
    var mail = getElementVal('mail');
    var fullname = {
        fname : getElementVal('fname'),
        lname : getElementVal('lname'), 
        
    }
  


logEvent(analytics, 'select_content', {
  content_type: getElementVal('fname'),
  content_id: getElementVal('mail')
});
logEvent(analytics,'Information',{
  webmail:getElementVal('mail')
});
logEvent(analytics,'Full Name',{
  name: getElementVal('fname')+getElementVal('lname')
});
logEvent(analytics,'Email',{
  mail:getElementVal('mail')
});
    save(mail,fullname);
    console.log("working")
}

const save = (mail,fullname) =>{
  
  set(ref(database,'form'+getElementVal('mail')),{
      mail : mail,
      fullname : fullname,
  })
  
  
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
console.log("end");
  return (
    <div>
        <form onSubmit={async ()=>{await getdata()}}>
            

            <div>
                <input  id="mail" placeholder="Your mail...." />
            </div>

            <div>
                <input  id="fname" placeholder="Your first name....." />
            </div>

            <div>
              <input  id="lname" placeholder="Your last name....." />
          </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>

        <div>
<button onClick={async ()=>{await getdata()}}>get Data</button>
    
</div>


    </div>


  );
}

export default App;

