---
  title: Basic authentication 
  date: 2023-02-08
  related:
    sections:
      - title: Related content
        items:
          - text: Replica journey in prototype (password, gai)
            href: https://get-an-identity-prototype.herokuapp.com/qts/eligibility/start-eligibility
          - text: Lucid board showing flow
            href: https://lucid.app/lucidspark/b88634d8-2452-4ed6-9c7c-010383770731/edit?view_items=KZDsx9Mr-.mh&invitationId=inv_9a36d007-204a-41ed-b8c3-1f49d5e63a05
---


We’re testing alternative names for Get an Identity (GAI) now that we’re asking users to create an account. For the first round of user testing we’re using the name, <b>DfE Identity account</b> (DIA).

The last iteration of GAI involved creating a TRN optional journey for the Apply for an NPQ service. We wanted to unpick GAI from its integration with NPQ and the Find a lost TRN services to create an authentication service which is service-agnostic and scalable.

We also wanted to reduce the possibility of duplicate accounts being created. Currently, GAI captures a user's preferred name and email, which is not enough to confidently stop account duplication from occurring.

The new authentication journey includes the concept of an account. For this, we’re using the Apply for QTS in England service as a test case. When applying for QTS, a user will first need to create an account or sign in to the service using DIA.

All account details, such as name, DOB, email and mobile number will be held centrally and only editable in the DIA. The user can access this via the account link in the QTS service page header. The data is available to consuming services but is read-only.

## Video of the DIA journey


{% from "vimeo/macro.njk" import appVimeo with context %}
{{ appVimeo('797141739') }}

## Apply for QTS and the DIA

QTS users need to check their eligibility before they can apply for a QTS. This is to ensure applications are from legitimate teachers and approved countries. Data shows that many more people check their eligibility but do not then apply.

We designed the DIA create account journey to come after checking eligibility but before applying to reduce unnecessary account creation.

![Start QTS eligibility or continue QTS application](1-qts-model.png "Start QTS eligibility or continue QTS application")

## Create account journey

There is process of checks during the create account journey that identifies existing account. This is detailed in the [identifying duplicate accounts](/get-an-identity/duplicate-accounts) design history. 


### Create account and sign in

A create account page describes what data the user needs to enter. It also tells the user what DIA is and why they need it. Users who already have a DIA can use the ‘Sign in’ link.

This page is displayed at the end of the QTS eligibility checker.

![Create account or sign in](2-create-account.png "Create account or sign in")


### Email

We have not changed the process of entering email from the previous integration with NPQ. The user has to enter a personal email address and validate it by entering a one time passcode (OTP).


### Mobile number

We capture this data point for 2 reasons:

- As a secondary method to log in to their DIA if they’ve lost access to their email. They can use their mobile to log in to their DIA

- As an additional data point to identify existing DIA users. This forms part of the process of reducing duplicate accounts

![Enter mobile number](5-phone-number.png "Enter mobile number")


### Name
We ask the user to enter their name. We’ll capture this in DIA as the preferred name and we can share it with consuming services. We can use ‘name’ to reduce the possibility of a duplicate account being created.

The [DIA account details](/get-an-identity/user-account/#sharing-user-data-with-consuming-services) design history describes how DIA data points (name & date of birth) can be used and prepopulated in services. This data will be available to consuming services but is read-only.

![Enter name](7-name.png "Enter name")


### Date of birth  

We capture the user's date of birth for the same reasons as their name.

![Enter name](8-dob.png "Enter name")


### Account created

The user has completed the DIA account creation process and now can continue into the QTS service. Context is provided that they will leave the DIA service and move into their application. Also, we inform the user they can sign back in at any time using their verified email address.

![Account created](9-teacher-account.png "Account created")

The users data points can be edited with their account details


## Sign in to DIA

Existing DIA users can sign back in on the ‘Create account’ page. For the QTS integration, we designed around their process model.


### QTS routes
The QTS service guides users to the eligibility checker (see [create account flow](#apply-for-qts-and-the-tsa) or to sign in and continue their application.


### DIA sign in interstitial
If the user selects continue, we show an interstitial page. This is to provide context that they have left QTS and are on the DIA service. A details accordion explains to users what a DIA is. This is for users who may not have signed in for some time.

![Sign in interstitial](11-sign-in-interstitial.png "Sign in interstitial")


### Email
The user is prompted to enter the email address they used when creating their DIA. They validate this email using an OTP.

If users no longer have access to their account their can send the code to their [mobile phone](/get-an-identity/mobile).

### Signed in
The signed in page is displayed for users with DIA and who have verified their email address. It informs them that they will now be taken to the QTS service.

![Signed in to DIA](14-signed-in.png "Signed in to DIA")
