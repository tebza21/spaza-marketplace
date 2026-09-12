# Spaza Supabase Connection

Project: Spaza Marketplace
Supabase ref: gbyujowoqalxtbhpdbod
Region: eu-west-1

## Add these scripts before the Spaza application scripts

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="js/supabase.js"></script>
<script src="js/supabase-auth.js"></script>
<script src="js/supabase-catalogue.js"></script>

## Test

Open the browser console and run:

getProducts().then(console.log).catch(console.error);

The frontend is using the publishable key only. Never put a service-role
or secret key in the browser.
