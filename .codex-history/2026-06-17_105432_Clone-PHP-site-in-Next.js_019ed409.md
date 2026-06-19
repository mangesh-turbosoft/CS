# Codex Session

> **Resume:** `codex --resume 019ed409-c078-7bd2-9814-472342cd83f6`

| Field | Value |
|---|---|
| **Session ID** | `019ed409-c078-7bd2-9814-472342cd83f6` |
| **Working Dir** | `d:\Frontend Developer\creativeskills.com` |
| **Model** | `gpt-5.4` |
| **Provider** | `openai` |
| **Source** | vscode |
| **Started** | 6/17/2026, 10:54:29 AM |
| **Last Updated** | 6/17/2026, 10:54:32 AM |
| **Messages** | 2 |

---

## User <sup>6/17/2026, 10:54:31 AM</sup>

# AGENTS.md instructions for d:\Frontend Developer\creativeskills.com

<INSTRUCTIONS>
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

</INSTRUCTIONS>

<environment_context>
  <cwd>d:\Frontend Developer\creativeskills.com</cwd>
  <shell>powershell</shell>
  <current_date>2026-06-17</current_date>
  <timezone>Asia/Calcutta</timezone>
  <filesystem><workspace_roots><root>d:\Frontend Developer\creativeskills.com</root></workspace_roots><permission_profile type="managed"><file_system type="restricted"><entry access="read"><special>:root</special></entry><entry access="write"><path>d:\Frontend Developer\creativeskills.com</path></entry><entry access="write"><special>:slash_tmp</special></entry><entry access="write"><special>:tmpdir</special></entry><entry access="read"><path>d:\Frontend Developer\creativeskills.com\.git</path></entry><entry access="read"><path>d:\Frontend Developer\creativeskills.com\.agents</path></entry><entry access="read"><path>d:\Frontend Developer\creativeskills.com\.codex</path></entry></file_system></permission_profile></filesystem>
</environment_context>


---

## User <sup>6/17/2026, 10:54:31 AM</sup>

# Context from my IDE setup:

## Active file: src/app/componants/casestudies.tsx

## Open tabs:
- casestudies.tsx: src/app/componants/casestudies.tsx
- App.jsx: d:\Frontend Developer\one-page\my-react-app\src\App.jsx

## My request for Codex:
I am recreating an existing live PHP website in Next.js 16 + Tailwind CSS.

Your goal is NOT to redesign or improve anything.

STRICT REQUIREMENTS:

* Create a pixel-perfect replica of the live website.
* Match the original design exactly.
* Keep the same layout, spacing, paddings, margins, widths, heights, font sizes, colors, borders, shadows and alignment.
* Do not modernize the UI.
* Do not add new styles.
* Do not change section structure.
* Do not create your own design decisions.
* Preserve all responsive behavior.
* Keep the HTML hierarchy as close as possible to the original code.
* Convert only what is necessary for React/Next.js:

  * class → className
  * inline styles → React style syntax
  * image paths → Next.js compatible paths

Before returning code, verify:

1. Header matches exactly.
2. Banner matches exactly.
3. Content section widths match exactly.
4. Images have the same dimensions and positions.
5. Typography matches exactly.
6. Footer matches exactly.
7. Desktop and mobile layouts match the original.

If any part does not visually match the live website, revise it before returning the code.

Return only production-ready Next.js + Tailwind code.
No explanations.
No redesign.
No assumptions.
Exact clone only.


---
