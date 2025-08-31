'use server';

/**
 * @fileOverview Generates an 'About Me' section for a portfolio, including a bio summary and a Zenitsu-related fun fact.
 *
 * - generateAboutMeSection - A function that generates the about me section content.
 * - GenerateAboutMeSectionInput - The input type for the generateAboutMeSection function.
 * - GenerateAboutMeSectionOutput - The return type for the generateAboutMeSection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeSectionInputSchema = z.object({
  bio: z
    .string()
    .describe("The portfolio owner's biography, used for summarization and fun fact generation."),
});
export type GenerateAboutMeSectionInput = z.infer<typeof GenerateAboutMeSectionInputSchema>;

const GenerateAboutMeSectionOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the provided biography.'),
  zenitsuFunFact: z
    .string()
    .describe(
      'A fun fact related to Zenitsu from Demon Slayer, tailored to the portfolio owner\'s bio.'
    ),
});
export type GenerateAboutMeSectionOutput = z.infer<typeof GenerateAboutMeSectionOutputSchema>;

export async function generateAboutMeSection(
  input: GenerateAboutMeSectionInput
): Promise<GenerateAboutMeSectionOutput> {
  return generateAboutMeSectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMeSectionPrompt',
  input: {schema: GenerateAboutMeSectionInputSchema},
  output: {schema: GenerateAboutMeSectionOutputSchema},
  prompt: `You are an AI assistant specializing in generating engaging "About Me" sections for personal portfolios.

  Summarize the following biography in a concise and professional manner.

  Then, generate a fun fact that incorporates elements of Zenitsu Agatsuma's character (e.g., humor, fear of thunder, hidden potential) and relates it to the portfolio owner's background. Inject some of Zenitsu's humorous character into the output.

  Biography: {{{bio}}}
  `,
});

const generateAboutMeSectionFlow = ai.defineFlow(
  {
    name: 'generateAboutMeSectionFlow',
    inputSchema: GenerateAboutMeSectionInputSchema,
    outputSchema: GenerateAboutMeSectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
