import request from "@/services/request";
async function getFormData(nameForm = '', mapUslRows= false){
    try{
        const res = await request({
            endpoint: `/api/form5/${nameForm}`,
            method: 'get',
        });
        if (res.status === 200){
            let returnData= res.data;
            if (mapUslRows)
            {
                returnData = [];
                const usls = [
                    {requestName: 'usl'+1, "id":1,"name":"Бакалавриат"},
                    {requestName: 'usl'+2, "id":2,"name":"Специалитет "},
                    {requestName: 'usl'+3, "id":3,"name":"Магистратура"},
                    {requestName: 'usl'+6, "id":6,"name":"Аспирантура"},
                    {requestName: 'usl'+9, "id":9,"name":"Ординатура"},
                    {requestName: 'usl'+12, "id":12,"name":"Ассистентура-стажировка"}
                ];
                usls.forEach(el => {
                    if (Object.hasOwnProperty.call(res.data, el.requestName) && res.data[el.requestName])
                        returnData.push( {id: Math.random(), uslName: el.name}, ...res.data[el.requestName]);
                });
            }
            return returnData;
        }else{
            return  new Error('error form five');
        }
    }
    catch (e) {
        throw new Error('error form five catch ' + e )
    }
}

export {getFormData}