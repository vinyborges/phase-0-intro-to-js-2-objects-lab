
const employee = {
    name : "Sam", 
    streetAddress : "11 Broadway"
};


function updateEmployeeWithKeyAndValue(object, key, value ){
    const newObj = {...employee};
    newObj.streetAddress = "11 Broadway";
    return newObj;
    

}
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj.name;
    delete newObj.streetAddress;
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}