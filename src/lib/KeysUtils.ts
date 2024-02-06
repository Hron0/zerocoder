export function KeySlicer (text: string){
    var firstThree = text.slice(0, 3);
    var lastThree = text.slice(-3);

    var res = firstThree + "..." + lastThree;
    return res
}

export function formatDate(iso8601String: string) {
    // Parse the ISO 8601 string to a Date object
    var date = new Date(iso8601String);

    // Get the day, month, and year from the Date object
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    var year = date.getFullYear();

    // Combine the day, month, and year with the desired format
    var formattedDate = day + '.' + month + '.' + year;

    return formattedDate;
}