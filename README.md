# library-project
Library project via The Odin Project

1/9/2024: Today I am expanding on the example code (a simple book constructor I wrote). The end product will be a app with options to add books to the library with user input, remove books, and mark them as read/unread.
There are plenty of bugs to work out, but currently the app logs the read status and Book info in the console. The new book button doesn't trigger the new book form when triggered yet and the myLibrary info for each book doesn't populate the book cards yet unless I target one specific Book object, which is not what I need to do. To be continued...
~5 hrs

1/10/2024: Today I was able to get the user input and store it in variables; populating that input as a new HTML element when I submit the form is still on the to-do list. 
I put some pizazz into the CSS in between building the JavaScript. I make the Book objects (which have now been commented out until I can figure out how to populate them responsively from input instead of manually) look like actual books (more or less). 
The form that pops up when the "Add a new Book" button it clicked looks very clean and self explanitory, with tidy labels and textbooks for title, author, and pages as well as radio buttons for the read status of the book. The read/not read buttons don't toggle at the moment but that's a quick fix for later.
I commented out the majority of the code I wrote yesterday in an attempt to switch from manually creating objects to creating them dynamically, but I've run into issues with trying to SET the info I get with from the input form. I tried firing a function to update the book card's inner HTML to the input when the form in submitted, and I tried appending a new element to the "shelf" div where the manually-created book cards were populating, but no luck. Tomorrow I'll be trying again to channel the input into a new Book constructor, and play with prototypes some more. 
~7 hours