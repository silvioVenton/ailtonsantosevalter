export default(req, res)=>{
    if(req.method === 'GET'){
        res.status(200).json({nome: "silvio"})
    }else{
        res.status(200).json({nome: "rayane"})
    }
   
}