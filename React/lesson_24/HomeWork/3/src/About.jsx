import React from 'react'
var users = [{first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
    {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
    {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
    {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id:78908},
    {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249", id:67653},
    {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
    {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
    {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6", id: 34239}];

    
export default function About(props) {
console.log(props)
var id=props.match.params.id
        return (
            <div>
<p><span>first_name-</span><strong>{users[id].first_name}</strong></p>
<p><span>last_name-</span><strong>{users[id].last_name}</strong></p>
<p><span>email-</span><strong>{users[id].email}</strong></p>
<p><span>gender-</span><strong>{users[id].gender}</strong></p>
<p><span>ip_address-</span><strong>{users[id].ip_address}</strong></p>
<p><span>id-</span><strong>{users[id].id}</strong></p>
            </div>
        )
}