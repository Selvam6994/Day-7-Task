//https://restcountries.com/v3.1/all

//a. countries from the Asia continent /region using the Filter function.
var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var rawData=request.response;
    var data=JSON.parse(rawData);
    var res = data.filter((ele)=>{
       if(ele.continents[0]='Asia'){
        console.log(ele.name.common)
    }
    })  
}

//b. countries with a population of less than 2 lakhs using Filter function.
var populationRequest = new XMLHttpRequest;
populationRequest.open("GET","https://restcountries.com/v3.1/all",true);
populationRequest.send();
populationRequest.onload = function(){
    var populationRawData=populationRequest.response;
    var populationData = JSON.parse(populationRawData);
    var population = populationData.filter((ele)=>{
        if(ele.population<200000){
            console.log(ele.population);
        };
    });
};