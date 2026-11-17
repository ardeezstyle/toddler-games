# ABC Adventure

A playful alphabet-learning game built with React and TypeScript for young children. The app helps children recognise letters, learn their sounds, discover words, and identify objects through simple interactive activities.

## Overview

ABC Adventure is designed to make early alphabet learning fun, visual, and interactive.

### Learning experience

- Learn uppercase and lowercase letters together (`A a`).
- Discover four words associated with each letter.
- See colourful illustrations for each word.
- Listen to letter names, letter sounds, and word pronunciations.
- Navigate between letters using Previous, Next, and All Letters.

### Activities

**Find the Objects**

Children are shown six objects and asked to identify the objects that begin with the selected letter.

Three difficulty levels are planned:

| Difficulty | Correct objects | Distractors |
|---|---:|---:|
| Easy | 2 | 4 |
| Medium | 3 | 3 |
| Hard | 4 | 2 |

The object positions are shuffled to keep the activity engaging.

### Design principles

- Child-friendly illustrations and colourful visuals.
- Large, easy-to-tap interactive elements.
- Positive feedback and encouragement.
- No timers or unnecessary pressure.
- Pronunciation can be replayed at any time.
- No advertisements or distracting elements.

## Tech stack

- **React** – UI components and application structure.
- **TypeScript** – Type safety.
- **Vite** – Development server and production builds.
- **React Router** – Client-side navigation.
- **CSS** – Styling and responsive layouts.
- **Web Speech API** – Browser-based text-to-speech.
- **Local Storage** – Local progress persistence.
- **Yarn Workspaces** – Monorepo package management.
- **WebP** – Optimised illustrations.

## Project structure

The application lives inside the `apps/abc-adventure` workspace.

```text
toddler-games/
├── apps/
│   ├── abc-adventure/
│   │   ├── public/
│   │   │   └── images/
│   │   │       └── letters/
│   │   │           ├── apple.webp
│   │   │           ├── ant.webp
│   │   │           ├── airplane.webp
│   │   │           └── alligator.webp
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── data/
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   └── package.json
│   └── calm-car-game/
├── package.json
└── README.md
```

The structure above is a high-level overview; individual source files may evolve as the application grows.

## Getting started

### Prerequisites

- Node.js (use the version supported by the repository).
- Yarn Classic (1.x).
- Git.

### Install dependencies

Run this from the repository root:

```bash
yarn install
```

### Start the development server

```bash
yarn workspace abc-adventure dev
```

Vite will display the local development URL in the terminal, usually:

```text
http://localhost:5173
```

### Build for production

```bash
yarn workspace abc-adventure build
```

The production build is generated in:

```text
apps/abc-adventure/dist/
```

### Run lint

```bash
yarn workspace abc-adventure lint
```

### Preview the production build

After building:

```bash
yarn workspace abc-adventure preview
```

## Image assets

The game uses locally bundled WebP illustrations. Images are stored in:

```text
apps/abc-adventure/public/images/letters/
```

Using local assets means illustrations are available without fetching them from an external server while the game is running.

### Image naming convention

Use lowercase filenames based on the word, with hyphens for multi-word names.

Examples:

```text
apple.webp
airplane.webp
ice-cream.webp
question-mark.webp
```

Keep the image paths in the application data consistent with these filenames.

### Original images

Keep original PNG files separately from the optimised WebP files.

Recommended location:

```text
apps/abc-adventure/assets-original/letters/
```

The `public/images/letters/` directory should contain the WebP files used by the application.

### Install the WebP tools

On macOS, install Google's WebP utilities using Homebrew:

```bash
brew install webp
```

This provides commands such as `cwebp` and `dwebp`.

Verify the installation:

```bash
cwebp -version
```

### Convert PNG to WebP

Run:

```bash
cwebp -q 85 ball.png -o ball.webp
```

Command breakdown:

| Part | Meaning |
|---|---|
| `cwebp` | WebP image encoder |
| `-q 85` | Quality setting (0–100) |
| `ball.png` | Original PNG image |
| `-o ball.webp` | Output WebP filename |

A quality setting of 85 is a good starting point for illustrations, balancing image quality and file size.

### Convert multiple PNG files

For example, if the original PNG files are in `~/Downloads/letters`:

```bash
SOURCE="$HOME/Downloads/letters"
DEST="apps/abc-adventure/public/images/letters"

mkdir -p "$DEST"

for file in "$SOURCE"/*.png; do
  [ -f "$file" ] || continue

  filename=$(basename "$file" .png)
  cwebp -q 85 "$file" -o "$DEST/$filename.webp"
done
```

Run this command from the repository root.

**Important:** The output filenames must match the paths referenced by the application. Check the filenames after conversion, especially if the original files contain uppercase letters or spaces.

### Inspect a WebP image

You can use the following command to convert a WebP image back to PNG for inspection:

```bash
dwebp ball.webp -o ball-preview.png
```

This is useful when checking image quality or troubleshooting an asset.

## Development workflow

A typical development cycle:

1. Make changes to the application.
2. Run the linter.
3. Build the application.
4. Test the application locally.
5. Commit and push the changes.

```bash
yarn workspace abc-adventure lint
yarn workspace abc-adventure build
yarn workspace abc-adventure dev
```

## Future enhancements

Potential improvements for future iterations:

- Complete illustrations for all 26 letters and 104 words.
- Illustrated distractor objects in the identification activity.
- Improved pronunciation using recorded audio clips.
- Learning progress and activity completion tracking.
- Additional interactive learning activities.
- More engaging animations and feedback.

---

**ABC Adventure** — Making the journey of learning letters fun!