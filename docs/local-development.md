# Local Development and Tablet Testing

This document describes how to run applications locally and access them from other devices, such as Android tablets and iPads, over the local Wi-Fi network.

## Prerequisites

- Node.js
- Yarn Classic (1.x)
- Git
- A development machine and tablet connected to the same Wi-Fi network

## Install dependencies

Run this command from the repository root:

```bash
yarn install
```

Dependencies are managed centrally using Yarn Workspaces.

## Running applications locally

Start an application's development server from the repository root.

### ABC Adventure

```bash
yarn workspace abc-adventure dev
```

### Calm Car Game

```bash
yarn workspace calm-car-game dev
```

Each application's Vite development script should include:

```json
"dev": "vite --host 0.0.0.0"
```

The `--host 0.0.0.0` option allows Vite to accept connections from other devices on the local network.

## Accessing applications on a tablet

### 1. Start the development server

For example:

```bash
yarn workspace abc-adventure dev
```

Vite displays local and network URLs when the server starts.

Example:

```text
VITE v8.x.x ready

Local:   http://localhost:5173/
Network: http://192.168.1.39:5173/ en0
```

### 2. Use the network URL

- **Local URL:** Used to access the application on the development machine.
- **Network URL:** Used to access the application from another device on the same Wi-Fi network.

The network IP address is assigned by the router and may change. Always use the Network URL displayed by Vite.

### 3. Open the application on the tablet

Ensure both the development machine and tablet are connected to the same Wi-Fi network.

Open Chrome or Safari on the tablet and enter the Network URL displayed in the terminal.

For example:

```text
http://192.168.1.39:5173/
```

You can also navigate directly to an application route:

```text
http://192.168.1.39:5173/letter/A
```

Replace the example IP address with the actual Network URL.

### 4. Add the application to the home screen

For convenient access, add the application to the tablet's home screen.

**Android (Chrome):**

1. Open the application in Chrome.
2. Open the three-dot menu.
3. Select Install app or Add to Home screen, if available.

**iPad (Safari):**

1. Open the application in Safari.
2. Tap the Share icon.
3. Select Add to Home Screen.

Note: Accessing an application through a local HTTP address may create a home-screen shortcut rather than a fully installable Progressive Web App (PWA). Full PWA installation requires a web app manifest, service worker, and a secure origin such as HTTPS.

## Development workflow

A typical development cycle:

1. Start the development server.
2. Open the application on the development machine.
3. Open the Network URL on the tablet.
4. Make changes to the source code.
5. Verify the changes using Vite's hot module replacement.

Changes to the application are reflected automatically while the development server is running.

## Troubleshooting

### Application works on localhost but not on the tablet

Ensure the Vite development script includes:

```json
"dev": "vite --host 0.0.0.0"
```

Restart the development server after changing the script.

### Network URL does not open

Check the following:

- Both devices are connected to the same Wi-Fi network.
- You are using the Network URL displayed by Vite.
- The development server is still running.
- The computer's firewall allows incoming connections.
- The Wi-Fi network does not isolate connected devices from each other.

### Network IP address has changed

Restart or inspect the Vite development server and use the latest Network URL.

### Stop the development server

Press `Ctrl + C` in the terminal.

## Important notes

- The development machine must remain switched on while using the local development version.
- The development server must remain running.
- Local development access is intended for testing, not public hosting.

For publishing applications that can be accessed independently of the development machine, see [GitHub and Netlify Deployment](netlify-deployment.md).