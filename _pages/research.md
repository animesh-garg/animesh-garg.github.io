---
layout: page
title: Research Projects
permalink: /research/
description: 
---


<div class="img_row">
    <img class="col three left" src="{{ site.baseurl }}/assets/img/projects-teaser2021.png" style="object-fit: contain;" alt="" title="Research Overview"/>
</div>

We aim to build algorithms for perceptual representations learned by and for interaction, causal understanding of mechanisms, and physically-grounded reasoning in practical settings. An emblematic north star is to enable an autonomous robot to watch an instructional video, or a set of these videos, and then learn a policy to execute the task in a new setting. This requires progress on several fronts as detailed below. 
PAIR group blends ideas in *Causality*, *Perception*, and *Reinforcement Learning* towards this vision.


### 1. Generalizable Representations in RL for Robotics

A key focus of our work is to understand the role of representations in RL towards efficiency and generalization in skill acquisition. RL is mainly composed of State Space (Input), Action space (Output), a Learning Rule, and Policy (or value) model. 


Structured biases upend contemporary methods in all four dimensions, pointing to a need for deeper analysis of representations in RL.  
States: [Task Oriented Grasping](https://sites.google.com/view/task-oriented-grasp), [Affordance for Tool-Use](https://sites.google.com/view/task-oriented-grasp), [Making Sense of Touch and Vision](https://sites.google.com/view/visionandtouch)  
Actions: [VICES](https://arxiv.org/abs/1906.08880), [LASER](https://www.pair.toronto.edu/laser)  
Algorithms: [C-Learning](https://arxiv.org/abs/2011.12363)  
Architectures: [Deep-Dense nets in RL](https://sites.google.com/view/d2rl/home)  

<div class="img_row">
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-tog.png" style="object-fit: contain;" alt="" title="example image"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-laser-intro.jpg" style="object-fit: contain;" alt="" title="example image"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-clearning.gif" style="object-fit: contain;" alt="" title="example image"/>
</div>

- 3D Vision: Object and Scene representations for manipulation.
- Perceptual Concept Learning
- Geomteric Deep Learning for discovery of symmetries


### 2. Causal Discovery and Inference in Robotics

Causal understanding is one of key pillars of my current and future agenda. A simulator is a generative world model, and similarly follows a system of structural mechanisms. However, model learning focuses solely on statistical dependence, while Causal Models go beyond it to build representations that support intervention, planning, and modular reasoning. These methods provide a concrete step towards bridging vision and robotics through sub-goal inference and counterfactual imagination. 

<div class="img_row">
    <img class="col two left" src="{{ site.baseurl }}/assets/img/res-vcdn.gif" style="object-fit: contain;"  alt="" title="example image"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-acgn.gif" alt="" title="example image"/>
</div>

- Disentangled Generative Models: [Semi-Supervised StyleGAN](https://sites.google.com/nvidia.com/semi-stylegan), [Unsupervised Keypoints](https://github.com/NVIDIA/UnsupervisedLandmarkLearning)
- Causal Factor Graphs: [Visual Causal Discovery](https://yunzhuli.github.io/V-CDN/) 
- Instruction Guided Counterfactual Generation: [Action Concepts](https://iclr-acgn.github.io/ACGN/)


### 3. Crowd-Scale Robot Learning with Offline/Batch RL

Data-driven methods help RL in exploration and reward specification. Robot learning, however, is limited by modest-sized real data. 
Access to data brings new algorithmic opportunities to robotics, as it did in vision and language. However, it also poses challenges due to static nature of data and covariate shifts. 

<div class="img_row">
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-rt-alps.gif"  alt="" title="example image"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-roboturk.png" style="object-fit: contain;" alt="" title="Roboturk"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-coda.png" style="object-fit: contain;" alt="" title="example image"/>    
</div>

- Scalable Teleoperation with Roboturk: [Roboturk-v1](http://roboturk.stanford.edu/), [Roboturk-v2](https://roboturk.stanford.edu/realrobotdataset#tasks)
- Offline/Batch Policy Learning and Causal Data Augmengation: [IRIS](https://sites.google.com/stanford.edu/iris/), [CoDA](https://arxiv.org/abs/2007.02863)
- Safe Transfer to Real Systems: [Adversarial Policy Learning](https://stanfordvl.github.io/ARPL/), [Adaptive Polict Transfer](https://arxiv.org/abs/1707.04674), [Conservative Safety Critics](https://sites.google.com/view/conservative-safety-critics/home)

### 4. Structured Biases for Hierarchical Planning

Procedural reasoning, such as in robotics, needs both skills and their structured composition for interaction planning towards a higher-order objective. 
However, manual composition of skills via a finite state-machine design is both tedious and unscalable. Thus the need for inductive bias is intensified for cognitive reasoning. I have developed imitation guided policy learning in abstract spaces for hierarchically structure tasks.

<div class="img_row">
    <img class="col three left" src="{{ site.baseurl }}/assets/img/res-ntp-small.gif" style="object-fit: contain;" alt="" title="Neural Task Programming"/>
    <!-- <img class="col one left" src="{{ site.baseurl }}/assets/img/res-finding-it.png" alt="" title="Finding It"/>     -->
</div>

- Neural Planning Modules for One-Shot Imitation: [NTP](https://stanfordvl.github.io/ntp/), [NTG](https://arxiv.org/abs/1807.03480), [Continuous Symbolic Planner](https://arxiv.org/abs/1908.06769)
- Task Structure Representations: [Transition State Clustering](https://www.youtube.com/watch?time_continue=2&v=L561cJh7DLE), [TSC-DL](http://berkeleyautomation.github.io/tsc-dl/), [SWIRL](https://animesh.garg.tech/assets/pdf/garg_swirl_ijrr18.pdf)
- Learning from Videos: [Finding-it](https://finding-it.github.io/)
- Dynamics with Latent Hierarchical Structure: [CAVIN](http://pair.stanford.edu/cavin/)

### 5. Applications to Real Robot Systems

The algorithmic ideas have been motivated by problems in mobility and manipulation in robotics, and have been evaluated on various physical robot platforms. 

<div class="img_row">
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-ntp_robust.gif" alt="" title="NTP"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-cavin.gif" alt="" title="CAVIN"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/res-multimodal-test.gif" alt="" title="example image"/>
    <!-- <img class="col one left" src="{{ site.baseurl }}/assets/img/3.jpg" alt="" title="example image"/> -->
</div>

- Personal & Service Robotics: [Tool Use](https://sites.google.com/view/task-oriented-grasp), [Task Planning](https://www.youtube.com/watch?v=OdqJuvAHvGE), [Assembly](https://www.youtube.com/watch?v=NwMukXa8kys&feature=youtu.be), [Pick & place](https://ai.stanford.edu/mech-search/multistep), [Laundry Layout](https://roboturk.stanford.edu/realrobotdataset#tasks)
- Surgical & Healthcare: [Debridement](https://youtu.be/beVWB6NtAaA), [Suturing](https://youtu.be/z1ehShXFToc), [Cutting](https://youtu.be/l6gQg2VbGcc), [Extraction](https://youtu.be/l6gQg2VbGcc), [Radiotherapy](https://www.youtube.com/watch?v=Kk_wHiu8nGg&feature=youtu.be)
- Legged Robotics: [Contact Planning](https://news.developer.nvidia.com/contact-adaptive-controller-locomotion), [Domain Randomization](https://www.pair.toronto.edu/understanding-dr)



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