const fetch = require("node-fetch");
const API_URL = 'https://www.googleapis.com/books/v1'
const API_KEY = "AIzaSyC6w6GQQMSEp_zUJ9ycieu8vr0sSK1qX4Y";

const fetchNow = async (query) => {
  
    const response = await fetch(`${API_URL}/volumes?q=${query}&key=${API_KEY}`);
   
    const data = await response.json();
    console.log(data)

    const book= {
      author: data.volumeInfo.authors[0],
      title: data.volumeInfo.title,
      publisher: data.volumeInfo.publisher,
    }
    console.log(book)
};   

module.exports = {
  fetchNow
};