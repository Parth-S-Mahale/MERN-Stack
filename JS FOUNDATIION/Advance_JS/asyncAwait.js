function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://www.google.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    setTimeout(() => {
      console.log("User data fetched successfully!");
    }, 1000);
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error! fetching data.", error);
  }
}

getUserData();
