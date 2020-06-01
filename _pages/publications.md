---
layout: page
permalink: /publications/
title: publications
description: 
years: 
---

For the up-to-date publication list, please see [Google Scholar](http://scholar.google.com/citations?user=zp8V7ZMAAAAJ&hl=en) or [Semantic Scholar](https://www.semanticscholar.org/author/Animesh-Garg/1873736) pages.

{% bibliography %}

<!--  -->
<script>
function myFunction() {
  var list = document.getElementsByClassName("post-content publications clearfix")[0];
  list.getElementsByClassName("child")[0].innerHTML = "Milk";
}
</script>


<!-- preprints -->

<!-- Publications -->

<!-- Workshops -->

<!-- Patents -->

<!-- thesis -->

<!-- 
{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %} 
-->