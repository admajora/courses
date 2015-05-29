# Revealing Module Pattern

## Pros

- "Modularize" code into re-usable objects
- Variables/functions taken out of global namespace
- Expose only public members
- "Cleaner" way to expose public members

## Cons

- Functions may be duplicated across objects in memory when not using singleton
- Not easy to extend
- Some complain about debugging