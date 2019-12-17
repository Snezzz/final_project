export const loadInformation = (data) =>{
    return {
        type: "LOAD",
        data
    }
};

export const load = (link) => dispatch => {
    fetch(link, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
            data.json())
        .then(data => {
            dispatch(loadInformation(data))
        })
        .catch(e => console.log(e));
};