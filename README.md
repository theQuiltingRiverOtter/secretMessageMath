# secretMessageMath
An application to make a secret message that is solved using multiplication and division

This application asks the user for a string to encode. It will then convert each letter to a math problem, where the answer to the math problem correlates to the letter from the original string.

Example: 
User enters "hi"

Application returns
 ____     _____ 
 3 X 2     5 X 2


6 = h
10 = i

(in full application, entire alphabet will be returned with values regardless of which letters are in original string)

Results should be formatted for printing so the secret message can be printed off for a child to solve

Basic application should include the 1-12 times and division tables, could possibly expand to more math problems such as three-digit addition and subtraction, two-digit multiplication and division, fractions, etc. with options for the user to select what type of problems to include.


Organization:
    Possibly use an object to store the tables, not sure whether to break up into multiple objects for each time/division table or just include them all in one. More advanced could use a factory function or class to create these allowing for more flexibility.

    Pick 26 random properties from the object, store in a new object with alphabet as keys, should probably use object.values and check if value is in object before assigning to ensure no duplication
    {
        a : {"6": ['1x6', "6x1", "3x2", "2x3"]},
        b : {"30" : ["3x10", "10x3", "5x6", "6x5"]},
        c : {"3" : ["12/4", "9/3", "33/11",...]},
        ...
    }


    For each letter in the secret message, return a blank space with the key on the letter object underneath it.

    Display the entire alphabet object.

    To Dos:
    JS: function to make legend needs a way to ensure the same value isn't added more than once. I tried this with a while loop and an array of used values, but it took to long for the code to complete. This might be fixed with more data in the multiplication and division objects. Another option could be using a set. It could also probably be refactored with two extra functions, one to connect the answers and another to connect the problems.

    Finish multiplication and division objects, this could be a route task or could use functions to create dynamically.

    Add DOM controls

    Add function to convert secret message to items in legend.

    CSS:  All styling

    HTML: Add space for the returned secret message, add more form inputs to give user more flexibility (i.e. if they only want the 4,7,8,9 times tables, they could just select those)
    
    
