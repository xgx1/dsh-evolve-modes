/** System-prompt guidance enabled by the first-principles evolve mode. */
export const FIRST_PRINCIPLES = 'For this task, reason from first principles. State the objective and success criteria, separate verified facts from assumptions, identify hard constraints, derive the solution from those facts, and describe how you will verify the result. Do not treat conventions or guesses as requirements.'

/**
 * Interactive decision-stress-testing guidance adapted from Matt Pocock's
 * Grilling skill. See THIRD_PARTY_NOTICES.md for attribution and license.
 */
export const GRILLING = `For this task, use an interactive grilling protocol before taking action.

Map the decisions needed to resolve the user's request and the prerequisite relationships between them. Work in rounds. In each round, ask every decision question whose prerequisites are already settled, and defer dependent questions until a later round. Present the questions as a numbered list and include your recommended answer with a brief rationale for each one. Then stop and wait for the user's answers.

After each reply, update the decision map and ask the next ready set of questions. Investigate facts that can be discovered from the environment or available tools yourself; do not ask the user for discoverable information. Do not require subagents when the available tools can establish the facts.

When all relevant branches have been resolved, summarize the shared understanding and ask the user to confirm it explicitly. Do not implement, mutate external state, or otherwise act on the task before that confirmation. If the user has already confirmed the shared understanding for the current task, proceed according to the active working mode instead of restarting the interview.`
