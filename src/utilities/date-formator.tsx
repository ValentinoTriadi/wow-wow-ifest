// Used to Make Date of Format 26/11/2024 - 15.13.00

export function CreateFormattedDate(date : Date){


    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad to 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad to 2 digits
    const year = date.getFullYear(); // Get year
    
    const hours = String(date.getHours()).padStart(2, '0'); // Get hours and pad to 2 digits
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes and pad to 2 digits
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Get seconds and pad to 2 digits
    
    const formattedDate = `${day}/${month}/${year} - ${hours}.${minutes}.${seconds}`;
    
    return formattedDate
}