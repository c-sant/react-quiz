function isEmpty(field, value){
    if(value?.length == 0){
        throw (`${field} é obrigatório`)
    }
}

function isNull(field, value){
    if(value == null){
        throw (`${field} é obrigatório`)
    }
}

function isUndefined(field, value){
    if(value == undefined){
        throw (`${field} é obrigatório`)
    }
}

function isZero(field, value){
    if(value == 0){
        throw (`${field} não pode ser zero`)
    }
}

function validateFields(field, value){
    isEmpty(field, value)
    isNull(field, value)
    isUndefined(field, value)
}

export { validateFields, isZero }