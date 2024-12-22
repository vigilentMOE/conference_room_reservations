NODE_MODULES = node_modules
PREACT_DEV_DEPS = preact preact-cli
EXPRESS_DEV_DEPS = express nodemon
POSTGRES_DEV_DEPS = pg pg-hstore sequelize

.PHONY: install clean setup-db help

# Install all dependencies
default: install

install:
	npm install
	npm install $(PREACT_DEV_DEPS) --save-dev
	npm install $(EXPRESS_DEV_DEPS) --save
	npm install $(POSTGRES_DEV_DEPS) --save

# Clean up node_modules
clean:
	rm -rf $(NODE_MODULES)

# Setup PostgreSQL database
setup-db:
	brew install postgresql
	brew services start postgresql
	createdb dev_database

# Display help information
help:
	@echo "Makefile commands:"
	@echo "  install     - Install all dependencies (frontend, backend, database)"
	@echo "  clean       - Remove node_modules"
	@echo "  setup-db    - Install and set up PostgreSQL database on macOS"
	@echo "  help        - Display this help message"
