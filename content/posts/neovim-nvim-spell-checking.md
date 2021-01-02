---
title: Spell Checking in Nvim
description: How to use the built-in spell check in Neovim (Nvim)
img: https://res.cloudinary.com/gcman105/image/upload/v1609613569/articles/Neovim/neovim_nvim_spell-checking_fdslc8.jpg
alt: Spell Checking in Nvim
author: Gary C.
date: '2 January 2021'
tags:
- nvim
---

## How to Spell Check in Neovim *(nvim)*

### First, add the spell check in the init.vim file

```vim
" spell languages
set splelllang=en-gb
```

In the line above, we set the spell language to `en-gb` *(UK English)*.

See a [list of language codes](http://ftp.vim.org/vim/runtime/spell/).

### Enable set spell in your configuration file

I don't want to use spell check all the time, I set a toggle for this option
in normal and insert mode.

*(To silently execute a map, use the `<silent>` attribute for the map.)*

```vim
nnoremap <silent> <F3> :set spell!<CR>
inoremap <silent> <F3> <C-O>:set spell!<CR>
```

### Correcting spell errors in insert or normal mode

In insert mode, if you have typed some words which Vim thinks is miss-spelled,
an underline is shown below the words. To correct the error, you can press
`<C-x>` followed `s`. A completion menu will show a list of suggestions.
You can then choose the correct one.

In normal mode, to navigate between the possible spell errors, use the
following shortcut key:

- `[s` go to previous spell error
- `]s` go to next spell error

If you think a word is not a spell error, you can use `zg` to add the word
to your spell list. To correct an error, use `z=`. A list of candidate words
will be shown. You are prompted to enter a number to select the correct word.

