.PHONY: help install dev build lint format typecheck
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
install: ## Install
	pnpm install
dev: ## Dev
	pnpm dev
build: ## Build
	pnpm build
lint: ## Lint
	pnpm lint
format: ## Format
	pnpm format
typecheck: ## TypeScript
	pnpm typecheck
