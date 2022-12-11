//https://restcountries.com/v3.1/all

//a. countries from the Asia continent /region using the Filter function.
// var request = new XMLHttpRequest;
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function(){
//     var rawData=request.response;
//     var data=JSON.parse(rawData);
//     var res = data.filter((ele)=>{
//        if(ele.continents[0]='Asia'){
//         console.log(ele.name.common)
//     }
//     })  
// }

// //b. countries with a population of less than 2 lakhs using Filter function.
// var populationRequest = new XMLHttpRequest;
// populationRequest.open("GET","https://restcountries.com/v3.1/all",true);
// populationRequest.send();
// populationRequest.onload = function(){
//     var populationRawData=populationRequest.response;
//     var populationData = JSON.parse(populationRawData);
//     var population = populationData.filter((ele)=>{
//         if(ele.population<200000){
//             console.log(ele.name.common,ele.population);
//         };
//     });
// };

//c. name, capital, flag using forEach function.
 
var detailsRequest = new XMLHttpRequest;
detailsRequest.open("GET","https://restcountries.com/v3.1/all",true);
detailsRequest.send();
detailsRequest.onload=function(){
    var rawData = detailsRequest.response;
    var data = JSON.parse(rawData);
    var newData = data.forEach((ele)=>{
        console.log(`Name : ${ele.name.common},Capital : ${ele.capital},Flag : ${ele.flag}`)
    })
console.log(data)
}

//d. Total population of countries using reduce function.
var popuReq= new XMLHttpRequest;
popuReq.open("GET","https://restcountries.com/v3.1/all",true);
popuReq.send();
popuReq.onload = function(){
    var rawPopuData = popuReq.response;
    var popuData = JSON.parse(rawPopuData);
    var totalPopu = popuData.reduce((acc,cv)=>acc+cv.population,0)
    console.log(`Totla popoulation in the world : ${totalPopu} `)
};
//e. Country which uses US Dollars as currency.
var currencyRequest = new XMLHttpRequest;
currencyRequest.open("GET","https://restcountries.com/v3.1/all",true);
currencyRequest.send();
currencyRequest.onload = function(){
var currencyRawData = currencyRequest.response;
var currencyData = JSON.parse(currencyRawData);
var currencies = currencyData.map((ele)=>{
console.log(ele.name.common,ele.currencies)
})
}

