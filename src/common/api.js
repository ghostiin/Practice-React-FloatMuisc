import axios from 'axios';

//for build
const api_url = 'http://116.62.146.32:3000/';

export const searchAlbum = (query) => {
	const url = `${api_url}search?type=10&keywords=${query}`;
	return axios.get(url);
	//return url;
};

export const albumDetail = (id) => {
	const url = `${api_url}album?id=${id}`;
	return axios.get(url);
};

//for dev
// export const searchAlbum=(query)=>{
//     const url=`/api/search?type=10&keywords=${query}`;
//     return axios.get(url);
//     //return url;
// }

// export const albumDetail=(id)=>{
//     const url=`api/album?id=${id}`;
//     return axios.get(url);
// }
