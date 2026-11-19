
export interface LetterWord {
    word: string
    image: string
  }
  
  export interface LetterData {
    uppercase: string
    lowercase: string
    phonetic: string
    words: LetterWord[]
  }
  
  export const letters: LetterData[] = [
    {
      uppercase: 'A',
      lowercase: 'a',
      phonetic: '/æ/',
      words: [
        { word: 'Apple', image: '/images/letters/apple.webp' },
        { word: 'Ant', image: '/images/letters/ant.webp' },
        { word: 'Airplane', image: '/images/letters/airplane.webp' },
        { word: 'Alligator', image: '/images/letters/alligator.webp' },
      ],
    },
    {
      uppercase: 'B',
      lowercase: 'b',
      phonetic: '/b/',
      words: [
        { word: 'Ball', image: '/images/letters/ball.webp' },
        { word: 'Banana', image: '/images/letters/banana.webp' },
        { word: 'Butterfly', image: '/images/letters/butterfly.webp' },
        { word: 'Bus', image: '/images/letters/bus.webp' },
      ],
    },
    {
      uppercase: 'C',
      lowercase: 'c',
      phonetic: '/k/',
      words: [
        { word: 'Cat', image: '/images/letters/cat.webp' },
        { word: 'Car', image: '/images/letters/car.webp' },
        { word: 'Cake', image: '/images/letters/cake.webp' },
        { word: 'Cow', image: '/images/letters/cow.webp' },
      ],
    },
    {
      uppercase: 'D',
      lowercase: 'd',
      phonetic: '/d/',
      words: [
        { word: 'Dog', image: '/images/letters/dog.webp' },
        { word: 'Duck', image: '/images/letters/duck.webp' },
        { word: 'Drum', image: '/images/letters/drum.webp' },
        { word: 'Dinosaur', image: '/images/letters/dinosaur.webp' },
      ],
    },
    {
      uppercase: 'E',
      lowercase: 'e',
      phonetic: '/ɛ/',
      words: [
        { word: 'Elephant', image: '/images/letters/elephant.webp' },
        { word: 'Egg', image: '/images/letters/egg.webp' },
        { word: 'Eagle', image: '/images/letters/eagle.webp' },
        { word: 'Envelope', image: '/images/letters/envelope.webp' },
      ],
    },
    {
      uppercase: 'F',
      lowercase: 'f',
      phonetic: '/f/',
      words: [
        { word: 'Fish', image: '/images/letters/fish.webp' },
        { word: 'Frog', image: '/images/letters/frog.webp' },
        { word: 'Flower', image: '/images/letters/flower.webp' },
        { word: 'Firetruck', image: '/images/letters/firetruck.webp' },
      ],
    },
    {
      uppercase: 'G',
      lowercase: 'g',
      phonetic: '/g/',
      words: [
        { word: 'Giraffe', image: '/images/letters/giraffe.webp' },
        { word: 'Grapes', image: '/images/letters/grapes.webp' },
        { word: 'Goat', image: '/images/letters/goat.webp' },
        { word: 'Guitar', image: '/images/letters/guitar.webp' },
      ],
    },
    {
      uppercase: 'H',
      lowercase: 'h',
      phonetic: '/h/',
      words: [
        { word: 'Hat', image: '/images/letters/hat.webp' },
        { word: 'House', image: '/images/letters/house.webp' },
        { word: 'Horse', image: '/images/letters/horse.webp' },
        { word: 'Helicopter', image: '/images/letters/helicopter.webp' },
      ],
    },
    {
      uppercase: 'I',
      lowercase: 'i',
      phonetic: '/ɪ/',
      words: [
        { word: 'Igloo', image: '/images/letters/igloo.webp' },
        { word: 'Ice cream', image: '/images/letters/ice-cream.webp' },
        { word: 'Insect', image: '/images/letters/insect.webp' },
        { word: 'Ink', image: '/images/letters/ink.webp' },
      ],
    },
    {
      uppercase: 'J',
      lowercase: 'j',
      phonetic: '/dʒ/',
      words: [
        { word: 'Jug', image: '/images/letters/jug.webp' },
        { word: 'Juice', image: '/images/letters/juice.webp' },
        { word: 'Jellyfish', image: '/images/letters/jellyfish.webp' },
        { word: 'Jacket', image: '/images/letters/jacket.webp' },
      ],
    },
    {
      uppercase: 'K',
      lowercase: 'k',
      phonetic: '/k/',
      words: [
        { word: 'Kite', image: '/images/letters/kite.webp' },
        { word: 'King', image: '/images/letters/king.webp' },
        { word: 'Kangaroo', image: '/images/letters/kangaroo.webp' },
        { word: 'Key', image: '/images/letters/key.webp' },
      ],
    },
    {
      uppercase: 'L',
      lowercase: 'l',
      phonetic: '/l/',
      words: [
        { word: 'Lion', image: '/images/letters/lion.webp' },
        { word: 'Lemon', image: '/images/letters/lemon.webp' },
        { word: 'Lamp', image: '/images/letters/lamp.webp' },
        { word: 'Ladder', image: '/images/letters/ladder.webp' },
      ],
    },
    {
      uppercase: 'M',
      lowercase: 'm',
      phonetic: '/m/',
      words: [
        { word: 'Monkey', image: '/images/letters/monkey.webp' },
        { word: 'Mango', image: '/images/letters/mango.webp' },
        { word: 'Moon', image: '/images/letters/moon.webp' },
        { word: 'Mouse', image: '/images/letters/mouse.webp' },
      ],
    },
    {
      uppercase: 'N',
      lowercase: 'n',
      phonetic: '/n/',
      words: [
        { word: 'Nest', image: '/images/letters/nest.webp' },
        { word: 'Nose', image: '/images/letters/nose.webp' },
        { word: 'Nurse', image: '/images/letters/nurse.webp' },
        { word: 'Notebook', image: '/images/letters/notebook.webp' },
      ],
    },
    {
      uppercase: 'O',
      lowercase: 'o',
      phonetic: '/ɒ/',
      words: [
        { word: 'Owl', image: '/images/letters/owl.webp' },
        { word: 'Orange', image: '/images/letters/orange.webp' },
        { word: 'Octopus', image: '/images/letters/octopus.webp' },
        { word: 'Onion', image: '/images/letters/onion.webp' },
      ],
    },
    {
      uppercase: 'P',
      lowercase: 'p',
      phonetic: '/p/',
      words: [
        { word: 'Penguin', image: '/images/letters/penguin.webp' },
        { word: 'Pizza', image: '/images/letters/pizza.webp' },
        { word: 'Parrot', image: '/images/letters/parrot.webp' },
        { word: 'Pencil', image: '/images/letters/pencil.webp' },
      ],
    },
    {
      uppercase: 'Q',
      lowercase: 'q',
      phonetic: '/kw/',
      words: [
        { word: 'Queen', image: '/images/letters/queen.webp' },
        { word: 'Quail', image: '/images/letters/quail.webp' },
        { word: 'Quilt', image: '/images/letters/quilt.webp' },
        { word: 'Question mark', image: '/images/letters/question-mark.webp' },
      ],
    },
    {
      uppercase: 'R',
      lowercase: 'r',
      phonetic: '/r/',
      words: [
        { word: 'Rabbit', image: '/images/letters/rabbit.webp' },
        { word: 'Rainbow', image: '/images/letters/rainbow.webp' },
        { word: 'Robot', image: '/images/letters/robot.webp' },
        { word: 'Rocket', image: '/images/letters/rocket.webp' },
      ],
    },
    {
      uppercase: 'S',
      lowercase: 's',
      phonetic: '/s/',
      words: [
        { word: 'Sun', image: '/images/letters/sun.webp' },
        { word: 'Star', image: '/images/letters/star.webp' },
        { word: 'Snake', image: '/images/letters/snake.webp' },
        { word: 'Strawberry', image: '/images/letters/strawberry.webp' },
      ],
    },
    {
      uppercase: 'T',
      lowercase: 't',
      phonetic: '/t/',
      words: [
        { word: 'Tiger', image: '/images/letters/tiger.webp' },
        { word: 'Train', image: '/images/letters/train.webp' },
        { word: 'Turtle', image: '/images/letters/turtle.webp' },
        { word: 'Tomato', image: '/images/letters/tomato.webp' },
      ],
    },
    {
      uppercase: 'U',
      lowercase: 'u',
      phonetic: '/ʌ/',
      words: [
        { word: 'Umbrella', image: '/images/letters/umbrella.webp' },
        { word: 'Unicorn', image: '/images/letters/unicorn.webp' },
        { word: 'Uniform', image: '/images/letters/uniform.webp' },
        { word: 'Up arrow', image: '/images/letters/up-arrow.webp' },
      ],
    },
    {
      uppercase: 'V',
      lowercase: 'v',
      phonetic: '/v/',
      words: [
        { word: 'Van', image: '/images/letters/van.webp' },
        { word: 'Violin', image: '/images/letters/violin.webp' },
        { word: 'Volcano', image: '/images/letters/volcano.webp' },
        { word: 'Vase', image: '/images/letters/vase.webp' },
      ],
    },
    {
      uppercase: 'W',
      lowercase: 'w',
      phonetic: '/w/',
      words: [
        { word: 'Whale', image: '/images/letters/whale.webp' },
        { word: 'Watermelon', image: '/images/letters/watermelon.webp' },
        { word: 'Watch', image: '/images/letters/watch.webp' },
        { word: 'Window', image: '/images/letters/window.webp' },
      ],
    },
    {
      uppercase: 'X',
      lowercase: 'x',
      phonetic: '/ks/',
      words: [
        { word: 'X-ray', image: '/images/letters/x-ray.webp' },
        { word: 'Xylophone', image: '/images/letters/xylophone.webp' },
        { word: 'Xmas tree', image: '/images/letters/xmas-tree.webp' },
        { word: 'Xerox machine', image: '/images/letters/xerox-machine.webp' },
      ],
    },
    {
      uppercase: 'Y',
      lowercase: 'y',
      phonetic: '/j/',
      words: [
        { word: 'Yo-yo', image: '/images/letters/yo-yo.webp' },
        { word: 'Yak', image: '/images/letters/yak.webp' },
        { word: 'Yacht', image: '/images/letters/yacht.webp' },
        { word: 'Yoga', image: '/images/letters/yoga.webp' },
      ],
    },
    {
      uppercase: 'Z',
      lowercase: 'z',
      phonetic: '/z/',
      words: [
        { word: 'Zebra', image: '/images/letters/zebra.webp' },
        { word: 'Zipper', image: '/images/letters/zipper.webp' },
        { word: 'Zero', image: '/images/letters/zero.webp' },
        { word: 'Zigzag', image: '/images/letters/zigzag.webp' },
      ],
    },
  ]
  
