//High order funntion => accept other func as arguments
//Callback functions => func which are passed into func as args (explained in 4th vid ie 12March 2021 wali vid, after 3 hours(set time to 3.00.00))

function firstName (fullName){
    fullName= fullName.split(" ");
    return fullName[0];
}

function lastName (fullName){
    fullName= fullName.split(" ");
    return fullName[1];
}
function sayHi (fullName,fun){
    console.log(fun(fullName));
}

sayHi("TONY STARK", firstName);
sayHi("BRUCE BANNER", lastName);
