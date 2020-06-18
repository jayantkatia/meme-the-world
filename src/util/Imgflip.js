
const MemesArray=[];
async function getData(){
    try{    
        const response =await fetch("https://api.imgflip.com/get_memes");
        if(response.ok){
            const jsonResponse= await response.json();
            jsonResponse.data.memes.map(meme=>MemesArray.push(meme));
            return MemesArray;
        }
    }catch(err){
        console.log(err);
    }
} 


export default getData;