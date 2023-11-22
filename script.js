// // const display = document.querySelector(".display");
// // const buttons = document.querySelectorAll(".button");
// // const specialChars = ["%", "*", "/","-","+","="];
// // let output = "";


// // const calculate = (btnValue) => {
// //     console.log(btnValue);
// //     if(btnValue === "=" &&  output !== ""){
// //         output = eval(output.replace ("%" , "/100"));
// //     }
// //     else if(btnValue === "AC"){
// //         output = ""
// //     }
// //     else if(btnValue === "DEL"){
// //         output = output.toString().slice(0,-1);

// //     }
// //     else{
// //         if(output === ""  && specialChars.includes(btnValue))  return;
// //         output +=btnValue;
// //     }
// //     display.value = output;

// // };
// // // console.log(display,buttons);
// // //  add event listener
// // buttons.forEach((button) => {
// // button.addEventListener("click" , (e) => calculate(e.target.dataset.value));
// // })


// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll(".button");
// const specialChars = ["%", "*", "/", "-", "+", "="];
// let output = "";

// const calculate = (btnValue) => {
//     if (btnValue === "=" && output !== "") {
//         try {
//             output = eval(output.replace("%", "/100"));
//         } catch (error) {
//             output = "Error";
//         }
//     } else if (btnValue === "AC") {
//         output = "";
//     } else if (btnValue === "DEL") {
//         output = output.toString().slice(0, -1);
//     } else {
//         if (output === "" && specialChars.includes(btnValue)) return;
//         // Input validation: Check if the input is a valid expression
//         if (!/^[0-9%\/*+\-.]*$/.test(output + btnValue)) {
//             output = "Error";
//             return;
//         }
//         output += btnValue;
//     }
//     display.value = output;
// };

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => calculate(e.target.dataset.value));
// });


document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");
    let output = "";

    const calculate = (btnValue) => {
        if (btnValue === "=" && output !== "") {
            try {
                output = eval(output.replace("%", "/100"));
            } catch (error) {
                output = "Error";
            }
        } else if (btnValue === "AC") {
            output = "";
        } else if (btnValue === "DEL") {
            output = output.toString().slice(0, -1);
        } else {
            if (output === "" && ["%", "*", "/", "-", "+"].includes(btnValue)) return;
            if (!/^[0-9%\/*+\-.]*$/.test(output + btnValue)) {
                output = "Error";
                return;
            }
            output += btnValue;
        }
        display.value = output;
    };

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => calculate(e.target.dataset.value));
    });
});
