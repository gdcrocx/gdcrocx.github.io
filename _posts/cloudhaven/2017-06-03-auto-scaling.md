---
layout: "blogarticle"
title: "Auto-scaling on Cloud"
meta: "To-do: Auto-scaling on Cloud based infrastructure (IaaS) and Platform based PaaS platforms."
author: "George Davis"
source: "Personal writing"
category: "cloudhaven"
date: "June 03, 2017"
status: "published"
---

<!-- <h3>Auto-scaling</h3> -->

<div class="do-not-publish">
<h3>Checklist</h3>
<ul>
<li>Intro</li>
<li>Definition</li>
<li>Purpose</li>
<li>Available Services</li>
<li>Service Integration and Endpoints</li>
<li>Reference Architecture</li>
<li>Containers and their evolution limitations</li>
<li>Conclusion</li>
</ul>

<h3>Article Gist</h3>
<ul>
<li>The needs for auto-scaling</li>
<li>Why auto-scaling is the Cloud way for applications and huge workloads</li>
<li>Why auto-scaling by metrics and not any other way</li>
<li>Steps to work out before auto-scaling</li>
<li>What to auto-scale</li>
<li>How to avoid auto-scaling everything</li>
<li>How to set thresholds to auto-scaling</li>
</ul>
</div>

<strong>Auto-scaling: An Introduction</strong>
<p>Auto-scaling is the key feature in the Cloud if you are an App/Web based company, budding startup or a fully grown enterprise looking to improve your service and ROI on your existing infrastructure.
</p>
<p>It provides you with the level of scale unlike any physical infrastructure. The scale ranges from a set minimum number of resources to a flexible maximum set of resources to support your internet facing requests and demand, only limited by the Cloud's global infrastructure.
</p>
<strong>Need for Auto-scaling</strong>
<p>Typically now, small businesses get a huge load of requests on the Web with SEO and intuitive Ad campaigns. Startups beat the Internet with better and innovative ideas of going about our day-to-day lives and become the next big thing in a matter of hours/days. In the traditional IT scenario, the scale here is limitless and quickly becomes immeasurable until the point of no return where there is a bottleneck in the infrastructure serving this genuine, thought provoking fun idea < End-of-Story >.
</p>
<p>Auto-scaling is the Cloud's key solution to the growth bubble without hurting your pocket or robbing the bank. Startups can now initiate prototypes and refine on their product or speciality without having a procurement strategy for setup infrastructure. They can simply spin up some instances i.e. virtualized servers on any of the Global Cloud Providers (GCP) available in the market.
</p>
<strong>Why auto-scaling is the Cloud way for applications and huge workloads</strong>
<p>With the increasing boom of data generated from all the services that we consume as millennials of the digital age, Artificial Intelligence and Big Data create huge workloads for data processing and these effort consumes the most resources until date. In the traditional IT scenario, such processing workloads would take a long and painstaking process to analyze small blocks of data and then stitch the outputs to arrive at a conclusion for a specific attribute of the given dataset. For further analysis, the workload needs to be re-processed in the same manner with a similar timeline.
</p>
<strong>Why auto-scaling by metrics and not any other way</strong>
<p>All is not roses in the Auto-scaling land as well. Auto-scaling also requires some controls to be successful, otherwise it could yield no different from the physical on-premise infrastructure. Auto-scaling is supervised process and can be managed automatically with simple functions or built-in process provided by the GCP. Generally, Cloud services share enough metrics to the user on the usage and the status of all the features. Simple code functions can utilize the shared metrics to scale-in and scale-out the server infrastructure or allow the GCP to manage them for you.
</p>
<strong>Steps to work out before auto-scaling</strong>
<p>With increased power comes increased responsibility. All is well when you setup auto-scaling and run your IT workloads on the new infrastructure. The workouts come only when you see an increased load when auto-scaling actually triggers in. Global corporations simulate such events very often, as often as daily to check their infrastructure is running as desired. Simulation of such events is key for ensuring the quality of service (QoS) in a digital or media business. When experiencing an increase in utilization, the resources need to scale out horizontally and spin up new instances that could start serving requests once it is ready out-of-the-box "not literally", I meant, as soon as they are provisioned.
</p>
<p>The following list is a pretty decent one to start with -

<ul>
<li>Pick a preferred operating system from a list of available operating systems providers in the market who provide with/without a licensing model and 24*7 support or engage third-party support services who provide support for the operating system. GCP provide a common list of their pre-baked images of common operating systems</li>
<li>Prepare a Cloud System Image of the software/middleware required for the product/service on the preferred OS</li>
<li>Crank up enough automation to check if the middleware and OS services are running fine</li>
<li>Deployment of product/service code into new instances brought to life by the auto-scaling functions</li>
<li>Test and certify the deployed servers with just a simple automation or a fairly comprehensive yet simple regression suite</li>
<li>Analyze the HTTP responses in the load balancer to estimate the server is serving requests as expected.</li>
<li>Prioritize to swap old or long running instances with updated/upgraded instances</li>
<li>Kill a server in random very often to test the auto-scaling capabilities and robustness of the support process design around it. The task to kill could be just a simple yet governed script or a methodical process like the famous Netflix Chaos Monkey. Do not worry, if all goes well, your auto-scaling should replenish the server with a new one in its place and the service should still be cranking fine</li>
<li>Monitor your instances enough to understand if the above lifecycle is working fine and you are able to predict failures.</li>
</ul>
</p>

<strong>So... What should I auto-scale?</strong>
<p>In my opinion, there is no harm in setting an auto-scaling mechanism around everything in the infrastructure that can be scaled if you dont want to be worried about an outage. If something cannot be auto-scaled then it is time for you to lose it from the ecosystem and look for an in-place auto-scaling replacement. Most SaaS (Software as a Service) based support services are scalable and run in your own Cloud or on the vicinities of the Cloud and are encouraging options in comparison with traditional software. 
</p>

<p>Here's a simple list but as I said it is "everything" -
<ul>
<li>Application Servers</li>
<li>Web Servers</li>
<li>Message Queuing Servers</li>
<li>Deployment Servers</li>
<li>Automation Servers</li>
<li>CI/CD Servers</li>
</ul>
</p>

<strong>How to avoid auto-scaling everything</strong>
<p>Yes, auto-scale everything that is possible and change anything that is not but lets not overdo anything to an extent that we drain our finances without proper utilization. This is where an Architect decides the threshold limits for each and every service that is auto-scaled and arrives at a desired level for each of the services.
</p>

<strong>How to discern these set thresholds for auto-scaling</strong>
<p>Frankly, it differs for every case of auto-scaling but the ground rule is to set a calculated threshold that does not bring any downtime to the system. Thresholds need to be forgiving of the time a new server takes to setup and serve requests. Specific cooldown periods needs to be forced to ensure the auto-scaling mechanism for scaling in and out does not under or over-provision resources and create an impact for service.