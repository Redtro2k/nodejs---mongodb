// Import the MongoDB client
const { MongoClient } = require('mongodb')

// Define an asynchronous function called 'main'
async function main() {
    // Define the MongoDB connection URL
    const url = "mongodb+srv://llacunadarwin24:6Bs8XOpepe9hzeQj@redtro.ydnrjhw.mongodb.net/?retryWrites=true&w=majority";
    
    // Create a new MongoClient instance with the connection URL
    const client = new MongoClient(url)
    
    try{
        // Connect to the MongoDB server
        await client.connect();
        
        // Call the 'listDatabases' function, passing the client as an argument
        await listDatabases(client)
    }catch(e){
        // If there is an error, log it to the console
        console.error(e);
    }finally{
        // Close the MongoDB connection
        await client.close()
    }
}

// Call the 'main' function, and log any errors to the console
main().catch(console.error);

// Define an asynchronous function called 'listDatabases', which takes the 'client' object as a parameter
async function listDatabases(client){
    // Use the 'admin' method to get information about the server's administrative databases
    const databaseList = await client.db().admin().listDatabases();
    
    // Log a message to the console indicating that the database list is being printed
    console.log("Databases:")
    
    // Iterate over the list of databases and log the name of each one to the console
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`)
    });
}
