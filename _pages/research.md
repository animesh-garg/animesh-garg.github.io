---
layout: default
title: research
permalink: /research/
description: 
---

<div class="img_row" style="height: 150px;">
    <a href="http://pair.toronto.edu" target="_blank"><img class="col three left" src="{{ site.baseurl }}/assets/img/pair-logo.png" style="object-fit: contain;" alt="" title="People, AI, and Robots"/></a>
</div>

## [People, AI, and Robots Group](http://pair.toronto.edu)

My group works on Generalizable Autonomy in Robotics. 
My research vision is to enable robotic systems that: learn hierarchical control tasks by watching humans, seamlessly interact and collaborate with humans, and learn to improve performance and acquire new skills through self-practice. And my approach to these challenges develops algorithmic methods to enable efficient robot learning for long-term sequential tasks through Generalizable Autonomy.

I bring together expertise from areas of Reinforcement Learning, Optimal Control and Computer Vision. The principal focus of my research is to understand representations and algorithms to enable the efficiency and generality of learning for interaction in autonomous agents. My research combines model-based control with data-driven policy learning under unstructured perceptual inputs. And my prior work also reflects on broad applications of my methods, ranging from personal to medical robotics. I am eager to continue researching fundamental questions in general-purpose intelligence for interactive robotic agents.

<!-- 
My work can broadly be divided into topics as follows:

{% for project in site.projects %}

{% if project.redirect %}
<div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}

<div class="project ">
    <div class="thumbnail">
        <a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>

{% endif %}

{% endfor %}
 -->