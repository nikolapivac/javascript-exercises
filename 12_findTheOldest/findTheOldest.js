const findTheOldest = function(people) {
    let len = people.length;

    const yearCalc = people.map(e => {
        if (!("yearOfDeath" in e)){
            const d = new Date();
            e.years = d.getFullYear() - e.yearOfBirth;
        }   
        else{
            e.years = e.yearOfDeath - e.yearOfBirth;
        }
        return e;
    });

    const sorted = yearCalc.sort((a, b) => { 
        return a.years > b.years ? 1 : -1;
    });

    return sorted[len-1];
};



// Do not edit below this line
module.exports = findTheOldest;
