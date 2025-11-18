.PHONY: new-post new-talk pr help

# Help command
help:
	@echo "Available commands:"
	@echo "  make new-post          - Create a new blog post with frontmatter template and git branch"
	@echo "  make new-talk          - Create a new talk file with frontmatter template and git branch"
	@echo "  make pr                - Create a PR with conventional commit format and emojis"
	@echo "  make help              - Show this help message"

# Create a Pull Request with conventional commits
pr:
	@current_branch=$$(git branch --show-current); \
	on_main=false; \
	if [ "$$current_branch" = "main" ]; then \
		on_main=true; \
		echo "ℹ️  You are on the main branch."; \
		echo ""; \
	else \
		echo "🚀 Creating Pull Request from branch: $$current_branch"; \
		echo ""; \
	fi; \
	echo "Select commit type:"; \
	echo "  1) ✨ feat      - New feature"; \
	echo "  2) 🐛 fix       - Bug fix"; \
	echo "  3) 📝 docs      - Documentation changes"; \
	echo "  4) 💄 style     - Code style changes (formatting, etc)"; \
	echo "  5) ♻️  refactor - Code refactoring"; \
	echo "  6) ⚡ perf      - Performance improvements"; \
	echo "  7) ✅ test      - Adding or updating tests"; \
	echo "  8) 🔧 chore     - Maintenance tasks"; \
	echo "  9) 📦 build     - Build system changes"; \
	echo "  10) 🎨 design   - Design/UI changes"; \
	echo ""; \
	echo "Enter number (1-10): "; \
	read -r commit_type_num; \
	case $$commit_type_num in \
		1) commit_type="feat"; emoji="✨";; \
		2) commit_type="fix"; emoji="🐛";; \
		3) commit_type="docs"; emoji="📝";; \
		4) commit_type="style"; emoji="💄";; \
		5) commit_type="refactor"; emoji="♻️";; \
		6) commit_type="perf"; emoji="⚡";; \
		7) commit_type="test"; emoji="✅";; \
		8) commit_type="chore"; emoji="🔧";; \
		9) commit_type="build"; emoji="📦";; \
		10) commit_type="design"; emoji="🎨";; \
		*) echo "❌ Invalid selection"; exit 1;; \
	esac; \
	if [ "$$on_main" = "true" ]; then \
		echo ""; \
		echo "Enter branch name (will use $$commit_type/ as prefix): "; \
		read -r branch_suffix; \
		branch_suffix_lower=$$(echo "$$branch_suffix" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g'); \
		new_branch="$$commit_type/$$branch_suffix_lower"; \
		if git rev-parse --verify "$$new_branch" >/dev/null 2>&1; then \
			echo "⚠️  Branch $$new_branch already exists!"; \
			echo "Enter a custom branch name: "; \
			read -r custombranch; \
			new_branch="$$custombranch"; \
		fi; \
		git checkout -b "$$new_branch"; \
		echo "✅ Created and switched to branch: $$new_branch"; \
		current_branch="$$new_branch"; \
	fi; \
	if echo "$$current_branch" | grep -q "^post/"; then \
		prefix="post"; \
	elif echo "$$current_branch" | grep -q "^talk/"; then \
		prefix="talk"; \
	elif echo "$$current_branch" | grep -q "^feat/"; then \
		prefix="feat"; \
	elif echo "$$current_branch" | grep -q "^fix/"; then \
		prefix="fix"; \
	elif echo "$$current_branch" | grep -q "^docs/"; then \
		prefix="docs"; \
	elif echo "$$current_branch" | grep -q "^chore/"; then \
		prefix="chore"; \
	elif echo "$$current_branch" | grep -q "^refactor/"; then \
		prefix="refactor"; \
	elif echo "$$current_branch" | grep -q "^style/"; then \
		prefix="style"; \
	elif echo "$$current_branch" | grep -q "^perf/"; then \
		prefix="perf"; \
	elif echo "$$current_branch" | grep -q "^test/"; then \
		prefix="test"; \
	elif echo "$$current_branch" | grep -q "^build/"; then \
		prefix="build"; \
	elif echo "$$current_branch" | grep -q "^design/"; then \
		prefix="design"; \
	else \
		prefix=""; \
	fi; \
	echo ""; \
	echo "Enter commit scope (optional, press Enter to skip): "; \
	read -r scope; \
	echo "Enter PR title (will be converted to lowercase): "; \
	read -r pr_title; \
	pr_title_lower=$$(echo "$$pr_title" | tr '[:upper:]' '[:lower:]'); \
	echo "Enter description of changes (sentence case): "; \
	read -r description; \
	description_sentence=$$(echo "$$description" | awk '{print toupper(substr($$0,1,1)) tolower(substr($$0,2))}'); \
	if [ -n "$$scope" ]; then \
		commit_msg="$$emoji $$commit_type($$scope): $$pr_title_lower"; \
		pr_title_final="$$emoji $$commit_type($$scope): $$pr_title_lower"; \
	else \
		commit_msg="$$emoji $$commit_type: $$pr_title_lower"; \
		pr_title_final="$$emoji $$commit_type: $$pr_title_lower"; \
	fi; \
	if [ -n "$$prefix" ]; then \
		pr_title_final="[$$prefix] $$pr_title_final"; \
	fi; \
	echo ""; \
	echo "📋 Commit message: $$commit_msg"; \
	echo "📋 PR title: $$pr_title_final"; \
	echo "📋 Description: $$description_sentence"; \
	echo ""; \
	echo "Proceed? (y/n): "; \
	read -r confirm; \
	if [ "$$confirm" != "y" ]; then \
		echo "❌ Cancelled"; \
		exit 1; \
	fi; \
	git add .; \
	git commit -m "$$commit_msg" -m "$$description_sentence" -m "🤖 Generated with Claude Code" -m "Co-Authored-By: Claude <noreply@anthropic.com>"; \
	git push -u origin "$$current_branch"; \
	gh pr create --title "$$pr_title_final" --body "$$description_sentence"; \
	echo ""; \
	echo "✅ Pull Request created successfully!"

# Create a new blog post
new-post:
	@echo "Creating new blog post..."
	@echo "Enter post title: "; \
	read -r title; \
	echo "Enter post description: "; \
	read -r description; \
	echo "Enter language (en/pt-br) [default: pt-br]: "; \
	read -r lang; \
	lang=$${lang:-pt-br}; \
	echo "Enter category (AWS/Serverless/Web Development/etc): "; \
	read -r category; \
	echo "Enter tags (comma-separated): "; \
	read -r tags; \
	echo "Featured post? (true/false) [default: false]: "; \
	read -r featured; \
	featured=$${featured:-false}; \
	slug=$$(echo "$$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g'); \
	branchname="post/$$slug"; \
	filename="src/content/posts/$$slug.md"; \
	if git rev-parse --verify "$$branchname" >/dev/null 2>&1; then \
		echo "⚠️  Branch $$branchname already exists!"; \
		echo "Enter a custom branch name: "; \
		read -r custombranch; \
		branchname="$$custombranch"; \
	fi; \
	git checkout -b "$$branchname"; \
	echo "✅ Created and switched to branch: $$branchname"; \
	echo "---" > "$$filename"; \
	echo "title: \"$$title\"" >> "$$filename"; \
	echo "description: \"$$description\"" >> "$$filename"; \
	echo "pubDate: \"$$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")\"" >> "$$filename"; \
	echo "featured: $$featured" >> "$$filename"; \
	echo "draft: true" >> "$$filename"; \
	echo "language: \"$$lang\"" >> "$$filename"; \
	if [ -n "$$category" ]; then \
		echo "category: \"$$category\"" >> "$$filename"; \
	fi; \
	if [ -n "$$tags" ]; then \
		echo "tags: [\"$$(echo $$tags | sed 's/, */", "/g')\"]" >> "$$filename"; \
	fi; \
	echo "---" >> "$$filename"; \
	echo "" >> "$$filename"; \
	echo "<!-- Write your blog post content here -->" >> "$$filename"; \
	echo "" >> "$$filename"; \
	echo "✅ Post created at: $$filename"; \
	echo "✅ Git branch: $$branchname"; \
	echo ""; \
	cat "$$filename"

# Create a new talk
new-talk:
	@echo "Creating new talk..."
	@echo "Enter talk title: "; \
	read -r title; \
	echo "Enter event name (optional, press Enter to skip): "; \
	read -r event; \
	echo "Enter event date (format: YYYY-MM-DD HH:MM, e.g., 2024-11-20 14:00): "; \
	read -r eventdate; \
	echo "Enter language (en/pt-br) [default: pt-br]: "; \
	read -r lang; \
	lang=$${lang:-pt-br}; \
	echo "Enter video URL (optional, press Enter to skip): "; \
	read -r videourl; \
	echo "Enter slides URL (optional, press Enter to skip): "; \
	read -r slidesurl; \
	echo "Enter location (optional, press Enter to skip): "; \
	read -r location; \
	echo "Enter tags (comma-separated, optional): "; \
	read -r tags; \
	today=$$(date -u +"%Y-%m-%d"); \
	slug=$$(echo "$$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g'); \
	branchname="talk/$$today-$$slug"; \
	filename="src/content/talks/$$today.md"; \
	if [ -f "$$filename" ]; then \
		timestamp=$$(date +"%H%M%S"); \
		filename="src/content/talks/$$today-$$timestamp.md"; \
		branchname="talk/$$today-$$timestamp-$$slug"; \
	fi; \
	if git rev-parse --verify "$$branchname" >/dev/null 2>&1; then \
		echo "⚠️  Branch $$branchname already exists!"; \
		echo "Enter a custom branch name: "; \
		read -r custombranch; \
		branchname="$$custombranch"; \
	fi; \
	git checkout -b "$$branchname"; \
	echo "✅ Created and switched to branch: $$branchname"; \
	echo "---" > "$$filename"; \
	echo "title: \"$$title\"" >> "$$filename"; \
	echo "pubDate: \"$$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")\"" >> "$$filename"; \
	if [ -n "$$eventdate" ]; then \
		eventdate_formatted=$$(echo "$$eventdate" | sed 's/ / /g'); \
		echo "eventDate: \"$$eventdate_formatted\"" >> "$$filename"; \
	fi; \
	if [ -n "$$event" ]; then \
		echo "event: \"$$event\"" >> "$$filename"; \
	fi; \
	if [ -n "$$location" ]; then \
		echo "location: \"$$location\"" >> "$$filename"; \
	fi; \
	echo "language: \"$$lang\"" >> "$$filename"; \
	if [ -n "$$videourl" ]; then \
		echo "videoUrl: \"$$videourl\"" >> "$$filename"; \
	fi; \
	if [ -n "$$slidesurl" ]; then \
		echo "slidesUrl: \"$$slidesurl\"" >> "$$filename"; \
	fi; \
	if [ -n "$$tags" ]; then \
		echo "tags: [\"$$(echo $$tags | sed 's/, */", "/g')\"]" >> "$$filename"; \
	fi; \
	echo "featured: false" >> "$$filename"; \
	echo "---" >> "$$filename"; \
	echo "" >> "$$filename"; \
	echo "<!-- Write your talk content here -->" >> "$$filename"; \
	echo "" >> "$$filename"; \
	if [ -n "$$slidesurl" ]; then \
		echo "[**Slides**]($$slidesurl)" >> "$$filename"; \
		echo "" >> "$$filename"; \
	fi; \
	echo "✅ Talk created at: $$filename"; \
	echo "✅ Git branch: $$branchname"; \
	echo ""; \
	cat "$$filename"
