const shrek = document.getElementById("shrek");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickupgrade = document.getElementById("clickupgrade");

let shrekies = 0;
let autoclickerPrice = 100;
let autoclickerIncrease = 0;

let clickupgradePrice = 50;
let clickupgradeIncrease = 1;

shrek.onclick = () => {
  shrekies+= clickupgradeIncrease;
  counter.innerHTML = shrekies;
};
clickupgrade.onclick = () => {
    if (shrekies >= clickupgradePrice) {
        shrekies -= clickupgradePrice;
        counter.innerHTML = shrekies;
        clickupgradePrice *= 2;
        clickupgrade.innerHTML = ` Buy click upgrade: ${clickupgradePrice}`;
        clickupgradeIncrease++;
    }
}


autoclicker.onclick = () => {
  if (shrekies >= autoclickerPrice) {
    shrekies -= autoclickerPrice;
    counter.innerHTML = shrekies;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      setInterval(()=> {
        shrekies += autoclickerIncrease;
        counter.innerHTML = shrekies;
      },1);
    }
    autoclickerIncrease++;
  }
};
