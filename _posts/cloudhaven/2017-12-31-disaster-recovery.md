---
layout: "blogarticle"
title: "Disaster Recovery"
meta: "To-do: Upcoming article on Disaster Recovery."
author: "George Davis"
source: "Personal writing"
category: "cloudhaven"
date: "December 31, 2017"
status: "draft"
---

<!-- <h3>Disaster Recovery</h3> -->

<div class="do-not-publish">
<h3>Checklist</h3>
<ul>
<li>What is a disaster?</li>
<li>Define disasters in IT</li>
<li>Local IT, Network/Power outage, ISP/DNS Failure</li>
<li>What is disaster recovery</li>
<li>Steps to do for disaster recovery</li>
<li>Scales in terms of sites and infrastructure for disaster recovery</li>
<li>Diff between disaster recovery and backup recovery solutions</li>
<li>Maintenance of the DR setup</li>
</ul>
</div>

<strong>What is a Disaster?</strong>
<p>Disaster can mean different to different people and based on each scenario. In common, I can define Disaster as a loss of an asset, either on an economical or emotional scale, a loss that cannot be redone or repaired very easily. Fixing something that is destroyed by a disaster is not an easy process and cannot be done in a short span. Forgetting for wedding anniversary and sharing your phone with your girlfriend without deleting the messages are common emotional disasters. Economical disasters need not be explained and I pray that it should not be experienced.
</p>

<strong>Define disasters in IT</strong>
<p>The term "disaster" in IT is similar to its actual meaning but the factors affected have a direct impact to the business, reputation and brand of the company owning the infrastructure.
</p>

<strong>Types of Disasters in IT</strong>
<p>Disasters are not only natural events but also include man-made disasters and they cannot be avoided in most scenarios by IT Organizations. Such disasters can cause an outage for service and can be detrimental for business, the product or service. The IT Wing in every organization with a digital footprint do not welcome any disaster as it could mean partial or complete doom for the company in such cases.
</p>

<p>To list a few events that could be considered a disaster for an IT Infrastructure -

<strong>Natural Disasters</strong>
<ul>
<li>Tsunami</li>
<li>Earthquakes</li>
<li>Hurricanes and powerful storms</li>
</ul>
<strong>Man-made Disasters</strong>
<ul>
<li>Power Grid failure</li>
<li>Global Under-sea Network failure</li>
<li>Internet Service Provider failure</li>
<li>DNS DDoS</li>
<li>Majority IT Infrastructure Software or Hardware failure</li>
</ul>

<p>Plans are made to mitigate such disasters and avoid a complete loss and/or operations deadlock and sustain the company through and out of the event. Simple events can also lead to an outage for the company and could lead to loss of revenue, competitive position and customer inconvenience.
</p>

<strong>Disaster Recovery</strong>
<p>Disaster Recovery (DR) is the recovery plan determined to encounter any type of disaster that may impact the IT infrastructure. As a part of DR, we tend to look at 4 R's - 

<ul>
<li>Redundancy</li>
<li>Resiliency</li>
<li>Reliability</li>
<li>Recovery Objectives</li>
</ul>

<strong>Redundancy</strong> is the measure of having to deal with complete failure of portions of the infrastructure before observing any impact to business.

<strong>Resiliency</strong> defines how the Infrastructure behaves with the loss of considerable amount before completely shutting down.

<strong>Reliability</strong> is the measure of ensuring in case of a disaster that may strike, how reliable is the DR plan that little to zero impact is absorbed by the company or its consumers.

<strong>Recovery Objectives</strong> are common goals that define how soon and how close to zero impact, the recovery procedure can guarantee a comeback in the case of an complete shutdown event.

<strong>Steps to plan for Disaster Recovery</strong>
<p>Disaster Recovery is a test for the complete IT Infrastructure and defines the IT standpoint and maturity of an organization in critical times. Planning for disaster recovery requires knowledge of the current design and architecture of the company and the IT footprint. It is safe to say that when a disaster strikes, it does not choose selectively but wipes away anything in its path. Hence, planning for disaster recovery should involve in utilizing all available resources under the IT footprint. For this case, large corporations plan their investments in a wide demographic region which they can maintain for DR. Smaller companies prefer to invest in a shared datacenter and infrastructure to keep their data safe, survive the event and contain the impact to only physical infrastructure.
</p>

<p>It is needless to say, having a Global Cloud Provider as a partner for such DR scenarios will help greatly as they already possess the global infrastructure required and can standup a complete organization in a short span. They also provide data backup and archival solutions which make it much more secure and redundant to the current organization's efforts.
</p>

<strong>Demographics for Disaster Recovery? What are we talking about...</strong>
<p>Disasters can strike upto a 70km radius and a group of datacenters in a single region alone cannot guarantee a zero impact to IT. The need for a wider geographic regions arise when we speak on Disaster Recovery. Clearly, we are talking about something bigger than your Site A-Site B setup. We are talking about Region A and Region B types. When you want to implement a complete DR process, having your IT setup in different regions definitely guarantee a better DR experience. It is essential to have atleast a scaled down footprint of the current production infrastructure as part of the DR process. The DR footprint needs to mimic production and run independently without the need for the Live infrastructure. This goes without saying, the network, data and processing power needs to remain as identical as possible otherwise a DR plan would not make much sense.

<strong>I have strong backup and maintenance plans, that should do good right?</strong>
<p>No, not necessarily. Backup recovery solutions dont mean they are also disaster recovery solutions. Backups that reside within the dominant infrastructure alone will not support a DR procedure. The backup needs to be replicated and stored in a separate infrastructure which has the potential to recover from the backup and standup a partial or in-place infrastructure at any point of time without any dependencies. 

<strong>DR Readiness Measures</strong>
<p>DR Infrastructure requires proper maintenance, patching and updates like the dominant infrastructure such that they remain in sync at all times and can host the required instances interchangeably without major issues or changes. Both the environments could benefit from a single, common software repository, version control system, access to data backups and archives, networks and network security solutions. Regular DR drills are absolutely mandatory and the setup need to be actively tested across all levels to ensure the DR plan can support the entire IT footprint in critical times. Budgets for maintaining a proper DR state should be rightly allocated to avoid blame games and regret once Disaster strikes.