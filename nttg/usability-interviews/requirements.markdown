---
title: NTTG.BIZ REQUIREMENTS
---

# Executive Summary

## Assumptions of Key Drivers for the Website

The NTTG website should be a collaborative site where documents are posted so 
that NTTG transmission providers meet Order 1000 Requirements. As it sits now, 
the NTTG website has not been maintained since its implementation date of 2007 
and has the potential risk of no longer being operational, potentially leaving 
the NTTG Transmission Providers out of compliance with FERC and Order No. 1000.

The key drivers for this website are:

1. Provide a stable platform for NTTG documents that the NTTG Transmission 
   Providers are required to post on the NTTG website for Order No. 1000 
   compliance,
2. Support a coordinated, open and transparent regional transmission planning 
   and cost allocation process by providing a common data repository for NTTG 
   regional planning and cost allocation documents and processes, and
3. Provide a platform that is user friendly and can be maintained by the NTTG 
   Project Coordinator (e.g., does not require extensive technical expertise 
   for day-to-day maintenance), and
4. To provide a website that is easy to navigate and supports user needs.

Interviews were conducted with two website administrators, one NTTG project 
manager, and one NTTG member who is also a Committee Char and NTTG Funder along 
with brief research on the functional capabilities of the private access user, 
a user type not interviewed. Information was gathered on each users roll, 
usability, strengths and weaknesses for the website. 

From those interviews, notable issues were observed relating to the key drivers. 
Some (not all) of the key issues found are:

* The NTTG website was built in 2007 and has not been maintained since that date 
  and is currently running Joomla version 1.0.15. Support for this version ended 
  in 2009.
* The users interviewed only used Google Chrome and Microsoft Internet Explorer 
  9 (IE9). For administrative purposes the NTTG website only functions on IE9. 
  This limited browsers capability could affect the maintainability of the 
  website in the future. 
* The NTTG website has already been hacked and still contains hacked files.
* Any registered user is able to upload files to nttg.biz.
* NTTG's compliance with Order No. 1000 depends on the timely updates to nttg.biz 
  and the Project Coordinator is the only person with the ability to make the 
  timely updates.
* There is no actual process for registered users getting added to the NTTG 
  distribution list (as indicated on the NTTG website), meaning that registered 
  users do not get notification of upcoming meetings.
* There are over 18,000 registered user accounts on nttg.biz. Most of which are 
  probably spam.

 Out of the issues identified requirements were gathered:

* The NTTG website should use a technology that can be maintained and runs on 
  modern services.
* Hacking should be more difficult and hacked files should be removed from nttg.biz.
* Only allowed users should be able to upload files to nttg.biz
* The administrator interface should be understandable by the average computer 
  user.
* The website should be able to have multiple administrative users.
* There should be a process in place for registered users to be added to the 
  NTTG distribution list (if registration it is going to be available on the 
  website).
* Only valid individuals should be issued a registered user account.

The NTTG website has several significant security, process, and maintanence
issues and urgently needs to be resolved.

## The Purpose of this Document

Document NTTG website requirements based on user observations.

## Impact

The key drivers and user observations/requirements will influence the web
platforms that will be considered.

# Key Drivers Within the Context of User Observations

This section describes the insights our team has learned about [http://nttg.biz]() 
through usability interviews and observations of current user interactions with 
the website.

We have interviewed two website administrators, one NTTG executive, and one
NTTG funder. We have also briefly researched the functional capabilities of a 
user type not interviewed, the private access user. 

## A Stable Platform

What do we mean by a stable platform? According the the users we interviewed, 
a stable platform is:

* Compatible with current technology
* Hard to hack
* Low on bottlenecks
* Collaboration enabling
* Backed up

### Compatible with Current Technology

A stable website would be compatable with current [server-side][2] technology 
(for running the website) and [client-side][3] technology (for using the website).

#### Server-Side Technology

A common concern among users was the age of nttg.biz:

> We built this in 2007 when NTTG was formed and we've done no maintenance to 
> it since then. 
>
> How long can you use Joomla 1.0 when its up to whatever it is now? [...] If
> one day it goes away and goes BOOM, we really can't be down for the period of
> time it would take to build a new website.

In 2013 NTTG's hosting provider upgraded their servers. This resulted in 
temporarily bringing down nttg.biz due to compatibility issues.

##### Notable Issues

* The NTTG website has not been maintained since its initial creation in 2007.
* NTTG is currently running a very early version of Joomla (version 1.0.15). 
  Support for this version ended in 2009.
* NTTG's current hosting provider does not use an environment that supports this 
  version of Joomla by default.

##### Notable Requirements

* Use a technology that is not known to be end-of-life (so that updates and 
  support will be available for the forseeable future).
* Use a technology that can be maintained.
* Use a technology that runs on modern servers.
* The current version of nttg.biz must remain live while an upgraded website is
  built.

#### Client-Side Technology

Of the users we interviewed, only a small selection of browsers were used to 
access nttg.biz:

* Microsoft Internet Explorer 9 (IE9)
* Google Chrome

The users observed accessing nttg.biz with IE9 were the administrative users 
and one public access user. All other users used Chrome.

Administrative users did not prefer IE to Chrome; instead, their reason for 
using IE was purely functional: the nttg.biz administration interface is not 
compatible with modern browsers. When using modern browsers with the 
administration interface, the creation, update, and removal of content fails.
Edits through the front end interface are not successful in Chrome either -- 
popups that are necessary for saving changes never load.

Outside of interaction with the NTTG website, administrative users use Chrome
as their main browser.

The limited nttg.biz browser compatibility limits the software and operating 
systems that the administrators must have access to in order to maintain the 
website. It could also result in an inability to update the site through a 
graphical user interface in the future.

##### Notable Issues

* Most observed users of the NTTG website use Google Chrome or IE9.
* The current NTTG website does not function in Chrome for administrative purposes.
* Limited browser compatabilty could affect maintainability in the future.

##### Notable Requirements

* The NTTG website should be compatible with modern browsers and IE9.

### Harder to Hack

Several users have mentioned concern with the security of the website. Already, 
the site has been hacked at least once. Remnants of hacking are still present 
on the nttg.biz site. Users would like to limit the possibility of additional 
hacking happening again.

The website's directions to users about how to receive updates to info on 
public stakeholder meetings encourages user registrations. Registered users 
are able to upload files to nttg.biz and may be a vector for viruses, corruption
of the website, data theft, and other hacks as a result.

There are currently 18258 registered users.

For more information on users who are seeking updates, see the section 
[User Friendly and Maintainable](#user-friendly-and-maintainable).

#### Notable Issues

* The NTTG website has already been hacked at least once.
* The NTTG website still contains hacked files.
* Any registered user is able to upload files to nttg.biz.
* Becoming a registered users does not require authorization from NTTG.

#### Notable Requirements

* Hacking should be more difficult.
* Hacked files should be removed from nttg.biz.
* Only allowed users should be able to upload files to nttg.biz.

### Fewer Bottlenecks

Since all additions to the website have been implemented through a website 
administrator (i.e., Project Coordinator), other members of NTTG don't know 
enough about the backend to implement changes themselves. As a result, the NTTG 
website has a very [low bus factor][1]: if anything were to happen to the 
project coordinator (like being hit by a bus), the timely updates to the website 
which are necessary for compliance with regulations would be put in serious risk.

> I've never seen the back-end of [the NTTG website], I've always relied on the
> project coordinator ... to work through the background on this.

The only way for stakeholders, funders, and commitee members to get their content
up on the site is to go through NTTG staff.

#### Notable Issues

* NTTG's compliance with Order No. 1000 depends on timely updates to nttg.biz.
* Nobody outside of the Project Coordinator is able to make timely updates to
  nttg.biz.
* Stakeholders, funders, and committee members need to rely on the expertise of
  the Project Coordinator to publish their content to nttg.biz.

#### Notable Requirements

* The administrator interface should be understandable by an average computer 
  user in case the Project Coordinator is unable to make updates.
* The website should be able to have multiple administrative users.

### Enable Collaboration

Collaboration on documents and meetings was described as an indicator of website
stability. For more on document collaboration, see [Registering and Receiving Meeting Updates](#registering-and-receiving-meeting-updates).

NTTG subcommittees do not allow public attendance. To organize meetings for the 
subcommittees, NTTG emails a date and time to all of the subcommittee members 
and provides information about how to connect to each other. This makes the 
source for meeting info split between the NTTG website and private correspondance.

#### Notable Issues

* Some projects are closed to the public but worked on by multiple committee members.
* Subcommittee meetings are organized by email in order to avoid public involvement. 

#### Notable Requirements

* The website should encourage centralized organization of meeting dates and times.
* The website should prevent information about subcommittee meetings from being 
  publically available.

### Backed Up Data

The website nttg.biz has the **Basic Backup Service** from SiteGround. A stable
website would be able to provide backups at least as robust as the basic 
backup service.

The **Basic Backup Service** seems to be a daily backup of the website files 
for the last 30 days. The backup seems to run at about 5 am CDT every day. 

This services also seems to include a daily backup of the website database for
the last 30 days.

#### Notable Issues

* The NTTG website files and databases get backed up once daily.
* Backups are available for 30 days.

#### Notable Requirements

* NTTG website files should be automatically backed up.
* NTTG website databases should be automatically backed up.
* NTTG website backups should be available for at least 30 days.

## A Centralized Document Repository

The NTTG website is intended to be a centralized document repository for NTTG 
members and the public. Most of the time, the needs of NTTG members and the 
general public overlap. However, subcommittees have specific needs.

### General Needs

Funders and stakeholders will often download the agenda document associated with 
meetings prior to the meeting. They'll use the agenda document to refer to 
during the meeting, and access the meeting materials by following the 
**Link to Meeting Materials** hyperlink in the agenda document.

Sometimes, users will print out the agenda document (especially if they are 
traveling at the time of the meeting).

#### Agenda Documents, Meeting Materials & Minutes, Agreements, Charters 

Adobe Acrobat files (files with the extention PDF) are the most frequently 
updated content. These are meeting notes and proposals, agenda documents, 
agreements, charters, and the like. Before being made available to public users, 
the administrative users must first receive sign-off from stakeholders. 

Correctly uploading, storing, and including these files on the website is a 
difficult, time consuming process (for more on this process, see 
[User Friendly and Maintainable](#user-friendly-and-maintainable)). However, 
this is an important aspect of nttg.biz; the website serves primarily as a 
document repository to keep NTTG (and the service providers) in compliance with 
FERC regulations.

![Publicly available content includes items like approved biennial reports. Content that has not been approved for public consumption is not available to public users.](img/public-content.png)

#### Forms

Microsoft Word and Excel files are used by stakeholders as forms to be filled 
out. Filled out forms are submitted by emailing them to NTTG.

#### Presentations

Microsoft PowerPoint files are used by stakeholders for meeting presentations.
These files _should_ be converted to PDF before being uploaded, but PPT files 
have been uploaded.

#### Notable Issues

* Agenda documents associated with meetings must be available to the public.
* Meeting materials associated with meetings must be available to the public.
* Agenda documents are sometimes printed.
* Adobe Acrobat files make up the majority of the documents on nttg.biz.
* Forms must be downloaded in order to be filled out.
* Forms must be attached to an email in order to be submitted.
* PowerPoint files have been uploaded to nttg.biz.

#### Notable Requirements

* Meeting agendas, meeting materials, meeting minutes, NTTG agreements, and 
  NTTG charters must be available to the public.
* Agenda documents should be printable.
* NTTG must be able to accept user entered input from forms. 
* Presentation files should be converted to Adobe Acrobat files before being 
  uploaded to nttg.biz.

### Subcommittee Needs

Subcommittees are non-public, but are still working on creating documents and 
solving problems. Some users desire to have a place where subcommittee members 
can collaborate privately. 

NTTG members do have access to at least one SharePoint site hosted in Office 
365, but it hasn't seen very much adoption among the subcommittee members. 
Some users refuse to make use of it for legal reasons.

Instead, collaboration tends to happen through emailing documents around (with 
multiple people having multiple changes, and somebody trying to merge those 
changes).

#### Notable Issues

* Some projects are closed to the public but worked on by multiple committee members.
* An Office 365 SharePoint site does exist for collaboration, but has seen only
  low adoption rates.
* Collaboration on documents happens via email, leading to versioning issues and
  merge conflicts.

#### Notable Requirements

* The website should encourage centralized document collaboration among 
  subcommittee members.
* The website should prevent subcommittee collaboration subcommittee meetings 
  from being publically available.


## User Friendly and Maintainable

There are several aspects that affect the usability and maintainablity of nttg.biz.

* Registering and receiving meeting updates
* Adding stakeholder meetings
* Adding files

### Registering and Receiving Meeting Updates

Registering for the distribution list creates a new user account. NTTG does not 
use any of these registrations to distribute information, although the text on 
the website would indicate that registration is the way to receive access to
this information:

> Registering with nttg.biz will add the users to the NTTG distribution list,
> giving them up-to-date information on public stakeholder meetings.

Site administrators don't have a way to validate email addresses, don't curate 
the list, or move any of the user data into a CRM service. No newsletters are
distributed to registered users.

Instead, in order to _actually_ get access to newsletter updates, interested 
parties need to contact NTTG staff directly and request to be added to the list.
Registering for the distribution list creates a new user account. There are 
currently 18258 accounts. However, all of the administrative users we interviewed 
assume these accounts are spam.

While registered users could feasibly access content that is not available 
to the general public, no such content is currently being added to the site. 
As a result, registered users (who are not administrators of the NTTG website)
have access to no more content than public users.

According to the text on NTTG's website, the registered users _should_ be 
added to the distribution list and receiving updates as a result. However, this 
is not currently happening.

Becoming a registered user does enable one feature not available to public 
users: the ability to upload documents to nttg.biz.

#### Notable Issues

* The actual process for getting added to the distribution list (to be notified
  about upcoming meetings) differs from the process described on the NTTG website.
* Registered users are not validated.
* No action is taken for email addresses that bounce.
* User data is not managed by any CRM service.
* Registered users do not receive notices about upcoming meetings.
* Registered users do not receive access to special content.
* There are over 18000 registered user accounts on nttg.biz. Most are probably 
  spam.
* Registered users can upload files to nttg.biz.

#### Notable Requirements

* Users should be able to request notices about upcoming meetings from nttg.biz.
* There should be a method to validate user account registrations.
* Automated or administrator action should be taken for email addresses that 
  bounce.
* User data should be managed by a CRM service.
* Users who have requested notices about upcoming meetings via the website should
  receive notices about upcoming meetings.
* Only valid individuals should be issued a registered user account.
* Registered user accounts should be given access to special content (perhaps 
  subcommittee collaboration?).
* Only validated registered users accounts with the appropriate permission level 
  should be able to upload files to nttg.biz.

### Adding Stakeholder Meetings

The website administrators have to run through an elaborate process of copying 
and pasting existing text to keep the formatting for each meeting the same. 
The admin then edits the hyperlink and the content in the copied text.

#### Notable Issues

* The formatting for meetings can change, resulting in a non-uniform presentation.

#### Notable Requirements

* The formatting for meetings should be uniform.
* Adding meetings should be streamlined.

### Adding Files

Correctly uploading, storing, and including files on the website is a 
difficult, time consuming process. However, this is an important aspect of 
nttg.biz; the website serves primarily as a document repository to keep NTTG 
(and the service providers) in compliance with FERC regulations.

![Publicly available content includes items like approved biennial reports. Content that has not been approved for public consumption is not available to public users.](img/public-content.png)

Uploading meeting notes currently includes an elaborate process for taking notes, 
making edits to the notes, merging changes from multiple sources into a single
document, and receiving signoff. Once signoff has been achieved, the notes need
to be uploaded into the proper location of DOCMAN. 

Figuring out the proper location can be a time consuming process involving multiple 
browser windows (at least one for the admin interface and at least one to reference 
the front end display structure) and hunting through deeply nested menus.

This approach to content organization means that a new category is created
for each committee meeting.

The process for uploading proposals is very similar to the process of uploading 
meeting notes, with one difference: there is no meeting at which to take notes, 
the proposals come from stakeholders. The stakeholders, funders, and committee 
chairs must email the content to NTTG in order to get it up on the site. 

It is unclear how much space these files (or the website for that matter) take 
up. Some error codes indicate that it may take up more than 128mb. The total 
size of the website is currently at least 2.1gb.

By distributing the majority of the content on nttg.biz as PDF files, NTTG is
attempting to make it more difficult to be changed by end users. This also allows
the content to be saved locally and printed out.

Since only extremely limited visitor analytics are currently being captured, 
we do not know how much traffic this portion of the website receives monthly.

#### Notable Issues

* Adding files to the website is prone to error and takes a lot of time.
* The files uploaded keep NTTG in compliance with FERC regulations.
* NTTG uses PDF files to add a barrier to end users' ability to change files.
* The NTTG website currently takes up roughly 2.1gb.
* Robust visitor analytics are not currently being captured.

#### Notable Requirements

* Uploading files to the website should be fairly straightforward.
* The NTTG website needs to be able to upload files.
* Only NTTG members should be involved in changing files.
* The website hosting needs to be able to handle the size of the NTTG site.
* Website administrators should have visibility into the popularity of specific
  files.

### Nesting Limitations

As part of the process for adding text content to introduce and provide context 
to Adobe Acrobat files, the website administrator creates a **Content Item** 
within a **Category**. The Content Item is the equivalent of page content, while 
a Category is the equivalent of folder structure. As a result of this relationship,
the page content of a Content Item is unable to nest additional Categories or 
Content Items further within it. 

In other words, the admin is unable to nest content items within content items. 
Instead, the nesting has to be faked through redirects to items stored in the
Recently Posted list.

#### Notable Issues

* The organization of the website relies heavily on deep nesting.
* Deep nesting sometimes has to be faked in order to be approximated.

#### Notable Requirements

* The website should be able to handle deep nesting where necessary.

## Easy to Navigate

All interviewed users demonstrate difficulty in navigating nttg.biz. Even users
who have been instrumental in developing the organization of the website spend 
time hunting for content in a different place than where it is actually located.

While there are multiple ways to make another pass at finding the info the user
is looking for, few users made use of all options before giving up. Fewer still
were able to successfully locate the information they sought using these alternate
methods. 

Often, the information users are looking for is nested several levels deep. For
example, locating the final draft of the 2012-2013 NTTG Cost Allocation report
can take six clicks to access:

1. Click on **NTTG Committees** in the main menu.
2. Scroll down to the links within the **Cost Allocation** section and click
   The **FERC Order 890 Cost Allocation Process** link.
3. Click on the **Cost Allocation Process 2012-2013** category.
4. Click on the **2012-2013 Cost Allocation Report Development**.
5. Click on the **2012-2013 NTTG Cost Allocation Report Final** link to initiate 
   downloading a PDF.
6. Click on the downloaded PDF file to open it and view the contents.

### Observed Methods for Additional Attempts to Locate Content

We observed four different methods employed to attempt to locate content after
not finding it at the expected location.

It is worth noting that none of our users used the **[ Back ]** link at the 
bottom of any of the nttg.biz pages or the **Site Map** for navigation.

#### Breadcrumbs

![Breadcrumbs on nttg.biz reflect the nested folder organization of available files, not the path traveled to arrive at the present location.](img/breadcrumbs.png)

Breadcrumb navigation was the least used method of observed attempts at locating
content. The breadcrumb navigation allows a user to navigate one or more levels
up the folder tree from the user's present location.

Sole use of the breadcrumb navigation rarely directly resulted in successfully 
locating content.

#### Main Menu

The main menu was the most used method for both first and second attempts at 
locating content. Use of the main menu after the first attempt indicated a 
complete restart in locating content.

#### Documents

**Documents** is a navigation option within the main menu. It differs from the 
other navigation options in the main menu in that its structure directly relates
to the organization of the folders and files on the site itself.

Browsing through the Documents section was the most successful approach for our
users in locating content.

#### Site Search

Site search was rarely used. 

Currently, search only allows queries that are 20 characters long or less. This
length is less than adequate for searching for a phrase like "public policy 
requirements" (a 25 character query).

When users were unsure about the name of the file they were looking for, search
was very poor at successfully locating and presenting the information the users
sought.

#### Recently Posted

The **Recently Posted Items** section appears on every page in nttg.biz. This 
section lists the five most recent important items posted to the website. Examples
of important items are meeting notes and agendas.

Adding items to this list requires manual entry from a site administrator.

None of the links in this section were used to attempt to locate content.

### Archived Documents

Old documents are occasionally archived. There is not an established process 
for determining which documents are worthy of archiving or how to archive them.

Decisions around archiving documents are made on a per document basis by NTTG
staff.

We observed users attempting to access archived documents by going to 
**Documents** > **General** > **Archived Documents**, but users were unsuccessful
in locating the information they were looking for.

"What I'm looking for may not even be on here any more," a user said while trying 
to locate a document for reference on a committee's progress.

> I suppose I could use the search engine, but I'd have to remember any sort of 
> name of what the document is, but I don't... Let me think if I can remember
> some of the names of the documents.

After trying once to search for the document without success, the user gave up.

### Finding a Meeting

Users access meeting information through the calendar widget. We observed some 
confusion with this widget: users expected weeks to be ordered Sunday, Monday,
Tuesday, Wednesday, Thursday, Friday, Saturday. Instead, the weeks on the calendar
begin with Monday and end with Sunday. There is no method for users to change 
the week layout or to log in and set a preference.

Often, users had trouble locating past meetings. Users attempted to find the 
meeting by using the meeting categories, but that still returns a long list. 
Users rarely scrolled when looking for past meetings. Locating information about
past meetings was often unsuccessful. 

#### Receiving Notice about Upcoming Meetings

Some public users receive notice about upcoming meetings. These public users 
have an established relationship with NTTG and receive an email when there is
a meeting coming up. To receive these emails (or to get a member of their team 
added to the notification as well), public users must directly contact a NTTG
staff member.

This is a feature that is likely more appropriate for registered users. Currently, 
this information is not making its way into distribution lists that registered
users have been added to.

### Finding Documents

Users had varying levels of success at finding the documents they were looking 
for. Documents that were located within very shallow nesting on the site were 
the documents that were most easily found.

> If I'm not coming in [to the NTTG website] relative to a meeting, I might be
> in here looking for some sort of document. There's a couple different ways to
> get at documents, but the first thing that strikes me is "Charters & Agreements."
>
> Often times during the Planning Committee meeting I may need to reference the 
> Charter (which I do have stored on my computer, or printed out, or I could
> come in here ... [and get] the most recent one. I know I can always get the 
> most recent charter by going back to the Charters & Agreements.

Deeply nested documents were more difficult for users to find. The following 
example demonstrates a user's difficulty in finding the Study Plan.

The user's first attempt at locating the Study Plan was through **NTTG Committees**. 
Looking at the options available, the user announced some confusion.

"It isn't really an 890 process." 

The user was expecting to see a hyperlink to the Order 1000 Process documents 
from the committees (since the committees were the people working on developing 
the process documents), but it wasn't listed.

> So, I'm going to go back. Because, that wasn't helpful.

The second try through the user tried **NTTG Order 1000 Process** in the main 
menu. After selecting **NTTG Order 1000 Regional Planning and Cost Allocation Process** 
the user looked over the options it returned: a list of the different things that 
occur in the process broken out by quarter.

> I'm not exactly sure where I'm going to find my Study Plan based on those two
> things.

Again, the user decided to go back and try again.

This time the user selected **Documents** from the main menu and then followed 
the nested folders though **NTTG Committees** > **Planning** > 
**FERC Order 1000 Process** > **2014-2015 NTTG Planning Cycle**. This approach
is similar to the one the user took from the NTTG Commitees main menu item, except
this time there is a selection for the Order 1000 process. 

Inside the **2014-2015 NTTG Planning Cycle** folder, the user expected to find 
the study plan. The user located it within the option, 
**Quarter 2 - Data Evaluation and Study Plan Development**. 

> So I _was_ there, but I didn't understand that I had documents available on
> the last process I was looking at.
> 
> [...] The thing that was a little bit misleading on that one is that it didn't
> reflect that there were documents I could see. When I came in through the 
> Documents, I could see how many files where there.

### Notable Issues

* Users have a hard time navigating nttg.biz.
* While there are multiple ways to access information and documents on nttg.biz, 
  most users give up after a couple of attempts.
* Documents and information is often deeply nested.
* Users did not utilize the Back link or the site map.
* Breadcrumbs and site search were rarely used to successfully locate documents 
  or information.
* The main menu is the primary method used to attempt (and re-attempt) to locate 
  documents or information.
* The Documents section of the main menu is the most successful method currently 
  employed on the NTTG website for locating documents and information.
* Site search is limited to search queries of 20 characters or less.
* Observed users did not utilize the Recently Posted Items list to locate 
  documents or information.
* Links in the Recently Posted Items list are manually entered.
* Old documents are kept publically accessible, but moved to an archive folder.
* Not all old documents are moved to the archive folder, some are removed from
  the site.
* The way weeks are split in the calendar widget confuses some users.
* Users had difficulty finding information about past meetings.
* Shallowly nested content was found more easily by users than deeply nested 
  content.

### Notable Requirements

* Documents and information should be capable of being organized and accessed
  in multiple ways.
* The website should assist users' efforts to locate documents and information.
* Documents and information should not be required to be deeply nested.
* Alternate methods of accessing documents and information should be useful to 
  users.
* The NTTG website should support navigational menus.
* The structure of the website should reflect the structure of the navigational
  menus.
* Site search should be able to acommodate more than 20 character long queries.
* Site search should help users find what they are looking for.
* Links in the Recently Posted Items list should be automatically generated.
* All old documents should either be removed or all should indicate their 
  depricated status.
* Users should be able to find information about upcoming meetings at least 
  seven days in advance of the meeting.

## Regulation Compliance

To comply with the regulations that NTTG and its funders are subject to, nttg.biz
needs to:

* Keep its information open and accessible
* Post public meeting notices at least 7 days in advance
* Provide contact information

### Open and Accessible Information

It is important to NTTG to keep their information open and accessible to all.

NTTG receives no funding from Federal assistance, so it does not need to comply
with Section 508.

Open information is important for communicating with the funders, FERC audits,
and the public. It allows NTTG to demonstrate that transmission providers are 
not providing preferential treatment to transmission providers' own merchant 
or anybody else. It allows everyone to have the same data at the same time.

> [A capability for] downloading [files] is important for maintaining open access.

### Public Meetings and the Calendar

The calendar is for listing public meeting notices for the stakeholder meetings,
Steering Committee meetings, Planning Committee meetings, and the Cost Allocation
Committee meetings. Notice of upcoming meetings must be posted at least 7 days 
in advance.

### Contact

The public needs to have a way to contact NTTG. The contact method needs to be 
in line with all of their Attachment K filings.

> Every transmission provider would have to do a new filing with FERC if we 
> were to change this [contact method].

The current method allows a user to fill out a contact form on the website. 
Completing the contact form sends an email to `admin@nttg.biz`.

They also need to be using `info@nttg.biz`. This is the email address that is 
in all of their FERC filings. It is mentioned on all data submission forms, 
"E-mail this form and all supporting documents to `info@nttg.biz`."

# Conclusion

The NTTG website has several significant security, process, and maintanence
issues and urgently needs to be resolved.


[1]: http://en.wikipedia.org/wiki/Bus_factor "A brief explanation of Bus Factor on Wikipedia"
[2]: http://en.wikipedia.org/wiki/Server-side "A definition of the term server-side on Wikipedia"
[3]: http://en.wikipedia.org/wiki/Client-side "A definition of the term client-side on Wikipedia"
