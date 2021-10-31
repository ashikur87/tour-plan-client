import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllOrder from '../AllOrder/AllOrder';



const ManageOrder = () => {
    const [Dashboard, setDashboard] = useState([])
   
    useEffect(() => {
        fetch('https://evil-mummy-82280.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setDashboard(data));

    }, [Dashboard,setDashboard])
  

    return (
        
        <div>
        <div className="container">
         <h2 className="mt-5 text-start mb-4 bg-secondary text-white p-4">All order panel</h2>
         <Row xs={1} md={1} className="g-4">
             {
                 Dashboard.map(allData =><AllOrder
                 key={allData._id}
                 allData={allData}
                 ></AllOrder>)
             }
         </Row>
         
     </div>  
     </div>
    );
};

export default ManageOrder;