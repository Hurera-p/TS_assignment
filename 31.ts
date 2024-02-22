// 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users:string[] = ["User_1", "User_2", "User_3","User_4"]; 


if (users.length>0) {
    console.log("We have some users");
}
else {
    console.log("We need to find users"); 
}

users.length = 0; 

if (users.length>0) {
    console.log("We have some users");
}
else {
    console.log("We need to find users");
} 
