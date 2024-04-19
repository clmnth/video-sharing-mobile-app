import { Client, ID, Account } from "react-native-appwrite";

export const config = {
  endpoint: "https://api.appwrite.io/v1",
  platform: "com.clem.aora",
  projectId: "6621f593a6bc495e4eec",
  databaseId: "6621fedfe3dec2e6d295",
  userCollectionId: "6621ff26cbd1e5092278",
  videoCollectionId: "6621ffa585841f8c3270",
  storageId: "66224a5e2543034f6b10",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", 
  "password", "Jane Doe")
  .then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
