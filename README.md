# JavaScript Test Suite Interview Demo
### This project was made to give a quick demo on my knowledge, experiences, and tricks I've learned throughout my professional career as a Software Quality Engineer.
##### The project was created with HTML, CSS, and JavaScript and is a program I show during interviews to show my ability in design and testing these languages.

##### The link to this project is on my GitHub which you can access from the main page of the project.
##### Requests for the source code can be sent to: heggjv@rose-hulman.edu

## Concepts Tested

### ASCII Entry Workaround
---

This is a rare but potentially devastating issue I have found with some input systems during my professional career.

Often the input field is checked for keystroke inputs and removes them, however sometimes if not accounted for properly an ASCII ALT-Key can bypass this check.

One such example I found was with (Alt + 45) which is the ASCII alt key for the - sign.

When submitted the system would actually **REFUND** the patient the money rather than charge them.

#### On the page there are three cases:
<ul>
	<li>One With Little Coverage</li>
	<li>Good Coverage No Ascii</li>
	<li>Great Coverage w/ Ascii</li>
</ul>

### Basis Path Coverage
---

Basis Path Coverage is a practice where all possible paths that the code can take for a specific part of a system have a test case that properly handles them.

In this demo I have done a simple if statement, however these can be much more complicated in the real world, often requiring many more paths to cover.

### Boundary Value Analysis
---

Boundary Value Analysis (or BVA) states that the most common areas of failure are along the boundaries of data and data types.

This example tests a user entry and determines if it falls within a range from [0, 100].

It tests for examples along both boundaries, as well as the extremes. 

It is not required (or useful) to exhaustively test each case from 0-100 to make sure it works, but rather a good idea to test the bounds and theoretical limits.

If a variable n works within the range of [0, 100] then n+1 will work as well as long as it does not go over 100.

### PIT Mutation Testing 
---

PIT Mutation Testing is a practice that changes the code at runtime and looks to see if your tests either account for the change by catching them, or if the system crashes.

The worst outcome in this case would be that the system carries on as if nothing had happened.

There are two simulated mutations in this example, the flipping of an operator from + to - and the changing of an if conditional from == to !=.

There are many more potential mutations, but the key is that these mutations are recognized and somehow dealt with.

### SQL Injection Attack
---

A common security hazard is by not accounting for and dealing with SQL Injection Attacks.

SQL Injection Attacks are the injection of malicious SQL statements within otherwise harmless text input fields.

The way this is dealt with in this example is by using Paramaterized Queries and Defensive Input structuring. 

The example shows different kinds of attacks, as well as how we deal with them with our Parameterized Queries.


## Project Structure 

#### The project is structured by the three principal layers:
<ul>
	<li>Presentation</li>
	<li>Domain</li>
	<li>DataSource</li>
</ul>

The Presentation is strictly made up of HTML Page Displays.

The Domain is strictly JavaScript and other page-specific logic.

The DataSource is strictly made up of data that the Presentation will display.

This was done purposefully as to account for potential scalability issues in the future if the requirements for this project were to change: rather than having a ton of "magic numbers" or "magic strings" we have delegated them to maps within their respective layers and have given them proper identification tags.

This also allows for an easier time understanding the system at hand and where everything is used: an invaluable tool for projects that only grow larger and more complicated over time.

All these choices were deliberately made at the start before development to **ensure a quality and sound build that can react and handle future requirements changes or scalability adjustments**.

## How To Run

#### To properly run and demonstrate this there are a few steps to follow:
<ol>
	<li>Install Node.js</li>
	<li>Install http-server from Node.js</li>
	<li>Go to the project root directory and run http-server in the command line</li>
	<li>Navigate to Presentation/main_page.html and access it</li>
	<li>Navigate the HTML Pages from there</li>
</ol>

##### For proper web security checks must be made to prevent file directory skipping and accessing sensitive locations.
##### For ease of use however this project will not have such checks and you are free to navigate as needed.
