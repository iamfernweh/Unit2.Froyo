const userInputString = prompt('Please enter flavors separated by commas.',
'coffee, strawberry, vanilla, coffee'
);

//function to count flavors and display results
function countFlavors(userInputString) {
    //split the input string by commas to get each flavor
    let flavors = userInputString.split(',');
    //create object to store count of each flavor input
    let flavorCount = {};

    flavors.forEach(function(flavor){
        //removes spaces from input
        flavor = flavor.trim();
        //count each string inputted
        if (flavor in flavorCount) {
            flavorCount[flavor] = flavorCount[flavor] + 1;
        } else {
            flavorCount[flavor] = 1;
        }
    }
    );
//display as a table
    console.table(flavorCount);
//return the flavor count object
    return flavorCount;

}

//call function and store the returned object
const countedFlavors = countFlavors(userInputString);
