import axios from "axios";

export const createNote = ({id, content, date, important}) => {
    return axios.post("http://127.0.0.1:3001/api/notes", {id, content, date, important})
        .then((response) => {
            const data = response
            return data
        })
}