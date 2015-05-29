# Revealing Prototype Pattern

- Combines Prototype and Revealing Module patterns
- "Modularize" code into re-usable objects
- Variables/functions taken out of global namespace
- Expose only public members
- Functions loaded into memory once
- Extensible

## Cons

- `this` can be tricky
- Constructor separate from prototype definition