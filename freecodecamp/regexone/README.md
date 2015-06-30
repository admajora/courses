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
- `(())` nested groups - used to extract multiple layers of information  
  - Ex: `^(\w{3} (\d{4}))$` or `(\w+\s+(\d+))` or `(\w+ (\d+))` will match: "Jan 1987", "May 1969, 1969" 
- `()?`  
- `|` logical OR
  - `I love (cats|dogs)` will match "I love cats", "I love dogs"  
- `[a-zA-Z0-9_]` any letter or digit including the underscore
- `\D` represents any non-digit character 
- `\S` any non-whitespace character 
- `\W` any non-alphanumeric character (such as punctuation for example)
- `\0 \1 ...` [referencing][2]

## Practical Examples

### Example 1: Matching a scientific or decimal number

`^-?\d+(,\d+)*(\.\d+(e\d+)?)?$`

Your task | Text
:--:|:--:
match text | 3.14529
match text | -255.34
match text | 128           
match text | 1.9e10
match text | 123,340.00
skip text  | 720p             

### Example 2: Matching phone numbers

`1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[ -]?\d{4}`

your task| text | capture
:--:|:--:|:--:
capture text | 415-555-1234 | 415
capture text | 650-555-2345 | 650
capture text | (416)555-3456| 416
capture text | 202 555 456| 202
capture text | 4035555678 | 403
capture text | 1 416 555 9292 | 416  

### Example 3: Matching emails

your tasktext | capture
:--:|:--:
capture text|tom@hogwarts.comtom
capture text|tom.riddle@hogwarts.comtom.riddle
capture text|tom.riddle+regexone@hogwarts.comtom.riddle
capture text|tom@hogwarts.eu.comtom
capture text|potter@hogwarts.compotter
capture text|harry@hogwarts.comharry
capture text|hermione+regexone@hogwarts.comhermione  

 [0]: http://regexone.com/
 [1]: http://regexone.com/lesson/9?
 [2]: http://regexone.com/lesson/15?
