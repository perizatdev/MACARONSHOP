import axios from 'axios'

export const apiRoot = axios.create({
	baseURL: 'http://157.245.202.197/',
})
