# [RegexOne][0]

## Interactive Tutorial

- `\d`  any digit from 0 to 9
- `.`  wildcard, match any single character (letter, digit, whitespace, everything)
- `\.`  match the dot accordingly
- `[abc]`  will only match a single a, b, or c letter and nothing else
- `[cmf]an`  match can, man e fan
- `[^drp]an`  inverse expression - to match any three letter word ending with 'an' that does not start with 'd', 'r' or 'p'
- `[^n-p]`  will match any character except for letters n to p
- `[0-6]`  will match any digit character from zero to six
- `a{3}`  will match the a character exactly three times
- `a{1,3}`  will match the a character no more than 3 times, but no less than once
- `a{1,}`  in JavaScript, will match 1 or more a's.
- `waz{3,4}up`  will match wazzzup and wazzzzup
- `*`  match any number characters
- `+`  ensures that the user has entered at least one character
  - Ex: `a+b*c+`, `[abc]+`, `[abc]*`
- `?`  metacharacter which denotes optionality. This metacharacter allows you to match either zero or one of the preceding character or group
  - Ex: `ab?c`  will match either the strings "abc" or "ac" because the b is considered optional
  - Ex2: `\w files? found\?`  match "1 file found?", "2 files found?", and "x files found?"
- `\w`  alphanumeric meta-character
- ` ` (space)  
- `_` underscore  
- `\t` tab  
- `\n` new line  
- `\r` carriage return (useful in windows environment)  
- `\s` will match any of the specific whitespaces above and is extremely useful when dealing with imperfect input text  
  - Ex: `\d\.\s+abc` [example][1]
- `^` start of the line  
- `$` end of the line
  - Ex: `^Mission: successful$` will match Mission: successful
- `()` grouping characters - You can place any pattern inside the parenthesis to **capture** that part of the pattern  
  - Ex: `^(\w+).pdf$` - match those files, for example: "file_a_record_file.pdf", "file_yesterday.pdf", "file_a_record_file", "file_yesterday" 
- ``  
- ``  
- ``  
- ``  
- ``  
- ``  

 [0]: http://regexone.com/
 [1]: http://regexone.com/lesson/9?
