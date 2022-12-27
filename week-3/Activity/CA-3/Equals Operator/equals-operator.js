/*
Instructions
- Create an array variable, scottishCity, set it equal to ["Glasgow"]
- Create another variable, americanCity, and set it equal to the array scottishCity
- Now, reassign the first element of the americanCity and set it to the value: 
'New ' + americanCity
- Do you think both arrays have the same value in memory?
*/

//write your code here
const scottishCity = ["Glasgow"];
const americanCity = scottishCity;
americanCity[0] = 'new ' + americanCity;//reassign new value




//////////////////////////
//uncomment the next lines one at a time to check your results in the browser console
console.log(scottishCity)//output new Glasgow
console.log(americanCity)//output new Glasgow

/////////////////////////
//don't change the code under this line
if (typeof module !== 'undefined') {
    module.exports = {scottishCity, americanCity};
}
