const judgeVegetable = function (vegetables, metric) {
  var veg;
  if(vegetables[0][metric] > vegetables[1][metric])
  { if(vegetables[0][metric] > vegetables[2][metric])
    { veg = vegetables[0].submitter; }
    else
    { veg = vegetables[2].submitter; }
  } else if (vegetables[1][metric] > vegetables[2][metric])
  { veg = vegetables[1].submitter; }
  else
  { veg = vegetables[2].submitter; }
  return veg;  
}
