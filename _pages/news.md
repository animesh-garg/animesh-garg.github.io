---
layout: default
title: news
permalink: /news/
description: 
---

<div class="img_row" style="height: 150px;">
    <img class="col three left" src="{{ site.baseurl }}/assets/img/pair-logo.png" style="object-fit: contain;" alt="" title="People, AI, and Robots"/>
</div>

<div class="news">
  <h2>News Archive</h2>
  {% if site.news  %}
    <table>
    {% assign news = site.news | reverse %}
    {% for item in news %}
      <tr>
        <td class="date">{{ item.date | date: "%b %-d, %Y" }}</td>
        <td class="announcement">
          {% if item.inline %}
            {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
          {% else %}
            <a class="news-title" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
    </table>
  {% else %}
    <p>No news so far...</p>
  {% endif %}
</div>