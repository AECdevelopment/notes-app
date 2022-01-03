import axios from "axios";

export const getAllNotes = () => {
    return axios.get("http://127.0.0.1:3001/api/notes")
    .then((response) => {
        const { data } = response
        return data
    })
}