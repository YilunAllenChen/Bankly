import { url_count } from "../endpoints";
import axios from "axios"

const async_increment_buy = async () => {
    axios.post(url_count, {}).then(res => {
        console.log(res.data);
    })
}

export default async_increment_buy;