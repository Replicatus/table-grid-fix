import axios from 'axios'
import mapper from '@/services/mapper.js'
const token = `Bearer   eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ2RHlaR0RHdDBkbzMtNGhVaU96WTdCUnQ0VF9zd056cWo4VG1tNTBkWDhnIn0.eyJleHAiOjE2NDE5MjEyNjUsImlhdCI6MTY0MTkxNDA2NSwiYXV0aF90aW1lIjoxNjQxODkwNjQ4LCJqdGkiOiI0OWNmZGI4MS03ZmVjLTQzYjktYjE4Ny0yYjAxN2QwNmYzNTEiLCJpc3MiOiJodHRwczovL2F1dGguaW5lZC5ydS9hdXRoL3JlYWxtcy9JbmVkX3VzZXJzIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImNlY2NjYmU5LTU2YzQtNDY1NS05YTNiLTcyYzZlY2ZkZjMwZiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImluZWRfY2xpZW50Iiwibm9uY2UiOiJiZGY5YWI3Ni02YWIzLTQ3NmQtYmM4ZS05ZmYwN2EyYTgzMTkiLCJzZXNzaW9uX3N0YXRlIjoiMmIwMjJjOTAtODVmOC00Yzk4LThjOGItZjQ3NGJjNGQ4Zjk0IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQwNDkiLCJodHRwczovL3Nib3IuaW5lZC5ydSIsImh0dHBzOi8vc3RwLnRlc3QuaW5lZC5ydSIsImh0dHA6Ly9sb2NhbGhvc3Q6NDA5MiIsImh0dHBzOi8vc2Jvci50ZXN0LmluZWQucnUiLCIqLmluZWQucnUiLCJodHRwOi8vbG9jYWxob3N0OjQwNTEiLCJodHRwczovL2tjcC50ZXN0LmluZWQucnUiLCJodHRwczovL21wZy50ZXN0LmluZWQucnUiLCJodHRwczovL21wZy5pbmVkLnJ1IiwiaHR0cHM6Ly9zdHAuaW5lZC5ydSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU1BSX1FVRVJJRVNfUk9MRSIsIk9SR0FOSVpBVElPTl9ST0xFIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtaW5lZF91c2VycyJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6ItCi0LXRgdGC0L7QstGL0Lkg0LLRg9C3IDM1NTciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIxMTExMTIyMjIyIiwiZ2l2ZW5fbmFtZSI6ItCi0LXRgdGC0L7QstGL0Lkg0LLRg9C3IiwibG9jYWxlIjoicnUiLCJmYW1pbHlfbmFtZSI6IjM1NTciLCJvcmdJRCI6MzU1N30.U-_qjM_1EQYits1wzoaLCgC3bay36L2x0BGBfJF47Lm5x-MVdwm-IWPi2wqY52nexsiK9hCklgO5def2pq3VunltSYJqf_hmPaMO8xnB5JzdXgKlEx8ztKwtCGV7kilyAvFbZ6HEA3kuIqQZaVfiCY3SK00Ik3OviTAS0tit0kpzwEIDGpMEeLtRKPhcENFO3QP1hM02TkSHP9pxzFIOUdWdYNCaKHCrd5IImo8V2nD5TuOizWYqQCS4s8lyVgYWSaDoYJTurHIHpn2HFxuNeLT3hgkuUOfQ7VdAhFU477Ycfeee2Zdv6fauqoo52kGwd2ygT1zNTfnT2PClcmRsIw`;
/**
* [request description]
* @param {Object} options содержит свойства endpoint, method, body, path, model, headers
* @return {Object} возвращает promise
* */
async function request (options) {
	const {endpoint, method, body, path, model, headers} = options;
	let response;
		try {
			if (method.toLowerCase() === 'get') {
				response = await axios.get(endpoint, {headers: {...headers, token }});
			} else if (method.toLowerCase() === 'post') {
				if (headers) {
					response = await axios.post(endpoint, body, {headers: {...headers, token } });
				} else {
					response = await axios.post(endpoint, body, {headers: token});
				}
			}
			else if (method.toLowerCase() === 'put') {
				if (headers) {
					response = await axios.put(endpoint, body, {headers: {...headers, token } });
				} else {
					response = await axios.put(endpoint, body, {headers: token});
				}
			} else 	if (method.toLowerCase() === 'delete')
				response = await axios.delete(endpoint, {headers: {...headers, token }});
			if (response.status !== 200 && response.status !== 201) {
				throw new Error(response.statusText);
			}
			// Если нужно маппить
			if (model) {
				let formatData;
				if (path) {
					formatData = await mapper(response.data[path], model);
				} else {
					formatData = await mapper(response.data, model);
				}
				const counterData = response.data.counter;
				return {data: formatData, counter: counterData};
			} else {
				return response;
			}
		} catch(e) {
			// console.error(e);
			return {error: e}
		}
}

export default request;