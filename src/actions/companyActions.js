export const loadInformation = (data) =>{
    return {
        type: "LOAD",
        data
    }
};

export const loadDiscounts = (data) =>{
    return{
        type:"LOAD_DISCOUNTS",
        data
    }
};