// Main package function
function emptyFields(input) {
    // Returns true if the input is either undefined, null, or empty, false otherwise
    fields.forEach(function(slug) {
        if (slug == undefined || slug == '' || slug == null) { return false; }
    });
    return true;
}

// Make the main function available to other packages that require us
module.exports = emptyFields;