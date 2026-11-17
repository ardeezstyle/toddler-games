
export interface ActivityObject {
    word: string
    image?: string
    emoji: string
    isCorrect: boolean
  }
  
  
function createActivity(
    correct: [string, string][],
    distractors: [string, string][],
  ): ActivityObject[] {
    return [
      ...correct.map(([word, emoji]) => ({
        word,
        emoji,
        image: `/images/letters/${word.toLowerCase().replaceAll(' ', '-').replaceAll('?', '').replaceAll('.', '')}.webp`,
        isCorrect: true,
      })),
      ...distractors.map(([word, emoji]) => ({
        word,
        emoji,
        isCorrect: false,
      })),
    ]
  }
  
  
  export const activities: Record<string, ActivityObject[]> = {
    A: createActivity(
        [
          ['Apple', '🍎'],
          ['Ant', '🐜'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️'],
        ],
      ),
    B: createActivity(
        [
          ['Ball', '⚽'],
          ['Banana', '🍌'],
        ],
        [
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️'],
          ['Fish', '🐟'],
        ],
    ),
    C: createActivity(
        [
          ['Cat', '🐱'],
          ['Car', '🚗'],
        ],
        [
          ['Ball', '⚽'],
          ['Dog', '🐶'],
          ['Sun', '☀️'],
          ['Fish', '🐟'],
        ],
    ),
    D: createActivity(
        [
          ['Dog', '🐶'],
          ['Duck', '🦆'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Sun', '☀️'],
          ['Fish', '🐟'],
        ],
    ),
    E: createActivity(
        [
          ['Elephant', '🐘'],
          ['Egg', '🥚'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️'],
        ],
    ),
    F: createActivity(
        [
          ['Fish', '🐟'],
          ['Frog', '🐸'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️'],
        ],
    ),
    G: createActivity(
        [
          ['Giraffe', '🦒'],
          ['Grapes', '🍇'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    H: createActivity(
        [
          ['Hat', '🎩'],
          ['House', '🏠'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    I: createActivity(
        [
          ['Igloo', '🧊'],
          ['Insect', '🐞'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    J: createActivity(
        [
          ['Juice', '🧃'],
          ['Jellyfish', '🪼'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    K: createActivity(
        [
          ['Kite', '🪁'],
          ['Kangaroo', '🦘'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    L: createActivity(
        [
          ['Lion', '🦁'],
          ['Lemon', '🍋'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    M: createActivity(
        [
          ['Monkey', '🐒'],
          ['Mango', '🥭'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    N: createActivity(
        [
          ['Nest', '🪺'],
          ['Nose', '👃'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    O: createActivity(
        [
          ['Owl', '🦉'],
          ['Orange', '🍊'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    P: createActivity(
        [
          ['Penguin', '🐧'],
          ['Pizza', '🍕'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    Q: createActivity(
        [
          ['Queen', '👸'],
          ['Quail', '🐦'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
    R: createActivity(
        [
          ['Rabbit', '🐰'],
          ['Robot', '🤖'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
    S: createActivity(
        [
          ['Sun', '☀️'],
          ['Star', '⭐'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ],
    ),
    T: createActivity(
        [
          ['Tiger', '🐯'],
          ['Train', '🚂'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
    U: createActivity(
        [
          ['Umbrella', '☂️'],
          ['Unicorn', '🦄'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
    V: createActivity(
        [
          ['Van', '🚐'],
          ['Violin', '🎻'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
    W: createActivity(
        [
          ['Whale', '🐳'],
          ['Watch', '⌚'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
    X: createActivity(
        [
          ['X-ray', '🩻'],
          ['Xylophone', '🎼'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
    Y: createActivity(
        [
          ['Yo-yo', '🪀'],
          ['Yak', '🐂'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
    Z: createActivity(
        [
          ['Zebra', '🦓'],
          ['Zipper', '🤐'],
        ],
        [
          ['Ball', '⚽'],
          ['Cat', '🐱'],
          ['Dog', '🐶'],
          ['Sun', '☀️']
        ]
    ),
  }
  