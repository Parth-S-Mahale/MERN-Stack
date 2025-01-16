/*  
The correct usage for storing data in the Map is through the set(key, value) method.
*/

const contacts = new Map();


// ------------------------
contacts.set("Jessie", {
    phone: "213-555-1234",
    address: "123 N 1st Ave"
});
// ------------------------


console.log(contacts.has("Jessie"));
// Expected Output: true

console.log(contacts.get("Hilary"));
// Expected Output: undefined


// ------------------------
contacts.set("Hilary", {
    phone: "617-555-4321",
    address: "321 S 2nd St"
});
// ------------------------


console.log(contacts.get("Jessie"));
// Expected Output: {phone: "213-555-1234", address: "123 N 1st Ave"}

console.log(contacts.delete("Raymond"));
// Expected Output: false

console.log(contacts.delete("Jessie"));
// Expected Output: true

console.log(contacts.size);
// Expected Output: 1

console.log(contacts.get("Hilary"));
// Expected Output: { phone: '617-555-4321', address: '321 S 2nd St' }

console.log(contacts);
/*
Expected Output:  Map(1) {
                    'Hilary' => { phone: '617-555-4321', address: '321 S 2nd St' }
                  }
*/

