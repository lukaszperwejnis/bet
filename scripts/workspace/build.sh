#!/usr/bin/env bash
echo "┏━━━ 📦 Building Workspace: $(pwd) ━━━━━━━━━━━━━━━━━━━"
#yarn tsc -b packages
yarn lerna run build
