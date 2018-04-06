// ==UserScript==
// @name         Unembed Gleam Giveaways
// @namespace    https://gleam.io
// @version      1.2
// @description  Unembed Gleam.io giveaways from any page
// @author       ShadyThGod
// @include      *gleam*
// @grant        none
// ==/UserScript==


var giveaway = document.querySelector('.purple-square'); //Selects the space to append the button

var unembedBtn = document.createElement('button'); //Create a NodeElement of the button
unembedBtn.type = 'button';
unembedBtn.innerHTML = '&#x1F875;';
unembedBtn.className = "unembedbtn";
unembedBtn.title = "Unembed Giveaway";
unembedBtn.setAttribute('style', 'float: right; background: rgba(0, 0, 0); border: 0.1px solid rgba(100, 100, 100, 0.4); padding: 5px; margin: 5px; color: white');

giveaway.insertBefore(unembedBtn, giveaway.firstChild); //Inserting the button into the DOM

// Generating the proper gleam giveaway URL
var giveawayURL = 'https://gleam.io/' + giveaway.ownerDocument.URL.split(/.*gleam\.io\//)[1].split(/\/.*/)[0] + '/';
giveawayURL += document.querySelector('h3.ng-binding.ng-scope').innerHTML.replace(/\W/g, '').toLowerCase();
giveawayURL = giveawayURL.replace(/\s/g, '-');

//Opens the proper giveaway link in a new tab on clicking the button
unembedBtn.addEventListener('click', function() {
    window.open(giveawayURL, '_blank');
});