import API from "../index";

export const getMovies = async() =>{
    const res = await API.get("/movies");
    return res.data;
}

export const getMovieById = async(id) =>{
    if (!id) throw Error("Id is undifined");
    const {data} = await API.get(`/movies/${id}`);
    return data;
}

