var levelUp = levelUp || {};

levelUp.animation = levelUp.animation || {};

levelUp.animation.showApplication = function() {
  $("#hero").slideUp();
  $("#form").slideDown();
}

levelUp.animation.hideApplication = function() {
  $("#hero").slideDown();
  $("#form").slideUp();
}
