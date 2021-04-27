$(document).ready(function () {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
});

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function numberToDenomination(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

                : Math.abs(Number(labelValue));

}

$("#calculate").click(function () {
    var numOfRequests = $("#numOfRequests").val();
    var requestUnits = $("#requestUnits").val();
    var requestPerTime = $("#requestPerTime").val();
    var totalYears = $("#totalYears").val();
    var objectSize = $("#objectSize").val();
    var objectSizeUnit = $("#objectSizeUnit").val();

    if ($("#flexCheckDefault").is(':checked')) {
        var totalObjects = numOfRequests * requestUnits;
    } else {
        var totalObjects = (totalYears * 365 * ((numOfRequests * requestUnits) / requestPerTime)).toFixed(2);
    }
    var totalBytes = totalObjects * objectSize * objectSizeUnit;

    var totalObjectsValue = numberToDenomination(totalObjects);
    var storageNeeded = bytesToSize(totalBytes);

    $("#totalObjects").val(totalObjectsValue);
    $("#storageNeeded").val(storageNeeded);

});