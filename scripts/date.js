let makeDate = function() {
    let d = new Date();
    let formattedDated = "";

    formattedDated += (d.getMonth() + 1) + "_";
    formattedDated += d.getDate() + "_";
    formattedDate += d.getFullYear();

    return formattedDated;
};

module.exports = makeDate;