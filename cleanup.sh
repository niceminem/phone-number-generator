#!/bin/bash

# Cleanup script for generated files
# This script removes files that can be regenerated from templates

echo "🧹 Cleaning up generated files..."
echo "================================="

# List of files that will be removed (these are generated from templates)
generated_files=(
    "index.html"
    "china-phone-number-generator.html"
    "us-phone-number-generator.html"
    "uk-phone-number-generator.html"
)

# Backup generated files (optional)
backup_dir="backup_$(date +%Y%m%d_%H%M%S)"
echo "📦 Creating backup in $backup_dir..."
mkdir -p "$backup_dir"

for file in "${generated_files[@]}"; do
    if [[ -f "$file" ]]; then
        cp "$file" "$backup_dir/"
        echo "✅ Backed up: $file"
    fi
done

# Remove generated files
echo ""
echo "🗑️  Removing generated files..."
for file in "${generated_files[@]}"; do
    if [[ -f "$file" ]]; then
        rm "$file"
        echo "✅ Removed: $file"
    else
        echo "⚠️  File not found: $file"
    fi
done

echo ""
echo "📋 Remaining source files:"
echo "  - template.html (HTML template)"
echo "  - countries-data.json (country data)"
echo "  - generate_pages.py (generation script)"
echo "  - deploy.sh (deployment script)"
echo "  - js/i18n.js (enhanced i18n with dynamic loading)"
echo "  - js/lang/*.json (language packs)"
echo "  - css/ (stylesheets)"
echo "  - js/ (JavaScript files)"
echo ""
echo "💡 To regenerate all pages, run:"
echo "   python3 generate_pages.py"
echo "   # or"
echo "   ./deploy.sh"
echo ""
echo "🎉 Cleanup complete!"