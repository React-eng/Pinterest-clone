import axios from "axios";
export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID KYTyWxtxRvwj-LgX8Y9RZu0-cXI8pAAycNMG4tkI6yQ"
    }
})