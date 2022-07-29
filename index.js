const axios = require('axios');

const greet = name =>`Hola ${name}`;


const user = async()=>{
	const result = await axios.get('https://jsonplaceholder.typicode.com/users')
	return result.data;
}

module.exports ={
	greet, user
}
