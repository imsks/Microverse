# Monorepo Setup Guide

## Why Monorepo for Micro Frontends?

**Benefits:**
- **Shared code** without publishing to npm (shared UI components, utilities)
- **Atomic commits** across host + remotes (easier debugging)
- **Single dependency management** (one `node_modules` at root)
- **Consistent tooling** (ESLint, Prettier, TypeScript configs)

**Tradeoffs:**
- Larger repo size (but modern Git handles this well)
- All teams see all code (transparency vs privacy)
- Single CI/CD pipeline (can be slow, but can be optimized)

## Step-by-Step Setup

### Step 1: Choose Workspace Manager

**Yarn Workspaces** (Recommended for learning):
- ✅ Simple, built into Yarn
- ✅ Fast installs with hoisting
- ✅ Easy to understand
- ❌ Less features than Nx

**Nx** (For enterprise):
- ✅ Advanced caching, task orchestration
- ✅ Dependency graph visualization
- ❌ Steeper learning curve
- ❌ Overkill for small projects

**pnpm Workspaces**:
- ✅ Fastest, most disk-efficient
- ✅ Strict dependency isolation
- ❌ Different from npm/yarn (learning curve)

**Decision:** Start with Yarn Workspaces → migrate to Nx if you need advanced features.

### Step 2: Root package.json Structure

Create root `package.json` with:
- `workspaces` array pointing to all apps/packages
- Shared dev dependencies (webpack, react, typescript, etc.)
- Root-level scripts for running all apps

**Why at root?**
- Hoisting: shared dependencies installed once
- Single source of truth for versions
- Easier to run commands across all workspaces

### Step 3: Workspace package.json Files

Each workspace (host, remotes, shared) needs its own `package.json` with:
- Unique `name` (e.g., `@microverse/host`, `@microverse/marketing`)
- `private: true` (not published to npm)
- Workspace-specific dependencies
- Scripts for dev/build

**Naming Convention:**
- Use scoped names: `@microverse/{workspace-name}`
- Makes imports clear: `import Button from '@microverse/shared-ui'`

### Step 4: Folder Structure Best Practices

```
Microverse/
├── package.json          # Root workspace config
├── host/
│   ├── package.json      # @microverse/host
│   ├── src/
│   └── webpack.config.js
├── remotes/
│   ├── marketing/
│   │   ├── package.json  # @microverse/marketing
│   │   └── src/
│   └── auth/
│       ├── package.json  # @microverse/auth
│       └── src/
├── shared/
│   └── ui/
│       ├── package.json  # @microverse/shared-ui
│       └── src/
└── docs/
```

**Why this structure?**
- Clear separation: host, remotes, shared
- Easy to find code
- Scales when adding more remotes
- Matches how teams would own code in real companies

### Step 5: Install Dependencies

Run `yarn install` at root:
- Yarn hoists common dependencies to root `node_modules`
- Workspace-specific deps stay in their folders
- Creates symlinks between workspaces

**How it works:**
- `host` imports `@microverse/shared-ui` → Yarn resolves via symlink
- No need to publish to npm or use file: paths
- Fast, native workspace resolution

### Step 6: Shared UI Library Setup

The `shared/ui` package:
- Exports React components (Button, Card, etc.)
- Can be consumed by host and all remotes
- Should NOT have React as dependency (peerDependency)
- Uses TypeScript for type safety across workspaces

**Why peerDependency?**
- Prevents multiple React instances (breaks hooks, context)
- Host provides React, remotes consume it
- Critical for Module Federation

## Interview Questions & Answers

**Q: Why not separate repos?**
- Harder to share code (need npm packages)
- Version management nightmare
- Can't do atomic changes across apps

**Q: Yarn vs Nx vs pnpm?**
- Yarn: Simple, good for learning
- Nx: Enterprise features (caching, affected commands)
- pnpm: Fastest, strict isolation

**Q: How do you handle version conflicts?**
- Use `resolutions` in root package.json to force versions
- Shared deps (React, React-DOM) must match exactly
- Module Federation requires same React version

**Q: What about CI/CD?**
- Can build/test each workspace independently
- Use `yarn workspaces run build` for all
- Or use Nx affected commands for smart builds

## Next Steps

After monorepo is set up:
1. Install dependencies: `yarn install`
2. Verify workspaces: `yarn workspaces list`
3. Test imports: Try importing shared-ui in host
4. Move to Topic 2: Webpack Module Federation config
