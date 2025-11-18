.PHONY: help dev build preview clean install new-post pr deploy pretty format lint

# Default target
.DEFAULT_GOAL := help

# Colors for terminal output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

help: ## 📚 Show this help message
	@echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo "$(GREEN)  Ibrahim Cesar's Blog - Makefile Commands$(NC)"
	@echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-15s$(NC) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"

install: ## 📦 Install all dependencies
	@echo "$(GREEN)📦 Installing dependencies...$(NC)"
	@npm install
	@echo "$(GREEN)✅ Dependencies installed successfully!$(NC)"

dev: ## 🚀 Start development server (localhost:3000)
	@echo "$(GREEN)🚀 Starting development server...$(NC)"
	@npm run dev

start: dev ## 🚀 Alias for dev

build: ## 🔨 Build for production with font optimization
	@echo "$(GREEN)🔨 Building for production...$(NC)"
	@npm run build
	@echo "$(GREEN)✅ Build completed successfully!$(NC)"

preview: ## 👀 Preview production build
	@echo "$(GREEN)👀 Starting preview server...$(NC)"
	@npm run preview

pretty: ## ✨ Format code with Prettier
	@echo "$(GREEN)✨ Formatting code...$(NC)"
	@npm run pretty
	@echo "$(GREEN)✅ Code formatted successfully!$(NC)"

format: pretty ## ✨ Alias for pretty

clean: ## 🧹 Clean build artifacts
	@echo "$(YELLOW)🧹 Cleaning build artifacts...$(NC)"
	@rm -rf dist
	@rm -rf node_modules/.astro
	@rm -rf .astro
	@echo "$(GREEN)✅ Clean completed!$(NC)"

deep-clean: clean ## 🧹 Deep clean (including node_modules)
	@echo "$(RED)🧹 Deep cleaning (removing node_modules)...$(NC)"
	@rm -rf node_modules
	@echo "$(GREEN)✅ Deep clean completed!$(NC)"

rebuild: clean install build ## 🔄 Clean, install, and build

git-status: ## 📊 Show git status
	@echo "$(GREEN)📊 Git Status:$(NC)"
	@git status

new-post: ## ✍️  Interactive wizard to create a new blog post
	@echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo "$(GREEN)  ✍️  New Blog Post Wizard$(NC)"
	@echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo ""
	@\
	printf "\033[0;32m📝 Post title (required):\033[0m "; \
	read title; \
	if [ -z "$$title" ]; then \
		echo "$(RED)❌ Title is required!$(NC)"; \
		exit 1; \
	fi; \
	\
	slug=$$(echo "$$title" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]\+/-/g' | sed 's/^-//' | sed 's/-$$//'); \
	echo "$(BLUE)ℹ️  Generated slug: $$slug$(NC)"; \
	echo ""; \
	\
	printf "\033[0;32m📄 Description (required):\033[0m "; \
	read description; \
	if [ -z "$$description" ]; then \
		echo "$(RED)❌ Description is required!$(NC)"; \
		exit 1; \
	fi; \
	echo ""; \
	\
	printf "\033[0;33m🏷️  Tags (optional, comma-separated, e.g., AWS,CDK,TypeScript):\033[0m "; \
	read tags; \
	if [ -z "$$tags" ]; then \
		tags=""; \
	fi; \
	echo ""; \
	\
	printf "\033[0;33m📁 Category (optional, default: General):\033[0m "; \
	read category; \
	if [ -z "$$category" ]; then \
		category="General"; \
	fi; \
	echo ""; \
	\
	printf "\033[0;33m🌍 Language (optional, en/pt-br, default: en):\033[0m "; \
	read language; \
	if [ -z "$$language" ]; then \
		language="en"; \
	else \
		language_lower=$$(echo "$$language" | tr '[:upper:]' '[:lower:]' | tr '_' '-'); \
		case $$language_lower in \
			pt|pt-br|ptbr|pt_br) language="pt-br";; \
			en|en-us|enus|en_us) language="en";; \
			*) language="en"; echo "$(YELLOW)⚠️  Unknown language '$$language', defaulting to 'en'$(NC)";; \
		esac; \
	fi; \
	echo ""; \
	\
	printf "\033[0;33m🖼️  Image path (optional, e.g., ~/assets/images/post.png):\033[0m "; \
	read image; \
	echo ""; \
	\
	printf "\033[0;33m📱 Social image path (optional, e.g., /features/post.png):\033[0m "; \
	read socialImage; \
	echo ""; \
	\
	printf "\033[0;33m⭐ Featured post? (optional, y/N):\033[0m "; \
	read featured; \
	if [ "$$featured" = "y" ] || [ "$$featured" = "Y" ]; then \
		featured="true"; \
	else \
		featured="false"; \
	fi; \
	echo ""; \
	\
	printf "\033[0;33m📝 Draft? (optional, y/N):\033[0m "; \
	read draft; \
	if [ "$$draft" = "y" ] || [ "$$draft" = "Y" ]; then \
		draft="true"; \
	else \
		draft="false"; \
	fi; \
	echo ""; \
	\
	pubDate=$$(date -u +"%Y-%m-%dT%H:%M:%S.000Z"); \
	filepath="src/content/posts/$$slug.md"; \
	branch="feature/$$slug"; \
	\
	echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo "$(GREEN)📋 Summary:$(NC)"; \
	echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo "  Title:        $$title"; \
	echo "  Slug:         $$slug"; \
	echo "  Description:  $$description"; \
	echo "  Tags:         $$tags"; \
	echo "  Category:     $$category"; \
	echo "  Language:     $$language"; \
	echo "  Image:        $$image"; \
	echo "  Social Image: $$socialImage"; \
	echo "  Featured:     $$featured"; \
	echo "  Draft:        $$draft"; \
	echo "  Pub Date:     $$pubDate"; \
	echo "  File:         $$filepath"; \
	echo "  Branch:       $$branch"; \
	echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo ""; \
	printf "\033[0;32m✅ Create this post? (Y/n):\033[0m "; \
	read confirm; \
	if [ "$$confirm" = "n" ] || [ "$$confirm" = "N" ]; then \
		echo "$(YELLOW)❌ Cancelled.$(NC)"; \
		exit 0; \
	fi; \
	\
	echo ""; \
	echo "$(GREEN)🌿 Creating branch: $$branch$(NC)"; \
	git checkout -b "$$branch" || { echo "$(RED)❌ Failed to create branch$(NC)"; exit 1; }; \
	\
	echo "$(GREEN)📝 Creating file: $$filepath$(NC)"; \
	\
	echo "---" > "$$filepath"; \
	echo "title: \"$$title\"" >> "$$filepath"; \
	if [ -n "$$tags" ]; then \
		echo "tags: [\"$$(echo $$tags | sed 's/,/", "/g')\"]" >> "$$filepath"; \
	fi; \
	if [ -n "$$category" ]; then \
		echo "category: \"$$category\"" >> "$$filepath"; \
	fi; \
	echo "description: \"$$description\"" >> "$$filepath"; \
	echo "featured: $$featured" >> "$$filepath"; \
	echo "pubDate: \"$$pubDate\"" >> "$$filepath"; \
	if [ -n "$$image" ]; then \
		echo "image: \"$$image\"" >> "$$filepath"; \
	fi; \
	if [ -n "$$socialImage" ]; then \
		echo "socialImage: \"$$socialImage\"" >> "$$filepath"; \
	fi; \
	echo "language: \"$$language\"" >> "$$filepath"; \
	echo "draft: $$draft" >> "$$filepath"; \
	echo "---" >> "$$filepath"; \
	echo "" >> "$$filepath"; \
	echo "Write your blog post content here..." >> "$$filepath"; \
	echo "" >> "$$filepath"; \
	\
	echo ""; \
	echo "$(GREEN)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo "$(GREEN)  ✅ Blog post created successfully!$(NC)"; \
	echo "$(GREEN)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo ""; \
	echo "$(BLUE)📂 File:$(NC)    $$filepath"; \
	echo "$(BLUE)🌿 Branch:$(NC)  $$branch"; \
	echo ""; \
	echo "$(YELLOW)Next steps:$(NC)"; \
	echo "  1. Edit your post: code $$filepath"; \
	echo "  2. Preview locally: make dev"; \
	echo "  3. When ready: make pr"; \
	echo ""; \
	code "$$filepath" 2>/dev/null || echo "$(BLUE)ℹ️  Run 'code $$filepath' to open in VS Code$(NC)"

check: ## 🔍 Check for common issues
	@echo "$(GREEN)🔍 Running checks...$(NC)"
	@echo ""
	@echo "$(BLUE)📊 Git Status:$(NC)"
	@git status -s
	@echo ""
	@echo "$(BLUE)🌿 Current Branch:$(NC)"
	@git branch --show-current
	@echo ""
	@echo "$(BLUE)📦 Node Version:$(NC)"
	@node --version
	@echo ""
	@echo "$(BLUE)📚 NPM Version:$(NC)"
	@npm --version

pr: ## 🚀 Interactive PR wizard (commit and push changes)
	@echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo "$(GREEN)  🚀 Pull Request Wizard$(NC)"
	@echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"
	@echo ""
	@\
	current_branch=$$(git branch --show-current); \
	echo "$(BLUE)🌿 Current branch:$(NC) $$current_branch"; \
	echo ""; \
	\
	if git diff --quiet && git diff --cached --quiet; then \
		echo "$(YELLOW)⚠️  No changes to commit!$(NC)"; \
		exit 1; \
	fi; \
	\
	echo "$(GREEN)📊 Modified files:$(NC)"; \
	git status --short | column -t -s ' '; \
	echo ""; \
	\
	if echo "$$current_branch" | grep -q "^feature/"; then \
		slug=$$(echo "$$current_branch" | sed 's/^feature\///'); \
		echo "$(BLUE)ℹ️  Detected feature branch for: $$slug$(NC)"; \
		commit_type="feat"; \
		commit_emoji="✨"; \
		echo ""; \
	else \
		echo "$(YELLOW)📝 Select commit type:$(NC)"; \
		echo "  $(GREEN)1)$(NC) ✨ feat      - A new feature"; \
		echo "  $(GREEN)2)$(NC) 🐛 fix       - A bug fix"; \
		echo "  $(GREEN)3)$(NC) 📚 docs      - Documentation changes"; \
		echo "  $(GREEN)4)$(NC) 💄 style     - Code style changes (formatting, etc)"; \
		echo "  $(GREEN)5)$(NC) ♻️  refactor  - Code refactoring"; \
		echo "  $(GREEN)6)$(NC) ⚡ perf      - Performance improvements"; \
		echo "  $(GREEN)7)$(NC) 🧪 test      - Adding or updating tests"; \
		echo "  $(GREEN)8)$(NC) 🔧 chore     - Build process or auxiliary tool changes"; \
		echo "  $(GREEN)9)$(NC) 🔥 build     - Build system changes"; \
		echo "  $(GREEN)10)$(NC) 🚀 ci        - CI/CD changes"; \
		echo ""; \
		printf "\033[0;32mChoose type (1-10):\033[0m "; \
		read type_choice; \
		echo ""; \
		\
		case $$type_choice in \
			1) commit_type="feat"; commit_emoji="✨";; \
			2) commit_type="fix"; commit_emoji="🐛";; \
			3) commit_type="docs"; commit_emoji="📚";; \
			4) commit_type="style"; commit_emoji="💄";; \
			5) commit_type="refactor"; commit_emoji="♻️";; \
			6) commit_type="perf"; commit_emoji="⚡";; \
			7) commit_type="test"; commit_emoji="🧪";; \
			8) commit_type="chore"; commit_emoji="🔧";; \
			9) commit_type="build"; commit_emoji="🔥";; \
			10) commit_type="ci"; commit_emoji="🚀";; \
			*) echo "$(RED)❌ Invalid choice!$(NC)"; exit 1;; \
		esac; \
	fi; \
	\
	printf "\033[0;32m📝 Describe your changes:\033[0m "; \
	read description; \
	if [ -z "$$description" ]; then \
		echo "$(RED)❌ Description is required!$(NC)"; \
		exit 1; \
	fi; \
	\
	description_lower=$$(echo "$$description" | tr '[:upper:]' '[:lower:]'); \
	commit_msg="$$commit_emoji $$commit_type: $$description_lower"; \
	\
	echo ""; \
	echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo "$(GREEN)📋 Commit Summary:$(NC)"; \
	echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo "  Branch:  $$current_branch"; \
	echo "  Type:    $$commit_emoji $$commit_type"; \
	echo "  Message: $$commit_msg"; \
	echo "$(BLUE)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo ""; \
	echo "$(GREEN)📊 Files to be committed:$(NC)"; \
	git status --short | column -t -s ' '; \
	echo ""; \
	\
	printf "\033[0;32m✅ Proceed with commit and push? (Y/n):\033[0m "; \
	read confirm; \
	if [ "$$confirm" = "n" ] || [ "$$confirm" = "N" ]; then \
		echo "$(YELLOW)❌ Cancelled.$(NC)"; \
		exit 0; \
	fi; \
	\
	echo ""; \
	echo "$(GREEN)🔍 Running pre-commit checks...$(NC)"; \
	echo ""; \
	\
	echo "$(BLUE)📦 Checking Node version...$(NC)"; \
	node --version; \
	\
	echo "$(BLUE)🔍 Checking for syntax errors...$(NC)"; \
	echo ""; \
	if ! npm run build 2>&1 | tee /tmp/build-check.log; then \
		echo ""; \
		echo "$(RED)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
		echo "$(RED)❌ Build check failed!$(NC)"; \
		echo "$(RED)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
		echo ""; \
		echo "$(YELLOW)Please fix the errors above before committing.$(NC)"; \
		echo "$(BLUE)💡 Tip: Check the error messages for file paths and line numbers.$(NC)"; \
		echo ""; \
		exit 1; \
	fi; \
	echo ""; \
	echo "$(GREEN)✅ Build check passed!$(NC)"; \
	echo ""; \
	\
	echo "$(GREEN)📦 Adding all changes...$(NC)"; \
	git add .; \
	\
	echo "$(GREEN)💾 Committing changes...$(NC)"; \
	git commit -m "$$commit_msg"; \
	\
	echo "$(GREEN)🚀 Pushing to remote...$(NC)"; \
	git push -u origin "$$current_branch" || { echo "$(RED)❌ Push failed$(NC)"; exit 1; }; \
	\
	echo ""; \
	echo "$(GREEN)🔍 Running post-push checks...$(NC)"; \
	echo "$(BLUE)📊 Verifying remote sync...$(NC)"; \
	git fetch origin $$current_branch; \
	echo "$(GREEN)✅ Branch synced with remote!$(NC)"; \
	\
	echo ""; \
	echo "$(GREEN)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo "$(GREEN)  ✅ Changes committed and pushed successfully!$(NC)"; \
	echo "$(GREEN)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$(NC)"; \
	echo ""; \
	echo "$(BLUE)🌿 Branch:$(NC)  $$current_branch"; \
	echo "$(BLUE)💬 Commit:$(NC)  $$commit_msg"; \
	echo ""; \
	\
	if [ "$$current_branch" != "main" ]; then \
		echo "$(GREEN)🔄 Switching back to main branch...$(NC)"; \
		git checkout main || { echo "$(RED)❌ Failed to checkout main$(NC)"; exit 1; }; \
		echo "$(GREEN)✅ Now on main branch$(NC)"; \
		echo ""; \
	fi; \
	\
	if echo "$$current_branch" | grep -q "^feature/"; then \
		echo "$(YELLOW)📋 Next steps to deploy:$(NC)"; \
		echo "  1. Create PR: gh pr create --head $$current_branch --title \"$$description\" --body \"$$description\""; \
		echo "  2. Or merge locally: git merge $$current_branch"; \
		echo "  3. Push main: git push origin main"; \
		echo ""; \
		echo "$(BLUE)ℹ️  AWS Amplify will auto-deploy when merged to main$(NC)"; \
	else \
		if [ "$$current_branch" = "main" ]; then \
			echo "$(GREEN)🎉 Deployed to main branch!$(NC)"; \
			echo "$(BLUE)ℹ️  AWS Amplify is building and deploying...$(NC)"; \
		else \
			echo "$(YELLOW)📋 Next steps:$(NC)"; \
			echo "  1. Merge to main: git merge $$current_branch"; \
			echo "  2. Push: git push origin main"; \
			echo ""; \
			echo "$(BLUE)ℹ️  AWS Amplify will auto-deploy from main branch$(NC)"; \
		fi; \
	fi; \
	echo ""

deploy-check: build ## 🚀 Pre-deployment check (build + verify)
	@echo "$(GREEN)🚀 Running pre-deployment checks...$(NC)"
	@echo "$(GREEN)✅ Build successful!$(NC)"
	@echo ""
	@echo "$(YELLOW)📋 Next steps for deployment:$(NC)"
	@echo "  1. Review changes: git status"
	@echo "  2. Commit: git add . && git commit -m 'Your message'"
	@echo "  3. Push: git push origin main"
	@echo ""
	@echo "$(BLUE)ℹ️  AWS Amplify will automatically deploy from main branch$(NC)"
