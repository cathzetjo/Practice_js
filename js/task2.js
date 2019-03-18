function type (param) {
    return document.writeln(typeof param);

}

let par;
document.write("For <b>" + par + "</b> type is: ")
type(par);

par= null;
document.write("For <b>" + par + "</b> type is: ")
type(par);

par= "Hello";
document.write("For <b>" + par + "</b> type is: ")
type(par);

par= 10;
document.write("For <b>" + par + "</b> type is: ")
type(par);

par=true;
document.write("For <b>" + par + "</b> type is: ")
type(par);

par= {name: "Katerina"};
document.write("For <b>" + par + "</b> type is: ")
type(par);