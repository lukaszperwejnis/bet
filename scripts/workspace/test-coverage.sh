#!/usr/bin/env bash
echo "┏━━━ 🎯 TEST-COVERAGE: $(pwd) ━━━━━━━━━━━━━━━━━━━"
yarn lerna run test-coverage --stream
