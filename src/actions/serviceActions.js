

export const loadServices = (services) => {
    return {
        type: "LOAD_SERVICES",
        services
    }
};
export const getService = (service) => {
    return {
        type: "GET_SERVICE",
        service
    }
};
export const getServiceInfo = (id) => dispatch =>{
    fetch(`http://localhost:8080/service/${id}`, {
        method: "get"
    })
        .then(data => data.json())
        .then(data => {
            dispatch(getService(data));
        })
        .catch(e => console.log(e));
};
export const servicesList = () => dispatch => {
        let data = [];
        fetch(`http://localhost:8080/services`, {
            method: "get",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(response => {
                for (let service of response) {
                    data.push(service);
                }
            })
            .then(() => {
                dispatch(loadServices(data));
            })
            .catch(e => console.log(e));
};