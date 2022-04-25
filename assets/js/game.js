var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;


console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that is worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check enemy's health 
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subract the value of enemyAttack form the value of playerHealth and use that result to update the value in the playerHealth variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that is worked.
    console.log(
        enemyName + " Attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reamining. "
    );

    // check player health
    if (playerHealth <=0) {

        window.alert(playerName + " Has Died!");
    }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();

var promptFight = window.prompt("Would you like to FIGHT or SKIP this Battle? Enter 'FIGHT' or SKIP to choose.");

if (promptFight === "fight" || promptFight === "FIGHT") {

    enemyHealth = enemyHealth - playerAttack;

    console.log (
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health 
    if ( enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

// remove players health by subtracting the amount set in the enemyAttack variable

playerHealth = playerHealth - enemyAttack;

console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check players health

if (playerHealth <=0) {
    window.alert(playerName + " health left.");
} else {
    window.alert(playerName + "still has " + playerHealth + "health left.");
}



}