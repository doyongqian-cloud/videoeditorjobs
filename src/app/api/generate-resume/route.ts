import { NextResponse } from 'next/server'

type Payload = {
  name?: string
  contact?: string
  city?: string
  target?: 'short-form-social' | 'film-tv' | 'ad-agency' | string
  template?: 'ats' | 'creative' | 'compact' | string
  skills?: string[]
  projects?: { title?: string; desc?: string }[]
  education?: string
  portfolio?: string
}

function fallbackResume(p: Payload): string {
  const name = p.name?.trim() || 'Candidate Name'
  const contact = p.contact?.trim() || 'email@example.com | +00 0000-0000'
  const city = p.city?.trim() || ''
  const target = p.target || 'short-form-social'
  const template = (p.template || 'ats') as 'ats' | 'creative' | 'compact'
  const skills = (p.skills && p.skills.length ? p.skills : ['Premiere Pro', 'After Effects']).slice(0, 10)
  const projects = (p.projects || []).filter(x => x.title || x.desc)
  const edu = p.education?.trim() || 'Relevant Degree or Certification'
  const portfolio = p.portfolio?.trim() || ''

  const objectiveByTarget: Record<string, string> = {
    'short-form-social': 'Assistant Video Editor focused on short-form content, subtitles, and fast turnaround; comfortable repurposing assets and tracking social metrics.',
    'film-tv': 'Assistant Video Editor with experience in proxy workflow, timeline assembly, and media management in film/TV pipelines.',
    'ad-agency': 'Assistant Video Editor supporting motion graphics, client revisions, and deadline-driven ad delivery.',
  }

  const objective = objectiveByTarget[target] || objectiveByTarget['short-form-social']

  const expBullets = projects.length ? projects.map((p) => `- ${p.title ? `${p.title}: ` : ''}${p.desc || 'Assisted editing tasks; organized assets; exported deliverables; improved team efficiency by ~20%.'}`) : [
    '- Assisted lead editor on recurring projects; organized footage, synced audio, and prepared timelines, improving throughput by ~20%.',
    '- Added subtitles, basic color grading, and audio cleanup to deliver platform-ready exports under tight deadlines.',
    '- Managed media, proxies, and project files ensuring smooth handoffs and version control.'
  ]

  if (template === 'compact') {
    return [
      `# ${name}`,
      `${contact}${city ? ` | ${city}` : ''}`,
      '',
      `Objective: ${objective}`,
      '',
      `Skills: ${skills.join(', ')}`,
      '',
      'Experience:',
      ...expBullets.slice(0, 4),
      '',
      `Education: ${edu}`,
      portfolio ? `Portfolio: ${portfolio}` : ''
    ].filter(Boolean).join('\n')
  }

  if (template === 'creative') {
    return [
      `# ${name}`,
      `${contact}${city ? ` | ${city}` : ''}`,
      '',
      `> ${objective}`,
      '',
      '## Skills',
      ...skills.map(s => `- ${s}`),
      '',
      '## Experience',
      ...expBullets,
      '',
      `## Education\n${edu}`,
      portfolio ? `## Portfolio\n${portfolio}` : ''
    ].filter(Boolean).join('\n')
  }

  // default: ats
  return [
    `# ${name}`,
    `${contact}${city ? ` | ${city}` : ''}`,
    '',
    `**Objective**: ${objective}`,
    '',
    '**Skills**:',
    ...skills.map(s => `- ${s}`),
    '',
    '**Experience**:',
    ...expBullets,
    '',
    `**Education**: ${edu}`,
    portfolio ? `**Portfolio**: ${portfolio}` : ''
  ].filter(Boolean).join('\n')
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Payload

    const provider = process.env.RESUME_AI_PROVIDER || ''
    const apiKey = process.env.RESUME_AI_API_KEY || ''

    // If no provider configured, return fallback resume immediately
    if (!provider || !apiKey) {
      const resume = fallbackResume(payload)
      return NextResponse.json({ resume })
    }

    // Example: OpenRouter compatible request (you can switch provider logic here)
    let resumeText = ''
    try {
      const prompt = [
        "You are a professional resume writer specialized in video production roles. Generate a concise, one-page English resume for a candidate applying to an 'Assistant Video Editor' role.",
        'Use this structured JSON input: ' + JSON.stringify(payload),
        'Follow these rules:',
        '1) Output only the resume text in markdown with the following sections: Name (as heading), Contact (single line), Objective (1 sentence), Skills (bullet list), Experience (3-6 bullets max, each action-oriented, quantified where possible), Education (1 line), Portfolio (link).',
        "2) Tailor tone and keywords to the 'target' field: 'short-form-social' -> emphasize speed, repurposing, subtitles, social metrics; 'film-tv' -> emphasize logging, proxies, timeline assembly, ACES color pipeline; 'ad-agency' -> emphasize tight deadlines, client revisions, motion graphics support.",
        "3) Replace vague claims with reasonable realistic quantifications when user provides none—do not invent company names or overly specific metrics. Use phrases like 'Improved engagement by ~20%' rather than exact fabricated numbers.",
        '4) Keep resume concise, one page. Use action verbs: Assisted, Edited, Organized, Exported, Color-graded.',
        "5) Respect the 'template' field if provided: 'ats' -> clean headings and bullets; 'creative' -> use H2s and a short blockquote objective; 'compact' -> single-line Skills and fewer bullets."
      ].join('\n\n')

      if (provider === 'openrouter') {
        const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: process.env.RESUME_AI_MODEL || 'openai/gpt-4o-mini',
            messages: [
              { role: 'system', content: 'You are a helpful, concise assistant.' },
              { role: 'user', content: prompt },
            ],
            temperature: 0.4,
          }),
        })

        if (!resp.ok) throw new Error(`Provider error: ${resp.status}`)
        const json = await resp.json()
        resumeText = json?.choices?.[0]?.message?.content?.trim() || ''
      } else {
        // Unknown provider: fall back
        resumeText = ''
      }

    } catch (err) {
      // If provider call fails, fall back to deterministic template
      resumeText = ''
    }

    if (!resumeText) {
      const resume = fallbackResume(payload)
      return NextResponse.json({ resume })
    }

    return NextResponse.json({ resume: resumeText })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'unknown_error' }, { status: 400 })
  }
}


