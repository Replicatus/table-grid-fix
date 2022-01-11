function mapper (data, model) {
	let mappedData;
	if (Array.isArray(data)) {
		mappedData = [];
		data.forEach(item => {
			const mappedItem = new model(item);
			mappedData.push(mappedItem);
		})
	} else {
		mappedData = new model(data);
	}
	return mappedData;
}
export default mapper;


