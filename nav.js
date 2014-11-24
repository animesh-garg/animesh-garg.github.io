//<![CDATA[
$(document).ready(function(){
  // Highlight the navbar link that corresponds to the current page
  // simply by making it not a link
  var path_url = window.location.pathname;
  //take the baseurl out of the path.
  var base_url = "/~animesh.garg";
  //var base_url = "http://www.eecs.berkeley.edu/~animesh.garg";
  var pathname = path_url.replace(base_url,"");
  
  if (pathname=="/") {
    $("a#home").replaceWith("Animesh Garg");
  }
  else if (pathname.match("/research/.")) {
    $("a#research").replaceWith("Research (<a href=\""+base_url+"/research/\">more</a>)");
  }
  else if (pathname.match("/research/")) {
    $("a#research").replaceWith("Research");
  }
  else if (pathname.match("/publications")) {
    $("a#publications").replaceWith("Publications");
  }
  else if (pathname.match("/articles/.")) {
    $("a#blog").replaceWith("Blog (<a href=\""+base_url+"/articles/\">more</a>)");
  }
  else if (pathname.match("/articles/")) {
    $("a#blog").replaceWith("Blog");
  } 
  else if (pathname.match("/resume/")) {
    $("a#resume").replaceWith("Resume");
  }
  else if (pathname.match("/misc/.")) {
    $("a#misc").replaceWith("Misc (<a href=\""+base_url+"/misc/\">more</a>)");
  }
  else if (pathname.match("/misc/")) {
    $("a#misc").replaceWith("Misc");
  }
  else if (pathname.match("/people/")) {
    $("a#people").replaceWith("People");
  }
  /*else if (pathname.match("/fun/")) {
    $("a#fun").replaceWith("Fun");
  }
  else if (pathname.match("/links/")) {
    $("a#links").replaceWith("Links");
  }
  else if (pathname.match("/colophon/")) {
    $("a#colophon").replaceWith("Colophon");
  }
  */
});
//]]>
