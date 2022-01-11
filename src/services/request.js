import axios from 'axios'
import mapper from '@/services/mapper.js'
const token = `Bearer   eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ2RHlaR0RHdDBkbzMtNGhVaU96WTdCUnQ0VF9zd056cWo4VG1tNTBkWDhnIn0.eyJleHAiOjE2NDE4OTc5NDEsImlhdCI6MTY0MTg5MDc0MSwiYXV0aF90aW1lIjoxNjQxODkwNjQ4LCJqdGkiOiI1YzM3OThiNi00MGEzLTRkMDUtYTg1ZC0xYzA5NzBmYmQzNWYiLCJpc3MiOiJodHRwczovL2F1dGguaW5lZC5ydS9hdXRoL3JlYWxtcy9JbmVkX3VzZXJzIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImNlY2NjYmU5LTU2YzQtNDY1NS05YTNiLTcyYzZlY2ZkZjMwZiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImluZWRfY2xpZW50Iiwibm9uY2UiOiI3NDgwYTBiOC0wMzU0LTRlYWItYWNkNC1mODljNmYzZTVhZTAiLCJzZXNzaW9uX3N0YXRlIjoiMmIwMjJjOTAtODVmOC00Yzk4LThjOGItZjQ3NGJjNGQ4Zjk0IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQwNDkiLCJodHRwczovL3Nib3IuaW5lZC5ydSIsImh0dHBzOi8vc3RwLnRlc3QuaW5lZC5ydSIsImh0dHA6Ly9sb2NhbGhvc3Q6NDA5MiIsImh0dHBzOi8vc2Jvci50ZXN0LmluZWQucnUiLCIqLmluZWQucnUiLCJodHRwOi8vbG9jYWxob3N0OjQwNTEiLCJodHRwczovL2tjcC50ZXN0LmluZWQucnUiLCJodHRwczovL21wZy50ZXN0LmluZWQucnUiLCJodHRwczovL21wZy5pbmVkLnJ1IiwiaHR0cHM6Ly9zdHAuaW5lZC5ydSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU1BSX1FVRVJJRVNfUk9MRSIsIk9SR0FOSVpBVElPTl9ST0xFIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtaW5lZF91c2VycyJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6ItCi0LXRgdGC0L7QstGL0Lkg0LLRg9C3IDM1NTciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIxMTExMTIyMjIyIiwiZ2l2ZW5fbmFtZSI6ItCi0LXRgdGC0L7QstGL0Lkg0LLRg9C3IiwibG9jYWxlIjoicnUiLCJmYW1pbHlfbmFtZSI6IjM1NTciLCJvcmdJRCI6MzU1N30.A1iwcr3l-grWJAT_bTkTcdamQOKL-kCHAb26tyPjJl8NK6z_wmhloBdhakaOFv7WTDAvqH3taPgDrKkfqw8tgs7mCG9hIhDlHzSS8BGARw1rmY-OlQZcab3TVn2BaRKatou0gvQMzWDpepPZjguUCqgt2jpTN4_BF9RaGuZQBxhoHHaL1xBalvKFSiw1fIZ82w3cw7FgyYp9PiAy_JYHJj021gFMrjM7ulOR6ID82db0VKZV9OJFBmTwcE1Iee9t4n8Gyu4DzmoANAbpvlYoCYnJQS9qKAH3tyuj1lSuH2Xg5kXM7Hb62IvngjigqenrHAk8VEj5bGWsGwRthSKpwg`;
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