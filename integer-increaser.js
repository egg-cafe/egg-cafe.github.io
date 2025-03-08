
  var lastKnownTime = parseInt(localStorage.getItem('lastKnownTime')) || Math.round(Date.now() / 1000);
  var pageLoadTime = Math.round(Date.now() / 1000);
  var int = parseInt(localStorage.getItem('int')) || 0;
  var allTimeInt = parseInt(localStorage.getItem('allTimeInt')) || 0;
  var mult = parseInt(localStorage.getItem('mult')) || 0;
  var currentCost = parseInt(localStorage.getItem('currentCost')) || 5;
  var idle = parseInt(localStorage.getItem('idle')) || 0;
  var idleCost = parseInt(localStorage.getItem('idleCost')) || 100;
  var domain = parseInt(localStorage.getItem('domain')) || 0;
  var domainCost = parseInt(localStorage.getItem('domainCost')) || 1000;
  var god = parseInt(localStorage.getItem('god')) || 0;
  var godCost = parseInt(localStorage.getItem('godCost')) || 10000;
  var tree = parseInt(localStorage.getItem('tree')) || 0;
  var treeCost = parseInt(localStorage.getItem('treeCost')) || 5000;
  var grandMult = parseInt(localStorage.getItem('grandMult')) || 1;
  var changelog = "Updated Changelog, among other things.";
  var isShownChangelog = 0;//This value doesn't need to be stored.
  var isShownReviews = 0;
  var amazingReviewsFrfr = "10/10 best clicker i've played in years - byeoon";
  var baseValueIdle = 100;
  var baseValueDomain = 1000;
  var baseValueTree = 5000;
  var baseValueGod = 10000;
  var baseValueCurrentCost = 5;
  var dryCranberryBaseCost = 10000000;
  var dryCranberry = parseInt(localStorage.getItem('dryCranberry')) || 0;
  var dryCranberryCost = parseInt(localStorage.getItem('dryCranberryCost')) || 10000000;
  var health = parseInt(localStorage.getItem('health')) || 1;
  var upgradeIdle = parseInt(localStorage.getItem('upgradeIdle')) || 0;
  var upgradeIdleUpgradePercent = parseFloat(localStorage.getItem('upgradeIdleUpgradePercent')) || 1;
  var upgradeIdleCost = parseInt(localStorage.getItem('upgradeIdleCost')) || 10000;
  var upgradeIdleBaseCost = 10000;
  var upgradeDomain = parseInt(localStorage.getItem('upgradeDomain')) || 0;
  var upgradeDomainUpgradePercent = parseFloat(localStorage.getItem('upgradeDomainUpgradePercent')) || 1;
  var upgradeDomainCost = parseInt(localStorage.getItem('upgradeDomainCost')) || 100000;
  var upgradeDomainBaseCost = 100000;
  var upgradeTree = parseInt(localStorage.getItem('upgradeTree')) || 0;
  var upgradeTreeUpgradePercent = parseFloat(localStorage.getItem('upgradeTreeUpgradePercent')) || 1;
  var upgradeTreeCost = parseInt(localStorage.getItem('upgradeTreeCost')) || 500000
  var upgradeTreeBaseCost = 500000;
  var shrimp = parseInt(localStorage.getItem('shrimp')) || 0;
  var shrimpCost = parseInt(localStorage.getItem('shrimpCost')) || 15000;
  var baseValueShrimp = 15000;
  var upgradeShrimpUpgradePercent = parseFloat(localStorage.getItem('upgradeShrimpUpgradePercent')) || 1;
  var upgradeShrimp = parseInt(localStorage.getItem('upgradeShrimp')) || 0;
  var upgradeShrimpCost = parseInt(localStorage.getItem('upgradeShrimpCost')) || 1500000;
  var upgradeShrimpBaseCost = 1500000;
  var cRH = parseInt(localStorage.getItem('cRH')) || 0;
  var cRHCost = parseInt(localStorage.getItem('cRHCost')) || 500000;
  var baseValuecRH = 500000;
  var upgradecRHUpgradePercent = parseInt(localStorage.getItem('upgradecRHUpgradePercent')) || 1;
  var upgradecRH = parseInt(localStorage.getItem('upgradecRH')) || 0;
  var upgradecRHCost = parseInt(localStorage.getItem('upgradecRH')) || 10000000;
  var upgradecRHBaseCost = 10000000;
  var intPerSecond = Math.round(((idle*grandMult*upgradeIdleUpgradePercent)+(domain*3*grandMult*upgradeDomainUpgradePercent)+(tree*7*grandMult*upgradeTreeUpgradePercent)+(shrimp*15*grandMult*upgradeShrimpUpgradePercent)+(cRH*50*grandMult*upgradecRHUpgradePercent))) || 0;//I really need to use this value more often
  setAll();
  awayInt();
  saveToLocalStorage();
  function upgradeUpgrade() {
    if (int >= upgradeIdleCost) {
    upgradeIdle += 1;
    upgradeIdleUpgradePercent += 0.10;
    int = int-upgradeIdleCost;
    upgradeIdleCost = Math.round(upgradeIdleBaseCost * (1.30**upgradeIdle));
    update();
    }
    document.getElementById("upgradeCost").innerHTML = "The cost to upgrade your servant's living conditions is " + (upgradeIdleCost) + " Int.";
    document.getElementById("upgradeIdle").innerHTML = "You have upgraded his living condition " + (upgradeIdle) + " times.";
  }  
  function reset() {
    lastKnownTime = Math.round(Date.now() / 1000);
    pageLoadTime = Math.round(Date.now() / 1000);
    int = 0;
    mult = 0;
    currentCost = 5;
    idle = 0;
    idleCost = 100;
    domain = 0;
    domainCost = 1000;
    god = 0;
    godCost = 10000;
    grandMult = 1;
    isShownChangelog = 0;
    baseValueIdle = 100;
    baseValueDomain = 1000;
    baseValueGod = 10000;
    baseValueTree = 5000;
    baseValueCurrentCost = 5;
    dryCranberryBaseCost = 10000000;
    dryCranberry =  0;
    dryCranberryCost = 10000000;
    intPerSecond = 0;
    tree = 0;
    treeCost = 5000;
    health = 1;
    upgradeIdle = 0;
    upgradeIdleCost = 10000;
    upgradeIdleBaseCost = 10000;
    upgradeIdleUpgradePercent = 1;
    upgradeDomain = 0;
    upgradeDomainUpgradePercent = 1;
    upgradeDomainCost = 100000;
    upgradeDomainBaseCost = 100000;
    upgradeTree = 0;
    upgradeTreeUpgradePercent = 1;
    upgradeTreeCost = 500000;
    upgradeTreeBaseCost = 500000;
    shrimp = 0;
    shrimpCost = 15000;
    baseValueShrimp = 15000;
    upgradeShrimpUpgradePercent = 1;
    upgradeShrimp = 0;
    upgradeShrimpCost = 1500000;
    upgradeShrimpBaseCost = 1500000;
    cRH = 0;
    cRHCost = 500000;
    baseValuecRH = 500000;
    upgradecRHUpgradePercent = 1;
    upgradecRH = 0;
    upgradecRHCost = 10000000;
    upgradecRHBaseCost = 10000000;
    allTimeInt = 0;
    setAll();
    saveToLocalStorage();
  }
  function confReset() {
    if (confirm("Are you sure you want to reset?")) {
      reset()
    }else {
      alert("You decided to not reset!");
    }
}
  function awayInt() {
    if (pageLoadTime > lastKnownTime) {
      int += Math.round((intPerSecond * (pageLoadTime - lastKnownTime))/2);
    }  
  }  
  function wasteMoney() {
    if (int >= dryCranberryCost) {
      dryCranberry += 1;
      int = int-dryCranberryCost;
      dryCranberryCost = Math.round(dryCranberryBaseCost * (10**dryCranberry));
    }  
    document.getElementById("cranberryCost").innerHTML = "The cost to buy a dry cranberry is "+ (dryCranberryCost) + " Int.";
    document.getElementById("cranberryCount").innerHTML = "You have bought " + dryCranberry + " dry Cranberries. Why.";
    update();
  }   
  function treeLevel() {
    if (int >= treeCost) {
    tree += 1;
    int = int-treeCost;
    treeCost = Math.round(baseValueTree * (1.20**tree));
    update();
    }
    document.getElementById("treeCost").innerHTML = "The cost to buy a tree is " + (treeCost) + " Int.";
    document.getElementById("treeLevel").innerHTML = "You have " + (tree) + " trees.";
  }
  function changelogReal() {
    if (isShownChangelog == 0) {
      isShownChangelog = 1;
      document.getElementById("showChangelog").innerHTML = changelog;
    } else if (isShownChangelog == 1) {
      isShownChangelog = 0;
      document.getElementById("showChangelog").innerHTML = "Click to show/hide changelog.";
    } 
  }  
  function reviewReal() {
    if (isShownReviews == 0) {
      isShownReviews = 1;
      document.getElementById("showReviews").innerHTML = amazingReviewsFrfr;
    } else if (isShownReviews == 1) {
      isShownReviews = 0;
      document.getElementById("showReviews").innerHTML = "Click to show/hide our amazing reviews.";
    } 
  }  
  function setAll() {
  document.getElementById("Count").innerHTML = (Math.round(int) + " Int.");
  document.getElementById("currentCost").innerHTML = "Current Cost is " + (currentCost) + " Int.";
  document.getElementById("upgrade").innerHTML = "Your current upgrade level is " + mult + ".";
  document.getElementById("idleCost").innerHTML = "Current cost is " + (idleCost) + " Int.";
  document.getElementById("idleLv").innerHTML = "You have " + idle + " employees.";
  document.getElementById("idleCost").innerHTML = "Current cost is " + (idleCost) + " Int.";
  document.getElementById("domainCost").innerHTML = "Current cost is " + (domainCost) + " Int.";
  document.getElementById("domainLevel").innerHTML = "You have " + domain + " sorcerers opening domains.";
  document.getElementById("title").innerHTML = ("Integer Increaser - " + int + " Int");
  document.getElementById("godCost").innerHTML = "The cost to bribe God is "+ (godCost) + " Int.";
  document.getElementById("godLv").innerHTML = "You have bribed God " + god + " times.";
  document.getElementById("intPerSecond").innerHTML = "Your idle int per second is " + intPerSecond + " Int/Second.";//Important
  document.getElementById("cranberryCost").innerHTML = "The cost to buy a dry cranberry is "+ (dryCranberryCost) + " Int.";
  document.getElementById("cranberryCount").innerHTML = "You have bought " + dryCranberry + " dry Cranberries. Why.";
  document.getElementById("treeCost").innerHTML = "The cost to buy a tree is " + (treeCost) + " Int.";
  document.getElementById("treeLevel").innerHTML = "You have " + (tree) + " trees.";
  document.getElementById("upgradeCost").innerHTML = "The cost to upgrade your servant's living conditions is " + (upgradeIdleCost) + " Int.";
  document.getElementById("upgradeIdle").innerHTML = "You have upgraded his living condition " + (upgradeIdle) + " times.";
  document.getElementById("domainUpgradeCost").innerHTML = "Current cost to upgrade the range is " + (upgradeDomainCost) + " Int.";
  document.getElementById("domainUpgradeLevel").innerHTML = "You have increased the range " + upgradeDomain + " times.";
  document.getElementById("treeUpgradeCost").innerHTML = "Current cost of fertilizer is " + (upgradeTreeCost) + " Int.";
  document.getElementById("treeUpgradeLevel").innerHTML = "You have bought " + upgradeTree + " bags of fertilizer.";
  document.getElementById("shrimpCost").innerHTML = "Current cost is " + (shrimpCost) + " Int.";
  document.getElementById("shrimpLevel").innerHTML = "You have " + shrimp + " bowls of shrimp fried rice.";
  document.getElementById("shrimpUpgradeCost").innerHTML = "Current cost of the shrimp in question is " + (upgradeShrimpCost) + " Int.";
  document.getElementById("shrimpUpgradeLevel").innerHTML = "You have bought the shrimp in question " + upgradeShrimp + " times.";
  document.getElementById("cRHCost").innerHTML = "Current cost is " + (cRHCost) + " Int.";
  document.getElementById("cRHLevel").innerHTML = "You have visted the Chicago Rat Hole " + cRH + " times";
  document.getElementById("cRHUpgradeCost").innerHTML = "The rat would like the next offering to be " + (upgradecRHCost) + " Int.";
  document.getElementById("cRHUpgradeLevel").innerHTML = "You have made an offering " + upgradecRH + " times.";
  document.getElementById("allTheInt").innerHTML = "You've made a total of " + allTimeInt + " Int.";
  }  
  function saveToLocalStorage() {
  localStorage.setItem('int', int.toString());
  localStorage.setItem('mult', mult.toString());
  localStorage.setItem('currentCost', currentCost.toString());
  localStorage.setItem('idle', idle.toString());
  localStorage.setItem('idleCost', idleCost.toString());
  localStorage.setItem('domain', domain.toString());
  localStorage.setItem('domainCost', domainCost.toString());
  localStorage.setItem('god', god.toString());
  localStorage.setItem('godCost', godCost.toString());
  localStorage.setItem('grandMult', grandMult.toString());
  localStorage.setItem('dryCranberry', dryCranberry.toString());
  localStorage.setItem('dryCranberryCost', dryCranberryCost.toString());
  localStorage.setItem('lastKnownTime', lastKnownTime.toString());
  localStorage.setItem('tree', tree.toString());
  localStorage.setItem('treeCost', treeCost.toString());
  localStorage.setItem('health', health.toString());
  localStorage.setItem('upgradeIdle', upgradeIdle.toString());
  localStorage.setItem('upgradeIdleCost', upgradeIdleCost.toString());
  localStorage.setItem('upgradeIdleUpgradePercent', upgradeIdleUpgradePercent.toString());
  localStorage.setItem('upgradeDomain', upgradeDomain.toString());
  localStorage.setItem('upgradeDomainCost', upgradeDomainCost.toString());
  localStorage.setItem('upgradeDomainUpgradePercent', upgradeDomainUpgradePercent.toString());
  localStorage.setItem('upgradeTree', upgradeTree.toString());
  localStorage.setItem('upgradeTreeCost', upgradeTreeCost.toString());
  localStorage.setItem('upgradeTreeUpgradePercent', upgradeTreeUpgradePercent.toString());
  localStorage.setItem('shrimp', shrimp.toString());
  localStorage.setItem('shrimpCost', shrimpCost.toString());
  localStorage.setItem('upgradeShrimpUpgradePercent', upgradeShrimpUpgradePercent.toString());
  localStorage.setItem('upgradeShrimp', upgradeShrimp.toString());
  localStorage.setItem('upgradeShrimpCost', upgradeShrimpCost.toString());
  localStorage.setItem('cRH', cRH.toString());
  localStorage.setItem('cRHCost', cRHCost.toString());
  localStorage.setItem('upgradecRHUpgradePercent', upgradecRHUpgradePercent.toString());
  localStorage.setItem('upgradecRH', upgradecRH.toString());
  localStorage.setItem('upgradecRHCost', upgradecRHCost.toString());
  localStorage.setItem('allTimeInt', allTimeInt.toString());
  //localStorage.setItem I need this to copy paste later. | Later is now 10/5/24
  }
  function tempReset() {
    shrimp=0;
    shrimpCost = Math.round(baseValueShrimp * (1.20**shrimp));
    update();
  } 
  function buyGod() {
   if (int >= godCost) { 
    god +=1;
    grandMult +=1;
    int = int - (godCost);
     godCost = Math.round(baseValueGod * (3**god));
     update();
   }
    document.getElementById("godCost").innerHTML = "The cost to bribe God is "+ (godCost) + " Int.";
    document.getElementById("godLv").innerHTML = "You have bribed God " + god + " times.";
  }  
  function update() {
  document.getElementById("Count").innerHTML = (Math.round(int) + " Int.");
  document.getElementById("title").innerHTML = ("Integer Increaser - " + int + " Int");
  intPerSecond = Math.round(((idle*grandMult*upgradeIdleUpgradePercent)+(domain*3*grandMult*upgradeDomainUpgradePercent)+(tree*7*grandMult*upgradeTreeUpgradePercent)+(shrimp*15*grandMult*upgradeShrimpUpgradePercent)+(cRH*50*grandMult*upgradecRHUpgradePercent)));//This is important. Control + F to find this in the future.
  document.getElementById("intPerSecond").innerHTML = "Your idle int per second is " + intPerSecond + " Int/Second.";
  document.getElementById("allTheInt").innerHTML = "You've made a total of " + allTimeInt + " Int. (All time)";
  saveToLocalStorage();
  } 
  function domainLevel() {
    if (int >= domainCost) {
      domain +=1;
      int = int - (domainCost);
      domainCost = Math.round(baseValueDomain * (1.20**domain));
      update();
    }  
    document.getElementById("domainCost").innerHTML = "Current cost is " + (domainCost) + " Int.";
    document.getElementById("domainLevel").innerHTML = "You have " + domain + " sorcerers opening domains.";
  }
  function idleLevel() {
  if (int >= idleCost) {
  idle += 1;
  int = int - (idleCost);
  idleCost = Math.round(baseValueIdle * (1.20**idle));
  update();
  }
  document.getElementById("idleCost").innerHTML = "Current cost is " + idleCost + " Int.";
  document.getElementById("idleLv").innerHTML = "You have " + idle + " employees";
  }
  function basicClicker() {
  int += ((1 + mult)*grandMult);
  update();
  }
  function upgrade() {
  if (int >= currentCost) {
  mult += 1;
  int = int - (currentCost);
  currentCost = Math.round(baseValueCurrentCost * (1.20**mult));
  update();
  }
  document.getElementById("currentCost").innerHTML = "Current cost is " + (currentCost) + " Int.";
  document.getElementById("upgrade").innerHTML = "Your current upgrade level is " + mult + ".";
  }
  setInterval(() => {
    int += intPerSecond;
    update();
  }, 1000);
  function getLastKnownTimePlease() {
    lastKnownTime = Math.round(Date.now() / 1000)
    update();
  }  
  function upgradeDomainReal() {
    if (int >= upgradeDomainCost) {
      upgradeDomain +=1;
      upgradeDomainUpgradePercent += 0.10;
      int = int - (upgradeDomainCost);
      upgradeDomainCost = Math.round(upgradeDomainBaseCost * (1.30**upgradeDomain));
      update();
    }  
    document.getElementById("domainUpgradeCost").innerHTML = "Current cost to upgrade the range is " + (upgradeDomainCost) + " Int.";
    document.getElementById("domainUpgradeLevel").innerHTML = "You have increased the range " + upgradeDomain + " times.";
  } 
   function treeUpgradeReal() {
    if (int >= upgradeTreeCost) {
      upgradeTree +=1;
      upgradeTreeUpgradePercent += 0.10;
      int = int - (upgradeTreeCost);
      upgradeTreeCost = Math.round(upgradeTreeBaseCost * (1.30**upgradeTree));
      update();
    }
     document.getElementById("treeUpgradeCost").innerHTML = "Current cost of fertilizer is " + (upgradeTreeCost) + " Int.";
     document.getElementById("treeUpgradeLevel").innerHTML = "You have bought " + upgradeTree + " bags of fertilizer.";
  }  
  function shrimpLevel() {
    if (int >= shrimpCost) {
      shrimp +=1;
      int = int - (shrimpCost);
      shrimpCost = Math.round(baseValueShrimp * (1.20**shrimp));
      update();
    }  
    document.getElementById("shrimpCost").innerHTML = "Current cost is " + (shrimpCost) + " Int.";
    document.getElementById("shrimpLevel").innerHTML = "You have " + shrimp + " bowls of shrimp fried rice.";
  }
  function shrimpUpgradeReal() {
    if (int >= upgradeShrimpCost) {
      upgradeShrimp +=1;
      upgradeShrimpUpgradePercent += 0.10;
      int = int - (upgradeShrimpCost);
      upgradeShrimpCost = Math.round(upgradeShrimpBaseCost * (1.30**upgradeShrimp));
      update();
    }
     document.getElementById("shrimpUpgradeCost").innerHTML = "Current cost of the shrimp in question is " + (upgradeShrimpCost) + " Int.";
     document.getElementById("shrimpUpgradeLevel").innerHTML = "You have bought the shrimp in question " + upgradeShrimp + " times.";
  }  
  function cRHLevel() {
    if (int >= cRHCost) {
      cRH +=1;
      int = int - (cRHCost);
      cRHCost = Math.round(baseValuecRH * (1.20**cRH));
      update();
    }  
    document.getElementById("cRHCost").innerHTML = "Current cost is " + (cRHCost) + " Int.";
    document.getElementById("cRHLevel").innerHTML = "You have visted the Chicago Rat Hole " + cRH + " times";
  }
  function cRHUpgradeReal() {
    if (int >= upgradecRHCost) {
      upgradecRH +=1;
      upgradecRHUpgradePercent += 0.10;
      int = int - (upgradecRHCost);
      upgradecRHCost = Math.round(upgradecRHBaseCost * (1.30**upgradecRH));
      update();
    }
     document.getElementById("cRHUpgradeCost").innerHTML = "The rat would like the next offering to be " + (upgradecRHCost) + " Int.";
     document.getElementById("cRHUpgradeLevel").innerHTML = "You have made an offering " + upgradecRH + " times.";
  }  
  window.addEventListener('beforeunload', getLastKnownTimePlease());