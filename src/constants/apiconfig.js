



export  const  apiconfig=  (endpoint,body,service)=>{
    // const [status, setstatus] = useState()
    const config = {
        method: service,
        url: 'http://cement.leocadiapharma.com/cement/'+endpoint,
        data:body
        // headers: { 'User-Agent': 'Console app' }
    }
    
 return config
}