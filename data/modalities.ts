export type ModalitySlug =
  | 'cbt'
  | 'dbt'
  | 'act'
  | 'psychodynamic'
  | 'ifs'
  | 'somatic'
  | 'eft'
  | 'narrative'
  | 'gestalt'
  | 'person-centered'
  | 'existential'
  | 'sfbt'
  | 'mi'
  | 'cft'
  | 'ipt'
  | 'logotherapy'

export interface Modality {
  slug: ModalitySlug
  name: string
  fullName: string
  tagline: string
  description: string
  whatItTreats: string[]
  whatSessionsLookLike: string
  bestFor: string
  notIdealFor: string
  sessionStructure: 'structured' | 'open' | 'mixed'
  timeOrientation: 'past' | 'present' | 'future' | 'all'
  bodyBased: boolean
  relationalFocus: boolean
  theoreticalFamily: 'cognitive-behavioral' | 'humanistic' | 'psychodynamic' | 'somatic' | 'integrative' | 'process'
}

export const modalities: Modality[] = [
  {
    slug: 'cbt',
    name: 'CBT',
    fullName: 'Cognitive Behavioral Therapy',
    tagline: 'Change how you think to change how you feel.',
    description:
      'CBT is one of the most researched therapies in existence. It operates on the premise that thoughts, feelings, and behaviors are interconnected — and that identifying and restructuring distorted thinking patterns can relieve emotional distress and shift behavior. It\'s practical, time-limited, and evidence-dense.',
    whatItTreats: ['Anxiety', 'Depression', 'OCD', 'Phobias', 'Panic disorder', 'PTSD', 'Eating disorders'],
    whatSessionsLookLike:
      'Structured, goal-oriented sessions with a clear agenda. You\'ll identify negative thought patterns, challenge them with evidence, and practice alternative ways of thinking. Homework between sessions is standard.',
    bestFor: 'People who want practical tools, prefer structure, and are motivated to work between sessions.',
    notIdealFor: 'Those seeking deep exploration of past trauma or open-ended self-discovery.',
    sessionStructure: 'structured',
    timeOrientation: 'present',
    bodyBased: false,
    relationalFocus: false,
    theoreticalFamily: 'cognitive-behavioral',
  },
  {
    slug: 'dbt',
    name: 'DBT',
    fullName: 'Dialectical Behavior Therapy',
    tagline: 'Build the life worth living.',
    description:
      'DBT blends cognitive-behavioral techniques with mindfulness and radical acceptance, organized around four concrete skill modules. The core dialectic: you are doing the best you can, and you need to do better — holding both truths at once. Built for intense emotional experience, not just diagnosis.',
    whatItTreats: ['Emotional dysregulation', 'Self-harm', 'Suicidal ideation', 'Eating disorders', 'Substance use', 'Relationship instability'],
    whatSessionsLookLike:
      'Usually combines individual therapy with a skills training group. Highly structured, teaching concrete skills in distress tolerance, emotion regulation, interpersonal effectiveness, and mindfulness.',
    bestFor: 'People with intense, rapidly shifting emotions who need concrete coping skills and behavioral structure.',
    notIdealFor: 'Those primarily seeking insight, open-ended exploration, or who aren\'t ready for structured skills work.',
    sessionStructure: 'structured',
    timeOrientation: 'present',
    bodyBased: false,
    relationalFocus: false,
    theoreticalFamily: 'cognitive-behavioral',
  },
  {
    slug: 'act',
    name: 'ACT',
    fullName: 'Acceptance & Commitment Therapy',
    tagline: 'Stop fighting your mind. Start building your life.',
    description:
      'ACT teaches psychological flexibility: accepting what\'s outside your control, defusing from unhelpful thoughts, clarifying what you value, and committing to action in those directions — even when discomfort shows up. It doesn\'t try to eliminate symptoms. It tries to make symptoms irrelevant to living well.',
    whatItTreats: ['Anxiety', 'Depression', 'Chronic pain', 'OCD', 'Substance use', 'Workplace stress'],
    whatSessionsLookLike:
      'Mix of structured exercises and open conversation — metaphors, experiential techniques, values clarification. You\'ll practice defusing from thoughts and building willingness to feel difficult emotions while acting on what matters.',
    bestFor: 'People who\'ve tried to eliminate anxiety or depression and found the effort exhausting — or who want a values-based framework for living.',
    notIdealFor: 'Those in acute crisis who need immediate symptom relief.',
    sessionStructure: 'mixed',
    timeOrientation: 'future',
    bodyBased: false,
    relationalFocus: false,
    theoreticalFamily: 'cognitive-behavioral',
  },
  {
    slug: 'psychodynamic',
    name: 'Psychodynamic',
    fullName: 'Psychodynamic Therapy',
    tagline: 'Understand where you came from to understand who you are.',
    description:
      'Psychodynamic therapy explores how unconscious processes, early relationships, and unresolved conflicts shape current feelings and behavior. It\'s slower and deeper than most other modalities — the goal is fundamental change in how you relate to yourself and others, through insight accumulated over time.',
    whatItTreats: ['Depression', 'Anxiety', 'Relationship difficulties', 'Low self-esteem', 'Identity confusion', 'Grief'],
    whatSessionsLookLike:
      'Open-ended, exploratory conversations. You lead. The therapist listens closely, reflects patterns, and draws connections between past relationships and present dynamics. Often long-term work.',
    bestFor: 'People who want deep self-understanding and are curious about the roots of their patterns.',
    notIdealFor: 'Those seeking quick symptom relief or a structured, goal-oriented approach.',
    sessionStructure: 'open',
    timeOrientation: 'past',
    bodyBased: false,
    relationalFocus: true,
    theoreticalFamily: 'psychodynamic',
  },
  {
    slug: 'ifs',
    name: 'IFS',
    fullName: 'Internal Family Systems',
    tagline: 'Every part of you makes sense — even the ones you hate.',
    description:
      'IFS views the mind as made up of distinct "parts" — inner critics, protectors, exiles — coordinated by a calm, compassionate "Self." Rather than fighting your inner critic, you get curious about it. The goal isn\'t to eliminate difficult parts but to understand what they\'re protecting and help them relax.',
    whatItTreats: ['Trauma', 'Anxiety', 'Depression', 'Shame', 'Eating disorders', 'Relationship issues'],
    whatSessionsLookLike:
      'You\'ll be guided to turn inward, notice different internal voices or feelings, and engage with them directly — with curiosity rather than judgment. Sessions can feel almost meditative.',
    bestFor: 'People who feel internally fragmented, plagued by self-criticism, or drawn to understanding their inner world as a system.',
    notIdealFor: 'Those who prefer concrete, behavioral skill-building.',
    sessionStructure: 'mixed',
    timeOrientation: 'all',
    bodyBased: false,
    relationalFocus: false,
    theoreticalFamily: 'psychodynamic',
  },
  {
    slug: 'somatic',
    name: 'Somatic',
    fullName: 'Somatic Therapy',
    tagline: 'Your body kept the score. Let\'s read it together.',
    description:
      'Somatic therapies recognize that trauma and stress are stored in the body — in muscle tension, breath patterns, posture, and nervous system states — not just the mind. Rather than only talking about experiences, you work with physical sensations directly as they arise in the room.',
    whatItTreats: ['Trauma', 'PTSD', 'Chronic pain', 'Anxiety', 'Dissociation', 'Emotional numbness'],
    whatSessionsLookLike:
      'Your therapist will frequently ask you to slow down and notice what\'s happening in your body. Sessions may involve breathwork, movement, grounding exercises, and tracking physical sensations in real time.',
    bestFor: 'People whose distress lives in the body — hypervigilance, numbness, chronic tension — or who feel disconnected from physical experience.',
    notIdealFor: 'Those uncomfortable with body awareness or who prefer purely cognitive approaches.',
    sessionStructure: 'mixed',
    timeOrientation: 'present',
    bodyBased: true,
    relationalFocus: false,
    theoreticalFamily: 'somatic',
  },
  {
    slug: 'eft',
    name: 'EFT',
    fullName: 'Emotionally Focused Therapy',
    tagline: 'Attachment is the architecture of all your relationships.',
    description:
      'EFT, grounded in attachment theory, maps the negative cycles people get stuck in — pursue/withdraw, attack/defend — and helps access the underlying vulnerable emotions driving those cycles. Primarily used for couples, but powerful for individuals working on attachment patterns and relational wounds.',
    whatItTreats: ['Relationship distress', 'Attachment insecurity', 'Couples conflict', 'Grief', 'Depression'],
    whatSessionsLookLike:
      'Sessions identify your relational patterns and the attachment needs beneath them. For couples, guided conversations break reactive cycles. For individuals, it\'s about understanding your attachment style and its origins.',
    bestFor: 'People struggling with relationship patterns — especially those who feel chronically disconnected, anxious in relationships, or prone to shutdown.',
    notIdealFor: 'Those seeking individual symptom relief unrelated to relational patterns.',
    sessionStructure: 'mixed',
    timeOrientation: 'present',
    bodyBased: false,
    relationalFocus: true,
    theoreticalFamily: 'process',
  },
  {
    slug: 'narrative',
    name: 'Narrative',
    fullName: 'Narrative Therapy',
    tagline: 'You are not the problem. The problem is the problem.',
    description:
      'Narrative therapy separates people from their problems by externalizing them — the problem is out there, not inside you. It surfaces "alternative stories" where you acted contrary to the dominant problem narrative, and builds a richer identity from those. It\'s deeply interested in culture, context, power, and whose voices live in your head.',
    whatItTreats: ['Depression', 'Trauma', 'Identity issues', 'Grief', 'Family conflict', 'Cultural identity struggles'],
    whatSessionsLookLike:
      'Deeply conversational. You\'ll be invited to tell your story, then examine whose voices are in it, what gets left out, and what alternative stories might exist. Often uses writing, letters, and documents as therapeutic tools.',
    bestFor: 'People curious about identity, culture, and meaning — or those who feel defined by a problem they want to separate from.',
    notIdealFor: 'Those seeking skill-building or symptom-focused treatment.',
    sessionStructure: 'open',
    timeOrientation: 'all',
    bodyBased: false,
    relationalFocus: false,
    theoreticalFamily: 'process',
  },
  {
    slug: 'gestalt',
    name: 'Gestalt',
    fullName: 'Gestalt Therapy',
    tagline: 'What\'s alive right now, in this room, is the therapy.',
    description:
      'Gestalt therapy is radically present-focused. Rather than analyzing the past, it works with what\'s alive right now — in your body, in the room, in the therapeutic relationship. Techniques like the "empty chair" allow you to work through unresolved conflicts in real time, not just talk about them.',
    whatItTreats: ['Anxiety', 'Depression', 'Relationship problems', 'Low self-awareness', 'Unresolved grief', 'Existential concerns'],
    whatSessionsLookLike:
      'Experiential and active. You might speak to an empty chair, notice your breathing mid-sentence, or work with a dream as if it\'s happening now. The therapist is present and active, not a blank screen.',
    bestFor: 'People who want to deepen self-awareness and are open to experiential, in-the-moment work.',
    notIdealFor: 'Those who want structured homework or a clear framework to follow.',
    sessionStructure: 'open',
    timeOrientation: 'present',
    bodyBased: true,
    relationalFocus: true,
    theoreticalFamily: 'humanistic',
  },
  {
    slug: 'person-centered',
    name: 'Person-Centered',
    fullName: 'Person-Centered Therapy',
    tagline: 'You already have what you need. The therapist creates conditions to find it.',
    description:
      'Developed by Carl Rogers, person-centered therapy is non-directive: the therapist doesn\'t guide, interpret, or prescribe — they offer unconditional positive regard, genuine empathy, and authentic presence. The belief is that under the right relational conditions, people naturally move toward growth. The relationship is the therapy.',
    whatItTreats: ['Depression', 'Anxiety', 'Low self-esteem', 'Identity struggles', 'Grief', 'Life transitions'],
    whatSessionsLookLike:
      'You talk, the therapist listens deeply and reflects. No agenda, no homework, no techniques. The therapist doesn\'t tell you what to think or feel — they help you understand yourself through being genuinely heard.',
    bestFor: 'People who want to feel deeply understood and trust their own capacity for growth, without being steered toward a predetermined outcome.',
    notIdealFor: 'Those seeking structured techniques, skills training, or directive guidance.',
    sessionStructure: 'open',
    timeOrientation: 'present',
    bodyBased: false,
    relationalFocus: true,
    theoreticalFamily: 'humanistic',
  },
  {
    slug: 'existential',
    name: 'Existential',
    fullName: 'Existential Therapy',
    tagline: 'Your anxiety might be telling you something true.',
    description:
      'Existential therapy doesn\'t pathologize anxiety — it treats it as a natural response to the human condition: freedom, responsibility, isolation, meaninglessness, mortality. The work is confronting these unavoidable realities directly rather than managing symptoms. Less about fixing what\'s wrong, more about living authentically.',
    whatItTreats: ['Existential anxiety', 'Meaninglessness', 'Identity and authenticity', 'Grief and loss', 'Life transitions', 'Isolation'],
    whatSessionsLookLike:
      'Philosophical, exploratory dialogue. The therapist is genuinely present — not neutral — and may challenge or question directly. Sessions often feel more like deep conversation than clinical treatment.',
    bestFor: 'People grappling with big questions: purpose, mortality, freedom, who they want to be. Also those who feel previous therapy was too clinical or shallow.',
    notIdealFor: 'Those seeking symptom relief, skills training, or a structured protocol.',
    sessionStructure: 'open',
    timeOrientation: 'present',
    bodyBased: false,
    relationalFocus: true,
    theoreticalFamily: 'humanistic',
  },
  {
    slug: 'sfbt',
    name: 'SFBT',
    fullName: 'Solution-Focused Brief Therapy',
    tagline: 'You don\'t need to understand the problem to solve it.',
    description:
      'SFBT flips the conventional therapy script: instead of excavating the problem, it focuses on what\'s already working and what the future could look like without the problem. Strength-based and efficiency-focused — meaningful progress in as few as 2–6 sessions. No requirement for psychological excavation.',
    whatItTreats: ['Depression', 'Anxiety', 'Substance use', 'Family conflict', 'Adolescent issues', 'Behavioral problems'],
    whatSessionsLookLike:
      'Deliberately brief. The therapist asks about exceptions (times when the problem was less severe), preferred futures (the "miracle question"), and existing strengths. Little exploration of the past.',
    bestFor: 'People who want results quickly, prefer forward-looking work, or don\'t want to spend months unpacking their history.',
    notIdealFor: 'Those with complex trauma or deep-seated patterns that require extended work.',
    sessionStructure: 'structured',
    timeOrientation: 'future',
    bodyBased: false,
    relationalFocus: false,
    theoreticalFamily: 'process',
  },
  {
    slug: 'mi',
    name: 'MI',
    fullName: 'Motivational Interviewing',
    tagline: 'Your own reasons for change are the only ones that work.',
    description:
      'MI is a collaborative conversation style designed to strengthen a person\'s own motivation and commitment to change. It doesn\'t push — it evokes. The therapist helps you articulate your own ambivalence and your own reasons to move. Particularly powerful when part of you wants to change and part of you doesn\'t.',
    whatItTreats: ['Substance use', 'Ambivalence about change', 'Anxiety', 'Depression', 'Eating disorders', 'Health behavior change'],
    whatSessionsLookLike:
      'Collaborative, conversational. No lecture, no prescription. The therapist asks open questions, reflects what they hear, and helps you explore the gap between where you are and where you want to be.',
    bestFor: 'People who feel ambivalent about change — who know something isn\'t working but aren\'t sure they want to change it, or feel pushed by others to do so.',
    notIdealFor: 'Those already fully committed to change who just need skills or ongoing support.',
    sessionStructure: 'mixed',
    timeOrientation: 'future',
    bodyBased: false,
    relationalFocus: true,
    theoreticalFamily: 'process',
  },
  {
    slug: 'cft',
    name: 'CFT',
    fullName: 'Compassion-Focused Therapy',
    tagline: 'The harshest critic in the room is you. Let\'s change that.',
    description:
      'Developed by Paul Gilbert, CFT was built for people who struggle with high shame and self-criticism — often those who had difficult, threatening, or neglectful early environments. It works with three emotional regulation systems (threat, drive, and soothing) to build the capacity for self-compassion that was never developed. Not soft — rigorously evidence-based.',
    whatItTreats: ['Shame', 'Self-criticism', 'Depression', 'Anxiety', 'Trauma', 'Eating disorders', 'Personality difficulties'],
    whatSessionsLookLike:
      'A blend of psychoeducation, mindfulness, and compassionate mind training. You\'ll learn about your emotional systems, practice compassionate self-talk and imagery, and gradually build a warmer relationship with yourself.',
    bestFor: 'People with a fierce inner critic, deep shame, or a history of environments where warmth and safety were scarce.',
    notIdealFor: 'Those who find self-compassion concepts foreign or uncomfortable and aren\'t ready to examine their relationship with themselves.',
    sessionStructure: 'mixed',
    timeOrientation: 'present',
    bodyBased: false,
    relationalFocus: false,
    theoreticalFamily: 'integrative',
  },
  {
    slug: 'ipt',
    name: 'IPT',
    fullName: 'Interpersonal Therapy',
    tagline: 'Your mood and your relationships are not separate problems.',
    description:
      'IPT is a time-limited, evidence-based therapy that focuses on the link between your current mood and what\'s happening in your relationships right now. It works in four areas: grief, role disputes, role transitions, and interpersonal isolation. WHO-recommended for depression in low-resource settings globally.',
    whatItTreats: ['Depression', 'Grief', 'Relationship conflict', 'Life transitions', 'Eating disorders', 'Bipolar disorder'],
    whatSessionsLookLike:
      'Structured but conversational, typically 12–16 sessions. You\'ll map how current interpersonal events connect to your mood, then work systematically on one or two problem areas. Practical and focused.',
    bestFor: 'People whose depression or distress is clearly connected to relationship events — loss, conflict, major life changes, or loneliness.',
    notIdealFor: 'Those whose issues are not primarily relational, or who want long-term exploratory work.',
    sessionStructure: 'structured',
    timeOrientation: 'present',
    bodyBased: false,
    relationalFocus: true,
    theoreticalFamily: 'process',
  },
  {
    slug: 'logotherapy',
    name: 'Logotherapy',
    fullName: 'Logotherapy',
    tagline: 'Even in suffering, meaning can be found.',
    description:
      'Founded by Viktor Frankl — a psychiatrist who survived Auschwitz — logotherapy holds that the primary human drive is the search for meaning, not pleasure or power. It addresses the "existential vacuum": the feeling that life is empty or pointless. Applied across cultures, it offers a framework for finding meaning in creation, experience, and even unavoidable suffering.',
    whatItTreats: ['Meaninglessness', 'Depression', 'Anxiety', 'Grief', 'Existential crisis', 'Trauma', 'Terminal illness adjustment'],
    whatSessionsLookLike:
      'Dialogic and philosophical, but with specific techniques — paradoxical intention (deliberately wishing for feared outcomes to reduce anxiety) and dereflection (shifting focus away from the self toward meaning in the world). More directive than existential therapy.',
    bestFor: 'People experiencing an existential vacuum, profound loss of purpose, or who are finding meaning in the context of unavoidable suffering or illness.',
    notIdealFor: 'Those seeking symptom-focused, skills-based, or purely behavioral approaches.',
    sessionStructure: 'mixed',
    timeOrientation: 'future',
    bodyBased: false,
    relationalFocus: false,
    theoreticalFamily: 'humanistic',
  },
]
