let url = "https://icanhazdadjoke.com/";

async function getJoke (){
   try{
    const headers = {headers:{Accept:"application/json"}}
    let res = await axios.get(url ,headers);
    console.log(res.data.joke);
   }catch(err){
    console.log(err);
   }

}