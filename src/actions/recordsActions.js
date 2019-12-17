
export const changeCategory = (variant) =>{
    return {
        type: "CHANGE",
        variant
    }
};
export const addRecords = (records) =>{
    return {
        type: "ADD_RECORDS",
        records
    }
};
export const updateRecords = (data,id,type) => dispatch =>{
    console.log(id,type)
    fetch("http://localhost:8080/record", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(() => {
            console.log("Success!");
        })
        .then(dispatch(loadRecords(id,type)))
        .catch(e => console.log(e))

};
export const loadRecords = (id,type) => dispatch =>{
    let link;
    switch (type) {
        case "admin":
            link = "records";
            break;
        default:
            link = `records/${id}`;
            break;
    }
    fetch(`http://localhost:8080/${link}`, {
        method: "get",
        headers: { "Content-Type": "application/array" }
    })
        .then(response => response.json())
        .then(data => {
           dispatch(addRecords(data));
        })
        .catch(e => {
            console.log(e);
        });
};
export const recordService = (data) => dispatch =>{
    fetch("http://localhost:8080/record", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(() => {
            console.log("Success!");
            dispatch(addRecords(data))
        })
        .catch(e => console.log(e));
};