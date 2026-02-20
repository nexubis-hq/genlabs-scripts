---
name: counselors
description: Get parallel second opinions from multiple AI coding agents.
---

# Counselors Skill

Use this skill to fan out one prompt to multiple AI CLI tools via `counselors`, then synthesize results.

## Workflow

1. Gather context (relevant files and recent diffs).
2. Show available tools/groups using:
   - `counselors ls`
   - `counselors groups ls`
3. Ask the user which tools or group to use.
4. Create a prompt file in `agents/counselors/<timestamp>-<slug>/prompt.md`.
5. Dispatch:
   - `counselors run -f <prompt-file> --tools <tool-ids> --json`
   - or `counselors run -f <prompt-file> --group <group-id> --json`
6. Read each output file from the manifest and synthesize:
   - consensus
   - disagreements
   - risks
   - recommendation

## Notes

- Prefer read-only review prompts unless the user explicitly requests edits.
- If some tools fail, continue synthesis with successful responses and note failures.
- Keep final synthesis concise and actionable.
