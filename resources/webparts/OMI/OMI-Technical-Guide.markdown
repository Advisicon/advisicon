---
title: Technical Guide
version: 1.0
date: August 5, 2014
client_logo: OMI_logo_2x4.jpg

---

# Purpose 

This document provides technical implementation of Project Issues and Status 
Excel Web Part.

# Design

The Risk and Issues Surfacer retrieves data already cached in the Project Center 
in the root of the PWA. This data is presented as a dashboard component rendered 
by the Excel Services Web Part.  

# Development

## Overview

Initial development had called for workflows to populate a separate list in the 
Project Web App when items in the risks and issues lists were changed. According 
to this site [http://msdn.microsoft.com/en-us/library/office/ee767687(v=office.15).aspx]() 
this is already performed for us. So development then changed to be centered on 
surfacing the data that was already cached by Project Server.

## Data Connections

Excel Services Pivot Tables gave us all the functionality (plus more) called 
for, and making the data connections from within the site was simplified because 
the Excel Services web part allowed for automatic user authentication.

Example: [https://advisicondemo2.sharepoint.com/sites/pwa/_api/ProjectData/Issues]() 

Available queries visible at [https://advisicondemo2.sharepoint.com/sites/pwa/_api/ProjectData/$metadata]()

![connecting to a data feed](img/data-connection-wizard-connect-to-a-data-feed.png)
![selecting a table](img/data-connection-wizard-select-tables.png)

Excel 2013 allowed for combining multiple queries into a related dataset, giving 
us the ability to present the relationship between the Risks and Issues Data 
and the Project table. This is how we present all projects even when they do 
not have Risks or Issues associated with them.

![We combine multiple queries into a related dataset](img/edit-relationship.png)


# Deployment

## Updating Spreadsheet

The Excel spreadsheet "Risk_Issues_RollUp.xlsx" need to be configured to draw 
data from the company's project center.

**STEP 1**: Open the spreadsheet in Excel

**STEP 2**: Navigate to Data tab -> Connections group -> Connections

![The connections option on the ribbon](img/ribbon-datatab-connectionsgroup-connections.png)

**STEP 3**: Configure the Properties for each connection: Risks, Issues, and 
Projects:

![Configuring connection properties](img/configure-connections-properties.png)

**STEP 3.1**: On the definition tab update the connection string:

Remove the 2 URLs: `https://advisicondemo2.sharepoint.com/sites/pwa` replacing 
them with the URL for the Project Web App ex: `https://ormutual.sharepoint.com/sites/pwa/`

**STEP 3.2**: Save changes by clicking "OK"

![Update the URLs in the source and base url variables](img/edit-connection-url.png)

**STEP 3.3 – 3.6**: Update each of the 3 connections in the same way: Issues, 
Risks, and Projects

## Set up "Advisicon Reports" Document Library

On the website where you would like the dashboard

**STEP 1**: Gear -> Add and App

![Add an app to PWA](img/add-an-app.png)

**STEP 1.1**: Click "Document Library" 

![Add a document library app](img/add-document-library.png)

**STEP 1.2**: Click "Advanced Options" 

![Advanced options gets you more options](img/advanced-document-library-options.png)

**STEP 1.3**: Name it "Advisicon Reports"

**STEP 1.4**: Give it a description

**STEP 1.5**: Create a version… Yes

**STEP 1.6**: Document Template: Microsoft Excel Spreadsheet

**STEP 2**: Upload the excel report "Risks_Issues_RollUp.xlsx" to the SharePoint library 

![Uploading a local Excel file to a SharePoint document library](img/upload-local-excel-report.png)

**STEP 3**: Test the refresh process to confirm the connections work:

**STEP 3.1**: Open excel document by clicking on the Name link.

**STEP 3.2**: If warned about the queries choose yes.

![Enable queries](img/enable-query-warnings.png)

**STEP 3.3**: Right-click on the table and select refresh. 

![Refresh the table](img/refresh-table.png)

**STEP 3.4**: If asked whether you trust the document choose yes

**STEP 3.5**: If no errors, then query is working. If there are errors contact 
Advisicon to help edit the connection strings and/or verify permissions.

# Implementation/Configuration

## Add and Configure Web Parts

_Repeat this process once each for issues data and risks data_

**STEP 1**: Get URL for workbook

**STEP 1.1**: Go to Advisicon Reports library

**STEP 1.2**: Right click on the Name and choose "Copy Shortcut"

![Copying a url to a resource](img/copy-shortcut.png)

**STEP 2**: Add web part to the dashboard page.

**STEP 2.1**: Click on the Gear -> Edit Page

![Enter page edit mode](img/edit-page.png)

**STEP 2.2**: In the Area where you would like the list to appear, click on 
Add a Web Part

![Add a Web Part link](img/add-a-webpart.png)

**STEP 2.3**: From the list of web parts choose Business Data -> Excel Web 
Access and click "Add"

![Add an Excel Web Access Web Part](img/add-excel-web-access.png)

**STEP 3**: Configure the Web Part

**STEP 3.1**: In the top right-hand corner of the recently added web part click 
on the little down arrow and select "Edit Web Part"

![Edit the Web Part](img/edit-webpart.png)

**STEP 3.2**: The Configuration Editor will open on the right.

**STEP 3.3**: Paste the URL copied in step 5.a.ii to the Workbook box

**STEP 3.4**: Set the named entry fields to RisksTable or IssuesTable to meet need.

**STEP 3.5**: Configure to remove all options to keep the dashboard looking right.

![Configure the Web Part](img/configure-webpart.png)

**STEP 3.6**: On the bottom click "OK"

**STEP 4**: When the page layout and lists look like you want click "Stop Editing"

![Stop editing the page](img/stop-editing-page.png)

## Verify Functionality 

**STEP 1**: Verify the spreadsheet refreshes when you go to the page

![The spreadsheet should now refresh](img/verify-refresh.png)

# Troubleshooting

