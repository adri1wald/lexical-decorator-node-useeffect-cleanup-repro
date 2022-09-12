# Setup
- Run `yarn`
- Run `yarn dev`

# Repro steps
1. Click in the editor
2. Delete backwards from the end of the editor
3. Undo your deletes
4. Be alerted of useEffect cleanup when the node remounts rather than when it unmounted
