# [Smashing into Vim](http://www.pluralsight.com/courses/smash-into-vim)

## 1. Smash into Vim: Part 1

### 1.1 Introduction

- Efficient: achieving maximum productivity with minimum wasted effort or expense.

**Where Vim shines**

- It's on every platform
- 100% keyboard driven
- text surgery
- powerful editing
- local & remote
- highly configurable
- extendable with plugins
- mac-friendly
- great documentation
- long-term skills

**Where Vim Struggles**

- Undesirable defaults
- clunky scripting language
- destructive tasks are too easy
- incosistent regular expressions

### 1.2 Philosofy

- modal editing / operators
- **Core concepts**: text editing & manipulation trumps initial input
- Vim modes:
  - Normal
  - Insert
  - Visual
  - Replace
  - Command-line
- `d2w` (delete two words) (operator count motion)
- `:h search-term` = search for help

### 1.3 Installation

### 1.4 The Basics

- `yy`: yank (copy) a line
- `p`: paste text below
- `P`: paste text above
- `cw` change (one) word. switches to insert mode
- `3cw`: change 3 words
- `6l`: six timed rightward
- `fN`: move forward to the next occurrence of 'N'
- `FN`: move backward to the next occurrence of 'N'
- `wi`: move to the next word and switch to insert mode
- `:w`: save the file
- `:w !sudo tee %` = `:w !sudo tee example.conf` = `cat example.conf | sudo tee example.conf`
- `i`: insert text before cursor
- `a`: insert text after cursor 
- `u`: undo 
- `Ctrl-R`: Redo
- `:q`: quit
- `:wq!`: write & quit 

### 1.5 Editing Files

- `/word`: find *word* in the file
- `r3`: replace the character by 3
- `n`: go to the next match
- `N` : go to the backwards match
- `set hlsearch`: highlight the search results
- `set incsearch`: highlight search when typing
- `:%s/search/replace/gc`: search for all occurrences and ask for confirmation on each match
- `set number`: navigate by number
- `gg`: go to the top of line
- `G`: go to the end of file
- `13g`: go to line 13
- `:b name`: switch to buffer
- `c`: delete text and go to the insert mode
- `p`: paste after cursor
- `P`: paste before cursor
- `.`: repeat the last command
