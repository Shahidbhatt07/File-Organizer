let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) { //organizee
    case "tree":
        //call tree function
        console.log("tree function called and executed succesfully on path " + path);
        break;
    case "organize":
        //call organize function
        console.log("organize function called and executed succesfully on path "+ path);
        break;
    case "help":
        //call help function
        helpFunc.help();
        // console.log("help function called and executed succesfully");
        break;
    default:
        console.log("command not recognized :/")
        break;
}