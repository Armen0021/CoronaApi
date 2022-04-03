// let user = {
//     name: "Arev ",
//     lastName: "Abgaryan ",
//     age: 20,
//     phone: +371496778495
// }

    //  -- Object.keys
    //  Object.keys -> veradarcnum e znagvac
// console.log(Object.keys(user));

// Object.keys(user).forEach( (key, value) => {
//     document.write(key +" -> " + value +" , ")
// });

//---------------------------------------------------------------------------------

// Object.keys(user).forEach( (key) => {
//     let value = user[key];
//     document.write(key + " => " + value);
// });

// --------------------------------------------------------------------------------

// console.log(Object.values(user));

// Object.values(user).forEach(val => {
//     document.write(val + "<hr />");
// }); 

//---------------------------------------------------------------------------------


// let user = {
//     name: "Arev ",
//     lastName: "Abgaryan",
//     age: 20,
//     phone: +374102356
// }

// let stringify = function(obj){
//     let result = "";
//     Object.keys(obj).forEach( key => {
//         let val = obj[key];
//         result += key + " => " + val + " \n "  
//     });
//     return result;
// }
// console.log(stringify(user))

// --------------------------------------------------------------------------------


// let user = {
//     name: "Arev ",
//     lastName: "Abgaryan",
//     age: 20,
//     phone: +374102356
// }

// let a = JSON.stringify(user); 


// let w = JSON.parse(a);

// console.log(w);

// --------------------------------------------------------------------------------

// localStorage.setItem("userDB", a);


// let objList = localStorage.getItem("userDB");
// console.log(JSON.parse(objList));

// --------------------------------------------------------------------------------

// let userContact = {
//     name: "Gegham",
//     phone : "+37411789456",
//     friends_contact : [
//         {
//             fr_name : "An",
//             fr_phone : "098741258"
//         },

//         {
//             fr_name : "Jri mard",
//             fr_phone : "789456123"
//         },

//         {
//             fr_name : "Lost",
//             fr_phone : "741258699"
//         },

//     ],
//     sayHi: () => {
//         alert( "Gndak Gasparyan");
//     }
// }


// let str_userContact = JSON.stringify(userContact, undefined, 20);
// // userContact.sayHi();
// alert(str_userContact);

// // --------------------------------------------------------------------------------


// localStorage.setItem("str_userContact", str_userContact);



// const arr_obj = [
//     {name: "bal", selary: "3000"},
//     {name: "tand", selary: "30000"},
//     {name: "Narek jan", selary: "500000"}
// ]; 

// const rgb = [
//     {red : "255, 0, 0"},
//     {green :"0, 255, 0" },
//     {blue : "0, 0, 255"},
//     {yellow : "250, 100, 96"}
// ]

// function find(arr,text) {
//     return arr.filter( (obj) => {
//         const values = Object.values(obj);
//         for (let index = 0; index < values.length; index++) {
//             if ( ("" + values[index]).search(text) !== -1 ) {
//                 return true;
//             }
//         }
//         return false;
//     })
// }


// alert( find (arr_obj, "jan")  );
// alert(JSON.stringify( find(arr_obj, "jan") ) );
// console.log(find(arr_obj, "jan"));
// alert(JSON.stringify( find(rgb, "250") ) );  

// --------------------------------------------------------------------------------

// function max(...max) {
//  console.log(max);
// } 
// max (45,857, 6656,); ///// [45, 857, 6656]

// function max(x,y, ...max) {
//     console.log(max);
// } 
// max("hi", "go", "boom", 45, 857, 6566); 

// --------------------------------------------------------------------------------

fetch("https://corona-api.com/countries/am")
        .then(el =>el.json())
        .then(elem => getData(elem.data));

        function getData(param) {
            // let name = param.name;
            // let population = param.population;
            // let updated_at = param.updated_at;
            // document.querySelector("#app").innerHTML = `Name: ${name} &nbsp;&nbsp;&nbsp; Population: ${population} &nbsp;&nbsp;&nbsp; Updated: ${updated_at}`;
            // console.log(param)


            let table = document.createElement('table');
            let app = document.querySelector('#app');
            table.innerHTML = `
            <tr>
            <th>date</th>
            <th>new_confirmed</th>
            <th>new_deaths</th>
            <th>active</th>
            <th>new_recovered</th>
            </tr>
            `

            param.timeline.forEach(element => {
                let tr = document.createElement('tr');
                tr.appendChild(createTable(element.date));
                tr.appendChild(createTable(element.new_confirmed));
                tr.appendChild(createTable(element.new_deaths));
                tr.appendChild(createTable(element.active));
                tr.appendChild(createTable(element.new_recovered));
                table.appendChild(tr);
            });
            app.appendChild(table);
            document.body.appendChild(app);

        }

        function createTable(arjeq) {
            let td = document.createElement('td');
            let text = document.createTextNode(arjeq);
            td.appendChild(text);
            return td;
        }
        