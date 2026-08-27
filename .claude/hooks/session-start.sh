#!/bin/bash
# SessionStart hook: install the notebooklm-py CLI so the `notebooklm`
# command and the notebooklm skill work in every Claude Code on the web
# session for this repo. Idempotent and non-interactive.
set -euo pipefail

# Only run in the remote (Claude Code on the web) environment. Locally the
# user installs the CLI once themselves; re-installing on every session start
# would be wasteful.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Already installed (container state is cached between sessions)? Nothing to do.
if command -v notebooklm >/dev/null 2>&1; then
  echo "notebooklm already installed: $(notebooklm --version 2>/dev/null || true)"
  exit 0
fi

echo "Installing notebooklm-py[browser]..."

# Prefer a plain pip install; fall back to --break-system-packages for
# externally-managed environments (PEP 668).
pip_install() {
  pip install "$@" 2>/dev/null \
    || pip install --break-system-packages "$@" \
    || python3 -m pip install --break-system-packages "$@"
}

pip_install "notebooklm-py[browser]"

# [cookies] (rookiepy) is optional and fails to build on Python 3.13+.
# Install it only on older Pythons; never let its absence fail the hook.
if python3 -c "import sys; sys.exit(0 if sys.version_info < (3, 13) else 1)"; then
  pip_install "notebooklm-py[cookies]" || echo "notebooklm-py[cookies] skipped (optional)"
fi

echo "notebooklm ready: $(notebooklm --version 2>/dev/null || echo 'installed')"
