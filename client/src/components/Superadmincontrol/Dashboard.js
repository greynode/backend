import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../ContextProvider/Context';
import Header from '../Header';

import "./dash.css"

    

const Dashboard = () => {
 

    const { logindata, setLoginData } = useContext(LoginContext);
    console.log(logindata);

    const [data, setData] = useState(false);

    //window.alert(data)
      const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status == 401 || !data) {
            history("/");
        } else {
            console.log("user verify");
            setLoginData(data)
          let va =logindata
           // window.alert(va.ValidUserOne.email)
            history("/dash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        })//, 2000

    }, [])

    return (
        <>
       <Header/>
        <div id ="hello" width="50%" margin="auto" padding="10px">
     
        <Link to="/Subuseradd">
          <button id="bu">Add subuser</button>
        </Link>
       
        
        <Link to="/sublogin">
          <button id="bu">Subuser login</button>
        </Link>
       
        <Link to="/question">
          <button id="bu">Measurement questions</button>
        </Link>
        <Link to="/subhome">
          <button id="bu">subuser home page</button>
        </Link>
        <Link to="/profile">
          <button id="bu">Profile</button>
        </Link>
        <Link to="/home">
          <button id="bu">stationay combution</button>
        </Link>
        <Link to="/processemission">
          <button id="bu">process emission</button>
        </Link>
        <Link to="/homeview">
          <button id="bu">stationay combustion dash</button>
        </Link>
        <Link to="/mobilecombustion">
          <button id="bu">Mobilecombustion</button>
        </Link>
        <Link to="/mobiledash">
          <button id="bu">Mobilecombustion dash</button>
        </Link>
        
        <Link to="/sco">
          <button id="bu">Scope2 energy</button>
        </Link>
        <Link to="/scodash">
          <button id="bu">Scope2 Dashboard</button>
        </Link>
        <Link to="/mc">
          <button id="bu">Transport</button>
        </Link>
        <Link to="/fug">
          <button id="bu">Fugitive emission</button>
        </Link>
        <Link to="/fugdash">
          <button id="bu">Fugitive emission dash</button>
        </Link>
        <Link to="/scope3">
          <button id="bu">Scope3 </button>
        </Link>
        <Link to="/scope3dash">
          <button id="bu">Scope3 dash</button>
        </Link>
        <Link to="/scope3good">
          <button id="bu">Scope3 goods</button>
        </Link>
        <Link to="/scope3gooddas">
          <button id="bu">Scope3 goods dash</button>
        </Link>
        <Link to="/downstream">
          <button id="bu">Downstream</button>
        </Link>
        <Link to="/upstream">
          <button id="bu">Upstream</button>
        </Link>
        <Link to="/capital">
          <button id="bu">Capital goods</button>
        </Link>
        <Link to="/report">
          <button id="bu">Report</button>
        </Link>
        <Link to="/fugitivetwo">
          <button id="bu">Fugitive 2</button>
        </Link>
    
       <Link to="/subfirst">
          <button id="bu"> sublogin</button>
        </Link>
        <Link to="/clientadd">
          <button id="bu"> client add</button>
        </Link>
      
        <Link to="/companyadd">
          <button id="bu"> company add</button>
        </Link> <Link to="/companyadd2">
          <button id="bu"> asset declaration</button>
        </Link>
      
    
        
       </div>
       {/* <h1>user home page</h1>
       <Service/> */}
    </>
    )
}

export default Dashboard;