#!/usr/bin/env bash
echo "┏━━━ 🚀️ START: server, app ━━━━━━━"
lerna run start --scope '{@bet/server,@bet/app}' --stream
