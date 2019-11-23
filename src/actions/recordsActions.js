
export const removeRecord = (records,id) =>{
    return {
        type: "REMOVE_RECORD",
        records,id
    }
};

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

