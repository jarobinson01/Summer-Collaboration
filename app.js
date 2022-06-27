$(document).ready(function(){
});

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
let drink_items = {water:20, soda:25, electrolyte:30}
