# User Observations

This document describes the insights our team has learned about 
[http://nttg.biz]() to date through usability interviews and observations of 
current user interactions with the website.

We have interviewed two website administrators, one NTTG executive, and one
NTTG funder. We have also briefly researched the functional capabilities of a 
user type not interviewed, the private access user. 

## User Types

There are three different types of users (plus some special cases) accessing 
the website: administrative users, private access users, and public users. 
Administrative users handle the day to day content maintenance of the site. 
Public users have access to information that must be legally made available 
(meeting notes, contact information, and a list of upcoming meetings). Private 
access users have access to all of the public content, plus private content. 

### Administrative Users

There are very few regular administrative users of the website. These administrative 
users are frustrated with the difficulties posed by a counter intuitive interface. 
Often, they need to use multiple browser windows to capture the relevant structural 
and hierarchical information in order to make updates to the site. In order to 
create hyperlinks that reference the correct URI, administrative users must use 
multiple browser windows and a pop-up dialog.

The admin taxonomy does not map well to the administrative users' expectations. 
For example, the admin interface contains a location for "Files" and a location 
for "Documents," but the difference between the two types are not clear.

![The relationship between the front end and the back end is hidden by numerous lists, folders, and specialized names. The confusion that this interface causes may result in slower turnaround when implementing content, architecture, and event updates.](img/back-to-front-comparison.png)

Navigation of the administrative interface is an entirely different experience 
than navigation of the website front end.

Rather than relying on familiarity with website administration and maintenance 
to keep the website up and running, administrators must rely on an extensive 
collection of self-created, locally saved support documents. Each administrator 
may have a different set of documentation or documentation with differing 
instructions.

### Private Access Users

Note: we have not interviewed any private access users.

While private access users could feasibly access content that was not available 
to the general public, no such content is currently being added to the site. 
As a result, private access users have access to no more content than public 
users.

### Public Users

We have not interviewed any public users.

Public users only have access to content that is published for availability on 
the website front end.

![Relative level of access for the identified user types.](img/user-types.png)

### Notable Cross-Type Users

There are a few notable users that fall into two or more of the user type
categories.

#### Other NTTG Staff

While some of the NTTG staff are administrative users, not all are. Despite 
restricted access (at the user permissions level), the NTTG staff has significant
authority to influence the layout, design, information structure, and content
of nttg.biz. Without a position at NTTG, these staff members would be limited 
to the same influence that a Public Access User holds.

To initiate updates, non-administrative users at NTTG communicate directly with 
the administrative users (via phone calls or email) to direct the administrators
through the changes step-by-step.

# Technology

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

# Content Types

There are six different types of content currently being added to the website: 
images, text, Adobe Acrobat files, Microsoft Word files, Microsoft Excel files, 
and datetime information.

The majority of the content on the website is downloadable PDFs. There is a 
small collection of downloadable DOCXs and XSLXs as well. It is important that
the majority of the content is PDF so that it cannot be easily changed by end 
users and can be saved locally and printed out.

> Downloading is important for maintaining open access.

## Images

Only two images are currently used on the website. One is the header image 
(bus_header.jpg) and the other is a map of NTTG's coverage area (nttg_map_final_xxlarge.jpg). 
The coverage map is the only image that is ever updated. It is an inline image 
placed within a [WYSIWYG](http://en.wikipedia.org/wiki/WYSIWYG) text input box.

This image is updated slightly less often than the text, every two years or more.

## Text

A large portion of the content on the website is text. The text is updated by 
administrative users. They first log in through the front end and then perform 
their edits within WYSIWYG text boxes and single line text boxes.

This data is updated "maybe once every two years."

## Adobe Acrobat Files

This is the most frequently updated content. These are meeting notes and 
proposals. Before being made available to public users, the administrative users 
must first receive sign-off from stakeholders. In some cases stakeholders may 
have private access accounts, but these accounts do not grant them early access 
to content.

Correctly uploading, storing, and including these files on the website is a 
difficult, time consuming process. However, this is an important aspect of 
nttg.biz; the website serves primarily as a document repository to keep NTTG 
(and the service providers) in compliance with FERC regulations.

![Publicly available content includes items like approved biennial reports. Content that has not been approved for public consumption is not available to public users.](img/public-content.png)

The current process for uploading meeting notes is as follows:

1. While the meeting occurs a note taker takes notes. In most cases the note 
   taker is an administrative user of the website.

2. The note taker saves the notes in docx format and sends the notes out to all 
   of the stakeholders.

3. If a stakeholder has changes to make they will either:
    
    a. Turn on track changes, make edits to the document, save the document as 
       a docx, and email the file back to the note taker, or
    
    b. Raise their concerns at the next meeting.

4. At the next meeting, all stakeholders will be asked if they have any objections 
   to making the notes public. 

5. Until a quorum is reached with no objections, the notes will remain private.

6. When a quorum is reached with no objections, the administrative user will 
   convert the notes to a pdf and upload them to the website via the DOCMAN feature.
    
    a. The files need to be uploaded into the proper location of DOCMAN. Figuring 
       out the proper location can be a time consuming process involving multiple 
       browser windows (at least one for the admin interface and at least one 
       to reference the front end display structure) and hunting through deeply
       nested menus.

       This approach to content organization means that a new category is created
       for each committee meeting.

The process for uploading proposals is very similar to the process of uploading 
meeting notes, with one difference: there is no meeting at which to take notes, 
the proposals come from stakeholders. 

It is unclear how much space these files (or the website for that matter) take 
up. Some error codes indicate that it may take up more than 128mb. The total 
size of the website is currently at least 2.1gb.

By distributing the majority of the content on nttg.biz as PDF files, NTTG is
attempting to make it more difficult to be changed by end users. This also allows
the content to be saved locally and printed out.

Since no visitor analytics are currently being captured, we do not know how much 
traffic this portion of the website receives monthly.

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

## Microsoft Word and Excel

The Microsoft Word and Excel files are used by stakeholders as forms to be 
filled out. Filled out forms are submitted by emailing them to NTTG.

## Datetime

An important element of the website is the inclusion of dates and times of 
upcoming public meetings. Directions about how to access these meetings must be 
made available to the public by law.

NTTG also holds private meetings. For private meetings, meeting subject, date, 
time, attendees, and access information are not added to the website. This 
information is communicated privately between the relevant stakeholders.

### Adding Stakeholder Meetings

The website administrators have to run through an elaborate process of copying 
and pasting existing text to keep the formatting for each meeting the same. 
The admin then edits the hyperlink and the content in the copied text.

# Navigating the Site

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

## Observed Methods for Additional Attempts to Locate Content

We observed four different methods employed to attempt to locate content after
not finding it at the expected location.

It is worth noting that none of our users used the **[ Back ]** link at the 
bottom of any of the nttg.biz pages or the **Site Map** for navigation.

### Breadcrumbs

![Breadcrumbs on nttg.biz reflect the nested folder organization of available files, not the path traveled to arrive at the present location.](img/breadcrumbs.png)

Breadcrumb navigation was the least used method of observed attempts at locating
content. The breadcrumb navigation allows a user to navigate one or more levels
up the folder tree from the user's present location.

Sole use of the breadcrumb navigation rarely directly resulted in successfully 
locating content.

### Main Menu

The main menu was the most used method for both first and second attempts at 
locating content. Use of the main menu after the first attempt indicated a 
complete restart in locating content.

### Documents

**Documents** is a navigation option within the main menu. It differs from the 
other navigation options in the main menu in that its structure directly relates
to the organization of the folders and files on the site itself.

Browsing through the Documents section was the most successful approach for our
users in locating content.

#### News & Media

Within Documents is a collection of news and media documents. These documents 
were displayed on nttg.biz for a short period of time, but their presence 
elicited a lot of concern from the funders. The funders felt that the attention
NTTG received as a result of the prominent presence of the news and media 
documents opened them up to legal issues.

Since then, **News & Media** documents have been depricated (no content has been
added to this section since 2010), but the content remains in the Documents 
section.

### Site Search

Site search was rarely used. 

Currently, search only allows queries that are 20 characters long or less. This
length is less than adequate for searching for a phrase like "public policy 
requirements" (a 25 character query).

When users were unsure about the name of the file they were looking for, search
was very poor at successfully locating and presenting the information the users
sought.

### Recently Posted

The **Recently Posted Items** section appears on every page in nttg.biz. This 
section lists the five most recent important items posted to the website. Examples
of important items are meeting notes and agendas.

Adding items to this list requires manual entry from a site administrator.

None of the links in this section were used to attempt to locate content.

## Archived Documents

Old documents are occasionally archived. There is not an established process 
for determining which documents are worthy of archiving or how to archive them.

Decisions around archiving documents are made on a per document basis by NTTG
staff.

We observed users attempting to access archived documents by going to 
**Documents** > **General** > **Archived Documents**, but users were unsuccessful
in locating the information they were looking for.

# Website Analytics

For visitor analytics, the only current example is the "Hits" counter on individual 
documents. It shows how many times people have accessed the document.

> It just gives me some sense -- particularly if we're putting something that's
> controversial out there -- I like to go monitor that [to see if it has attracted
> public attention].

When a document has a high Hits count, a "Hot!" indicator appears near the 
document. None of the observed users knew what the threshold was for the Hot 
indicator, or how to adjust it.

There is no system in place to gain insight into where visitors are coming from,
what common navigational flows are used, what search terms are used, etc.

# A Stable Platform?

Users shared their thoughts about what having a "stable platform" for nttg.biz
meant to them. 

## Compatible with Current Technology

A common concern was the age of nttg.biz:

> We built this in 2007 when NTTG was formed and we've done no maintenance to 
> it since then. 
>
> How long can you use Joomla 1.0 when its up to whatever it is now? [...] If
> one day it goes away and goes BOOM, we really can't be down for the period of
> time it would take to build a new website.

In 2013 NTTG's hosting provider upgraded their servers. This resulted in 
temporarily bringing down nttg.biz due to compatibility issues.

## Harder to Hack

Several users have mentioned concern with the security of the website. Already, 
the site has been hacked at least once. Remnants of hacking are still present 
on the nttg.biz site. Users would like to limit the possibility of additional 
hacking happening again.

## Fewer Bottlenecks

Since all additions to the website have been implemented through a website 
administrator, other members of the NTTG staff don't know enough about the 
backend to implement changes themselves. As a result, the NTTG website has a 
very [low bus factor][1]: if anything were to happen to the project coordinator 
(like being hit by a bus), the timely updates to the website which are necessary 
for compliance with regulations would be put in serious risk.

> I've never seen the back-end of [the NTTG website], I've always relied on the
> project coordinator ... to work through the background on this.

# Regulation Compliance

To comply with the regulations that NTTG and its funders are subject to, nttg.biz
needs to:

* Keep its information open and accessible
* Post public meeting notices at least 7 days in advance
* Provide contact information

## Open and Accessible Information

It is important to NTTG to keep their information open and accessible to all.

NTTG receives no funding from Federal assistance, so it does not need to comply
with Section 508.

Open information is important for communicating with the funders, FERC audits,
and the public. It allows NTTG to demonstrate that transmission providers are 
not providing preferential treatment to transmission providers' own merchant 
or anybody else. It allows everyone to have the same data at the same time.

> [A capability for] downloading [files] is important for maintaining open access.

## Public Meetings and the Calendar

The calendar is for listing public meeting notices for the stakeholder meetings 
and the steering committee meetings. Notice of upcoming meetings must be posted
at least 7 days in advance.

## Contact

The public needs to have a way to contact NTTG. The contact method needs to be 
in line with all of their attachment K filings.

> Every transmission provider would have to do a new filing with FERC if we 
> were to change this [contact method].

The current method allows a user to fill out a contact form on the website. 
Completing the contact form sends an email to `admin@nttg.biz`.

They also need to be using `info@nttg.biz`. This is the email address that is 
in all of their FERC filings. It is mentioned on all data submission forms, 
"E-mail this form and all supporting documents to `info@nttg.biz`."

# Budget

NTTG is estimating a budget up to about $20,000 for this project.

## Current Costs

Records show that NTTG originally paid about $3500 to get the site built by 
eVenture. At the time, they were hosting the site via SiteGround for $7/month. 
They were paying the hosting fees annually for $84.40/year.

The 2011 website assessment showed that the hosting costs had raised to $107/year.

The 2013 hosting invoice shows that hosting was still through SiteGround at the 
time and was being paid monthly at $15.39/month. This works out to an annual 
cost of $184.68/year for hosting.

Hosting is still through SiteGround. The Joomla platform running on the 
SiteGround Apache servers is currently free of charge.

# Document Biases

The information we've gathered has been heavily reliant on the user studies 
conducted with administrative users. To better understand the needs of other 
user types, we suggest conducting additional user studies with private access 
users (if such users exist) and public users.

An important part of additional user studies will be finding and observing 
private access users. Since this is a group that is largely ignored in current 
administrative practices, learning about the needs and expectations of these 
users is likely to result in a significant improvement in their experience with 
the site.

[1]: http://en.wikipedia.org/wiki/Bus_factor "A brief explanation of Bus Factor on Wikipedia"

