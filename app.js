$(document).ready(function() {
    $("#actionInput").focus();

    let health = 100;
    let hunger = 50;
    let thirst = 50;
    let goldAmt = 0;
    // *list of nearby entities
    // *list of items in inventory
    // *list of discovered items
    // *equipped item
    // *dictionary with all items and info about them
    //      Orgnized key:value --> item:info
    //      This resource will help: https://flexiple.com/javascript-dictionary/

    //Item info dictionary
    var itemInfo = {
        ammo: "Normal gun ammo.  Can be used with pistols and shotguns",
        axe: "A sharpened axe.  Used to cut down trees and attack enemies.  Deals 20-25 damage",
        crowbar: "A rusty crowbar.  Deals 30-35 damage",
        sword: "A sharpened sword.  Its blade glistens in the light.  Deals 40-50 damage",
        pistol: "A small pistol.  It feels heavy in your hand.  Deals 50-65 damage",
        shotgun: "A shotgun.  Deals 65-80 damage",
        grenade: "A small hand grenade.  Deals 80-100 damage",
        painkillers: "Tiny painkiller tablets.  Restores 15 Health",
        bandages: "A roll of bandages.  Restores 30 Health",
        med_kit: "A Med Kit.  This will really fix you up.  Restores 45 Health",
        bread: "A warm roll of bread.  Nothing wrong with the basics.  Restores 10 Hunger",
        steak: "A Delicious Steak.  Bon Apetit!  Restores 25 Hunger",
        fish: "A good ol' fish.  Restores 15 Hunger Points",
        mre: "An MRE pack.  Just what you need for a complete meal.  Restores 30 Hunger, 20 Thirst, and 20 Health",
        mystery_meat: "Ewww, some mystery meat.  Desparate times call for desparate measures, I guess... Restores 20 Hunger, but has a 35% chance of dealing 20 damage to you",
        water_bottle: "A bottle of water.  Restores 20 Thirst and 10 Health",
        soda: "A nice can of soda. A delicacy in this apocalyptic era.  Restores 25 Thirst",
        electrolytes: "A bottle of electrolytes that will give you a rush.  Restores 30 Thirst and 15 Health",
        gold: "Gold.  A rare and valuable commodity in this day and age.  You have " + goldAmt + " gold",
        gasoline: "A can of gasoline.  Used to refuel vehicles",
        lumber: "Some lumber.  You can board up windows in your home base with this",
        radio: "An old radio.  This might come in handy..."
    };

    text = document.getElementsByClassName("text")[0];
    var input = $("#actionInput");
    var form = $("#inputForm");

    //Calls input handling functions and refocuses input window
    form.submit(function(e) {
        e.preventDefault();
        updateMessage();
        $("#actionInput").focus();
    });

    //Updates message box
    function updateMessage() {
        //Echo input text into message box
        var val = input.val();

        var echoDiv = document.createElement("div");
        echoDiv.style.color = "rgb(100, 100, 100)";
        echoDiv.style.paddingTop = "1rem";
        echoDiv.appendChild(document.createTextNode(val));

        //Calls function that will handle responses to input
        if($.trim(val) != "") {
            $("#text").append(echoDiv);
            processInput(val);
        }
        
        //Keep text scrolled to bottom and reset input box
        var textContainer = document.getElementById("textContainer");
        textContainer.scrollTop = textContainer.scrollHeight;

        $("#actionInput").val("");
    }

    //Handles the responses to player input
    function processInput(val) {
        var message = document.createElement("div");
        message.style.color = "white";
        message.className = "message";
        let returnMessage = "";

        //Command handling functions will be here//
        let inputList = val.split(" ");
        let command = inputList[0].toLowerCase();
        let args = inputList.slice(1);
        args = args.join(' ').toLowerCase();
        
        switch(command) {
            case "info":
                returnMessage = infoCommand(args);
                break;
            case "?":
                returnMessage = infoCommand(args);
                break;
            default:
                returnMessage = "Command: '" + command + "' not recognized.  Enter 'help' for list of commands"
        }

        //Return message
        message.appendChild(document.createTextNode(returnMessage));
        $("#text").append(message);
    }

    //// -- COMMAND HANDLING FUNCTIONS -- \\\\
    function infoCommand(object) {
        switch(object) {
            case "":
                return "To get item info, enter 'item' and then type the item you would like to examine (for example: 'info ax')"
            case "ammo":
                return itemInfo.ammo;
            case "ax":
                return itemInfo.axe;
            case "axe":
                return itemInfo.axe;
            case "crowbar":
                return itemInfo.crowbar;
            case "pistol":
                return itemInfo.pistol;
            case "shotgun":
                return itemInfo.shotgun;
            case "grenade":
                return itemInfo.grenade;
            case "painkillers":
                return itemInfo.painkillers;
            case "bandages":
                return itemInfo.bandages;
            case "bandage":
                return itemInfo.bandages;
            case "med kit":
                return itemInfo.med_kit;
            case "first aid kit":
                return itemInfo.med_kit;
            case "bread":
                return itemInfo.bread;
            case "steak":
                return itemInfo.steak;
            case "steak":
                return itemInfo.steak;
            case "fish":
                return itemInfo.fish;
            case "mre":
                return itemInfo.mre;
            case "mystery meat":
                return itemInfo.mystery_meat;
            case "water bottle":
                return itemInfo.water_bottle;
            case "soda":
                return itemInfo.soda;
            case "electrolytes":
                return itemInfo.electrolytes;
            case "gold":
                return itemInfo.gold;
            case "gasoline":
                return itemInfo.gasoline;
            case "lumber":
                return itemInfo.lumber;
            case "radio":
                return itemInfo.radio;
            default:
                return "There is no " + object + " nearby."
        }
    }

    function getCommand(object) {

    }
    ////\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\\\
});

/*

// player_info object; the values are the point system
let player_info = {health:100, hunger:50, thrist:50}
// player_inventory object; the values are the number of items
let player_inventory = {capacity:15, ax:1, bread:2, Water:1, painkillers:3}
// time_cycle object; the cycle value the is # of times to complete cycle, and the day and night 
// values are the ranges during the cycle for when it is day or night
let time_cycle = {cycle:50, day:0-29, night:30-49}
// weapons_item object; the value for ammo is the # of bullets, the values for the rest of are the range
//  for the damage points
let weapons_items = {ammo:25, ax: 20-25, crowbar:30-35, shotgun:50-75, pistol:45-55, grenade:75-100} 
// health_items object; the values are the points of health received
let health_items = {painkillers:15, first_aid:45, bandages:30}
// food_items object; the values are the points of hunger received
let food_items = {bread:5, steak:25, fish:15, mre:30, mystery_meat:20}
// drink_items object; the vlaues are the point of thrist received
let drink_items = {water:20, soda:25, electrolyte:30}*/
