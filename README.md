# Microverse - Micro Frontend Playground

A learning playground for building micro-frontend architectures with Webpack Module Federation.

## Getting Started

This project will be built step-by-step. Follow the instructions in `TOPICS.md` for each phase.

## Project Structure

```
Microverse/
├── package.json       # Root workspace config (Yarn Workspaces)
├── host/              # Container application (@microverse/host)
├── remotes/
│   ├── marketing/     # Marketing remote (@microverse/marketing)
│   └── auth/          # Auth remote (@microverse/auth)
├── shared/
│   └── ui/            # Shared UI library (@microverse/shared-ui)
└── docs/              # Documentation and learning notes
```

## Setup Status

✅ **Monorepo Structure** - Yarn Workspaces configured
- Root package.json with workspaces array
- Individual package.json files for each workspace
- Shared UI library with peerDependencies

📚 **Documentation:**
- `docs/01-monorepo-setup.md` - Complete monorepo setup guide

## Next Steps

1. Install dependencies: `yarn install`
2. Verify workspaces: `yarn workspaces list`
3. Move to Topic 1: Webpack Module Federation setup
