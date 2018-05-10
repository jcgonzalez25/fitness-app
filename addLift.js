$(document).ready(function(){main();});
const setup = {
  default_tab:'recents',
  color:'blue',
  current_tab: null
};

function setTab(trigger_class = null){
  if(setup.current_tab != null || setup.current_tab == trigger_class){
    $("#" + setup.current_tab).css('color',"#696969")
  }
  setup.current_tab = trigger_class;
  $("#" + setup.current_tab).css("color","blue");
}

function main(){
  highlighted_tab = setup.current_tab == null? setup.default_tab: setup.current_tab;
  setTab(highlighted_tab);


}
