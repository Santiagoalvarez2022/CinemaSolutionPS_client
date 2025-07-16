import API from "../../src/api";


export const getScreeningDEV = async({idMovie, daySelected}) =>{
    const {data} = await API.get('/screening');
    console.log("get screeninin in dev mode.")
    //idMovie is a string and I need parse to int.
    const id = parseInt(idMovie);
    
    console.log(`PARAMTROS QUE RECIBO ID :${idMovie} y date : ${daySelected}`)
    let filteredData = []  
    if (data.length) {
        // Filter screenings by movie ID and check if either start or finish date matches the selected day
        filteredData = data.filter((screening) => screening.idMovie === idMovie && (screening.startScreening.startsWith(daySelected) || screening.finishScreening.startsWith(daySelected))) 
    }
    return filteredData;
}