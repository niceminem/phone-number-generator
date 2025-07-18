#!/usr/bin/env python3
"""
Dynamic Page Generator for Phone Number Generator Website
Generates HTML pages from templates and JSON data files.
"""

import json
import os
import re
from string import Template
from typing import Dict, Any

class PageGenerator:
    def __init__(self, template_file: str, data_file: str):
        """
        Initialize the page generator
        
        Args:
            template_file: Path to the HTML template file
            data_file: Path to the JSON data file
        """
        self.template_file = template_file
        self.data_file = data_file
        self.template_content = self._load_template()
        self.data = self._load_data()
    
    def _load_template(self) -> str:
        """Load the HTML template file"""
        try:
            with open(self.template_file, 'r', encoding='utf-8') as f:
                return f.read()
        except FileNotFoundError:
            raise FileNotFoundError(f"Template file not found: {self.template_file}")
        except Exception as e:
            raise Exception(f"Error loading template: {e}")
    
    def _load_data(self) -> Dict[str, Any]:
        """Load the JSON data file"""
        try:
            with open(self.data_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            raise FileNotFoundError(f"Data file not found: {self.data_file}")
        except json.JSONDecodeError as e:
            raise Exception(f"Error parsing JSON data: {e}")
        except Exception as e:
            raise Exception(f"Error loading data: {e}")
    
    def _safe_substitute(self, template_str: str, data: Dict[str, Any]) -> str:
        """
        Safely substitute template variables, handling missing keys gracefully
        
        Args:
            template_str: Template string with {{variable}} placeholders
            data: Dictionary with variable values
            
        Returns:
            String with variables substituted
        """
        # Replace {{variable}} with Python template format ${variable}
        template_str = re.sub(r'\{\{(\w+)\}\}', r'${\1}', template_str)
        
        # Create Template object
        template = Template(template_str)
        
        # Perform safe substitution
        try:
            return template.safe_substitute(data)
        except Exception as e:
            print(f"Warning: Template substitution error: {e}")
            return template_str
    
    def generate_page(self, page_key: str, output_dir: str = '.') -> str:
        """
        Generate a single page from template and data
        
        Args:
            page_key: Key in the JSON data for this page
            output_dir: Directory to output the generated file
            
        Returns:
            Path to the generated file
        """
        if page_key not in self.data:
            raise KeyError(f"Page key '{page_key}' not found in data")
        
        page_data = self.data[page_key]
        
        # Generate the page content
        page_content = self._safe_substitute(self.template_content, page_data)
        
        # Get output filename
        filename = page_data.get('filename', f'{page_key}.html')
        output_path = os.path.join(output_dir, filename)
        
        # Write the generated page
        try:
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(page_content)
            print(f"✓ Generated: {output_path}")
            return output_path
        except Exception as e:
            raise Exception(f"Error writing file {output_path}: {e}")
    
    def generate_all_pages(self, output_dir: str = '.') -> list:
        """
        Generate all pages from the data file
        
        Args:
            output_dir: Directory to output the generated files
            
        Returns:
            List of generated file paths
        """
        # Create output directory if it doesn't exist
        os.makedirs(output_dir, exist_ok=True)
        
        generated_files = []
        
        for page_key in self.data:
            try:
                output_path = self.generate_page(page_key, output_dir)
                generated_files.append(output_path)
            except Exception as e:
                print(f"✗ Error generating page '{page_key}': {e}")
                continue
        
        return generated_files
    
    def list_pages(self) -> list:
        """List all available pages in the data file"""
        return list(self.data.keys())


def create_language_packs(i18n_file: str, output_dir: str = 'js/lang') -> list:
    """
    Extract language packs from the i18n.js file and create separate JSON files
    
    Args:
        i18n_file: Path to the i18n.js file
        output_dir: Directory to output language pack files
        
    Returns:
        List of generated language pack files
    """
    try:
        with open(i18n_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"✗ i18n file not found: {i18n_file}")
        return []
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Extract language data using regex
    language_pattern = r'(\w+):\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}'
    
    # Find all language sections
    languages = re.findall(language_pattern, content, re.DOTALL)
    
    generated_files = []
    
    for lang_code, lang_data in languages:
        try:
            # Convert JavaScript object to JSON-like format
            # This is a simplified approach - in production you'd want more robust parsing
            
            # Create a simple language pack structure
            lang_pack = {
                'language': lang_code,
                'translations': {}
            }
            
            # Extract key-value pairs
            key_value_pattern = r'(\w+):\s*["\']([^"\']*)["\']'
            translations = re.findall(key_value_pattern, lang_data)
            
            for key, value in translations:
                lang_pack['translations'][key] = value
            
            # Write language pack file
            output_file = os.path.join(output_dir, f'{lang_code}.json')
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(lang_pack, f, indent=2, ensure_ascii=False)
            
            generated_files.append(output_file)
            print(f"✓ Generated language pack: {output_file}")
            
        except Exception as e:
            print(f"✗ Error generating language pack for '{lang_code}': {e}")
            continue
    
    return generated_files


def main():
    """Main function to run the page generator"""
    print("🚀 Dynamic Page Generator for Phone Number Generator")
    print("=" * 50)
    
    # Configuration
    template_file = 'template.html'
    data_file = 'countries-data.json'
    i18n_file = 'js/i18n.js'
    output_dir = '.'
    lang_dir = 'js/lang'
    
    try:
        # Initialize page generator
        generator = PageGenerator(template_file, data_file)
        
        # List available pages
        print(f"📋 Available pages: {', '.join(generator.list_pages())}")
        
        # Generate all pages
        print("\n🔄 Generating pages...")
        generated_files = generator.generate_all_pages(output_dir)
        
        # Create language packs
        print("\n🌍 Creating language packs...")
        lang_files = create_language_packs(i18n_file, lang_dir)
        
        # Summary
        print("\n" + "=" * 50)
        print("✅ Generation complete!")
        print(f"📄 Generated {len(generated_files)} pages")
        print(f"🌍 Generated {len(lang_files)} language packs")
        
        if generated_files:
            print("\n📄 Generated pages:")
            for file in generated_files:
                print(f"  - {file}")
        
        if lang_files:
            print("\n🌍 Language packs:")
            for file in lang_files:
                print(f"  - {file}")
        
    except Exception as e:
        print(f"✗ Error: {e}")
        return 1
    
    return 0


if __name__ == '__main__':
    exit(main())