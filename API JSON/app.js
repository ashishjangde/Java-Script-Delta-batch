let jsonRes = `{
    "fact": "Researchers believe the word “tabby” comes from Attabiyah, a neighborhood in Baghdad, Iraq. Tabbies got their name because their striped coats resembled the famous wavy patterns in the silk produced in this city.",
    "length": 212
}`

let jsn = JSON.parse(jsonRes);
console.log(jsn.fact);

let student ={
    name : "Ashish jangde",
    class : "Bca 2nd"
}

let studJson = JSON.stringify(student);
console.log(studJson);