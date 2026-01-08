# Microverse - E-commerce Micro Frontend

A 2-3 day learning project: Build an e-commerce UI using Webpack Module Federation.

**What we're building:**
- Host app (container/shell)
- Products remote (product listings from Fake Store API)
- Cart remote (shopping cart)
- Shared UI components

**No custom backend needed** - Using public APIs only!

## Project Structure

```
Microverse/
├── package.json       # Root workspace config (Yarn Workspaces)
├── host/              # Container application (@microverse/host)
├── remotes/
│   ├── products/      # Products remote (@microverse/products)
│   └── cart/          # Cart remote (@microverse/cart)
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
