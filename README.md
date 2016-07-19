# Untangle-Captive-Login-Using-Facebook-Login
Facebook Login implementation for Untangle Captive Page

A. In order client to authenticate using FB,
FB IP Range must be allow in Captive Server Pass List.

And here are 
Passed Listed Server Addresses:

31.13.24.0/21,31.13.64.0/18,66.220.144.0/20,69.63.176.0/20,69.171.224.0/19,74.119.76.0/22,103.4.96.0/22,173.252.64.0/18,204.15.20.0/22

B. You need to create FB App,
Follow how to : https://developers.facebook.com/docs/apps/register
Add Web Platform, on these you should provide a valid Domain or Sub Domain for the APP.
And this domain will be used as Captive Page URL


C. Configure fblogin.js
You need to configure 2 variable on these file:
var UntanglePublishDomain = "utmho.siloamhospitals.com";  //Please change this with yours
var SpecificAPPID = '1068026436624490';  //Please change this with yours


D. TODO
1. Optional users to share status after successfull login
2. Add FB Name and Email to Untangle, currently from Captive Page, it still show anonymous.



