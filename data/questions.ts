import type { ModalitySlug } from './modalities'

export interface Answer {
  id: string
  text: string
  weights: Partial<Record<ModalitySlug, number>>
}

export interface Question {
  id: string
  text: string
  subtext?: string
  answers: Answer[]
}

export const questions: Question[] = [
  {
    id: 'primary-goal',
    text: 'What do you most want from therapy right now?',
    answers: [
      {
        id: 'understand-myself',
        text: 'Understand myself more deeply',
        weights: { psychodynamic: 3, ifs: 3, narrative: 2, gestalt: 2, existential: 2 },
      },
      {
        id: 'feel-better',
        text: 'Feel less anxious or depressed',
        weights: { cbt: 3, dbt: 2, act: 2, cft: 2, ipt: 2 },
      },
      {
        id: 'change-behavior',
        text: 'Break patterns and change how I act',
        weights: { cbt: 2, dbt: 3, act: 2, mi: 2, sfbt: 2 },
      },
      {
        id: 'find-meaning',
        text: 'Find more meaning or direction in my life',
        weights: { logotherapy: 3, existential: 3, act: 2, narrative: 2, 'person-centered': 1 },
      },
    ],
  },
  {
    id: 'distress-source',
    text: 'Where does most of your distress seem to come from?',
    subtext: 'Pick the one that feels most true, even if others apply too.',
    answers: [
      {
        id: 'thoughts',
        text: 'My own thoughts — rumination, worry, self-criticism',
        weights: { cbt: 3, act: 2, cft: 3, dbt: 1, ifs: 1 },
      },
      {
        id: 'relationships',
        text: 'My relationships — conflict, loss, disconnection',
        weights: { eft: 3, ipt: 3, psychodynamic: 2, 'person-centered': 1 },
      },
      {
        id: 'body',
        text: 'My body — tension, gut feelings, physical reactions I can\'t control',
        weights: { somatic: 3, gestalt: 2, dbt: 1 },
      },
      {
        id: 'meaning',
        text: 'A sense of emptiness or pointlessness I can\'t shake',
        weights: { logotherapy: 3, existential: 3, act: 2, narrative: 1 },
      },
    ],
  },
  {
    id: 'time-orientation',
    text: 'Where does your attention tend to get pulled?',
    subtext: 'There\'s no right answer — just notice what\'s true for you.',
    answers: [
      {
        id: 'past',
        text: 'The past — what happened, why it happened, how it shaped me',
        weights: { psychodynamic: 3, ifs: 2, narrative: 1 },
      },
      {
        id: 'present',
        text: 'The present — what\'s happening now, how I\'m reacting',
        weights: { gestalt: 3, somatic: 2, 'person-centered': 2, cft: 1 },
      },
      {
        id: 'future',
        text: 'The future — worrying about what\'s coming, or longing for something better',
        weights: { act: 3, sfbt: 3, logotherapy: 2, mi: 1 },
      },
      {
        id: 'all-of-them',
        text: 'All of them — I cycle between all three constantly',
        weights: { ifs: 2, existential: 2, ipt: 1, act: 1 },
      },
    ],
  },
  {
    id: 'structure',
    text: 'What kind of session would feel most useful?',
    answers: [
      {
        id: 'structured',
        text: 'Structured — clear agenda, skills to practice, homework',
        weights: { cbt: 3, dbt: 3, ipt: 2, sfbt: 1 },
      },
      {
        id: 'guided',
        text: 'Guided — the therapist leads me through specific exercises',
        weights: { somatic: 2, ifs: 2, cft: 2, logotherapy: 1 },
      },
      {
        id: 'collaborative',
        text: 'Collaborative — we explore together without a fixed agenda',
        weights: { act: 2, eft: 2, narrative: 2, mi: 2 },
      },
      {
        id: 'open',
        text: 'Open — I talk, the therapist reflects, we see where it goes',
        weights: { psychodynamic: 3, 'person-centered': 3, existential: 2, gestalt: 2 },
      },
    ],
  },
  {
    id: 'change-readiness',
    text: 'How do you feel about changing?',
    subtext: 'Be honest — there\'s no wrong answer here.',
    answers: [
      {
        id: 'ready',
        text: 'Ready — I know what needs to change and I want help doing it',
        weights: { cbt: 2, dbt: 2, sfbt: 3, act: 1 },
      },
      {
        id: 'ambivalent',
        text: 'Torn — part of me wants to change, part of me resists',
        weights: { mi: 3, act: 2, ifs: 2, psychodynamic: 1 },
      },
      {
        id: 'not-change',
        text: 'I don\'t want to change myself — I want to understand myself',
        weights: { psychodynamic: 3, narrative: 2, 'person-centered': 3, existential: 2 },
      },
      {
        id: 'survive',
        text: 'I\'m just trying to cope — change feels too far away right now',
        weights: { dbt: 3, cft: 2, somatic: 2, ipt: 1 },
      },
    ],
  },
  {
    id: 'self-relationship',
    text: 'How would you describe your relationship with yourself?',
    answers: [
      {
        id: 'critic',
        text: 'I\'m my own harshest critic — the voice inside is relentless',
        weights: { cft: 3, ifs: 3, act: 2, cbt: 1 },
      },
      {
        id: 'fragmented',
        text: 'I feel like different parts of me are pulling in different directions',
        weights: { ifs: 3, gestalt: 2, narrative: 2, psychodynamic: 1 },
      },
      {
        id: 'disconnected',
        text: 'I feel numb or cut off from myself — like I\'m just going through motions',
        weights: { somatic: 3, 'person-centered': 2, gestalt: 2, eft: 1 },
      },
      {
        id: 'lost',
        text: 'I feel lost — unsure who I am or what I actually want',
        weights: { existential: 3, logotherapy: 3, narrative: 2, 'person-centered': 2 },
      },
    ],
  },
  {
    id: 'healing-belief',
    text: 'What\'s your instinct about how healing happens?',
    answers: [
      {
        id: 'insight',
        text: 'Through understanding — if I know why, I can change',
        weights: { psychodynamic: 3, narrative: 2, ifs: 1, existential: 2 },
      },
      {
        id: 'skills',
        text: 'Through practice — learning and applying concrete tools',
        weights: { cbt: 3, dbt: 3, ipt: 2, sfbt: 1 },
      },
      {
        id: 'experience',
        text: 'Through experience — doing and feeling, not just talking',
        weights: { somatic: 3, gestalt: 3, eft: 2, ifs: 1 },
      },
      {
        id: 'meaning',
        text: 'Through purpose — finding what matters so I can build toward it',
        weights: { logotherapy: 3, act: 3, sfbt: 2, existential: 1 },
      },
    ],
  },
]
