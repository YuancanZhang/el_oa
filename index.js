import axios from "axios"

const resCache = {};
async function fetchData(id) {

    const response = resCache[id] ? resCache[id] : await axios.get("https://challenges.qluv.io/items/" + id, 
        {headers: {Authorization: Buffer.from(id).toString('base64')}
    }).then((res)=>resCache[id] = res);
    return response.data;
}

//example case
// fetchData("cRF2dvDZQsmu37WGgK6MTcL7XjH")
//     .then(data =>{
//         console.log(data);
//     });