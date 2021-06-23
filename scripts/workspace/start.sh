#!/usr/bin/env bash
echo "┏━━━ 🚀️ START: @bet/server and @bet/app ━━━━━━━"
lerna run start --scope '{@bet/server,@bet/app}' --stream
