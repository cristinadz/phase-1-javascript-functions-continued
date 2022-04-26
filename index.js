function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun("dance");

function mondayWork(labor = "go to the office") {
  return `This Monday, I will ${labor}.`;
}
saturdayFun("work from home");

function wrapAdjective(deco = "*") {
  const innerFunction = function (adjective = "special") {
    return `You are ${deco}${adjective}${deco}!`;
  };
  return innerFunction;
}

wrapAdjective("%")("a dedicated programer");
