#!/usr/bin/env bash
echo "┏━━━ 🚀️ START: server, app, ui-components ━━━━━━━"
lerna run start --scope '{@bet/server,@bet/app,@bet/ui-components}' --stream
