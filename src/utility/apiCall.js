import React, {Component} from 'react';
class ApiHit extends Component
{
    postMethod=async(timestp,hex)=> {
       alert('appi hit');
         try {
           let response = await fetch("http://test.kelltontech.net/nasscom_event/user/reg"
          
             ,
           {
                 method: 'POST',
                 headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                  
                    email:"abhishek.agrawal@kelltontech.com",
                    hash:hex,
                    timestamp:timestp,
                    method:2
       
                 }),
                
             }
            
           );
           let responseJson = await response.json();
          
           alert("Result OTP API "+JSON.stringify(responseJson))   //Result OTP API
         
          return responseJson;
          
          } 
         catch (error) {
           console.error("erroe in signim"+error);
         }
     
        
       }

       getMethod=async(timestp,hex,id)=>{
        try {
            let response = await fetch("http://test.kelltontech.net/nasscom_event/conference/list?hash="+hex+"&timestamp="+timestp+"&id="+id+"&version=v1"
           
              ,
            {
                  method: 'GET',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  }
                  
            });
            let responseJson = await response.json();
           
            alert("Result HOME API"+JSON.stringify(responseJson))   //Result HOME API
          
           return responseJson;
           
           } 
          catch (error) {
            console.error("error "+error);
          }
       }
}
export default api=new ApiHit();