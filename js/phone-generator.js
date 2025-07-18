// Phone Number Generator Library

class PhoneNumberGenerator {
    constructor(country) {
        this.country = country;
        this.generatedNumbers = [];
        this.countryData = this.getCountryData();
        this.init();
    }

    // Country-specific phone number formats and rules
    getCountryData() {
        const data = {
            'us': {
                name: 'United States',
                flag: '🇺🇸',
                formats: [
                    '(XXX) XXX-XXXX',
                    'XXX-XXX-XXXX',
                    'XXX.XXX.XXXX'
                ],
                areaCodes: [
                    '201', '202', '203', '205', '206', '207', '208', '209', '210',
                    '212', '213', '214', '215', '216', '217', '218', '219', '224',
                    '225', '228', '229', '231', '234', '239', '240', '248', '251',
                    '252', '253', '254', '256', '260', '262', '267', '269', '270',
                    '276', '281', '301', '302', '303', '304', '305', '307', '308',
                    '309', '310', '312', '313', '314', '315', '316', '317', '318',
                    '319', '320', '321', '323', '325', '330', '331', '334', '336',
                    '337', '339', '347', '351', '352', '360', '361', '364', '380',
                    '385', '386', '401', '402', '404', '405', '406', '407', '408',
                    '409', '410', '412', '413', '414', '415', '417', '419', '423',
                    '424', '425', '430', '432', '434', '435', '440', '442', '443',
                    '458', '463', '464', '469', '470', '475', '478', '479', '480',
                    '484', '501', '502', '503', '504', '505', '507', '508', '509',
                    '510', '512', '513', '515', '516', '517', '518', '520', '530',
                    '540', '541', '551', '559', '561', '562', '563', '564', '567',
                    '570', '571', '573', '574', '575', '580', '585', '586', '601',
                    '602', '603', '605', '606', '607', '608', '609', '610', '612',
                    '614', '615', '616', '617', '618', '619', '620', '623', '626',
                    '630', '631', '636', '641', '646', '650', '651', '660', '661',
                    '662', '667', '678', '681', '682', '701', '702', '703', '704',
                    '706', '707', '708', '712', '713', '714', '715', '716', '717',
                    '718', '719', '720', '724', '727', '731', '732', '734', '737',
                    '740', '757', '760', '763', '765', '770', '772', '773', '774',
                    '775', '781', '785', '786', '801', '802', '803', '804', '805',
                    '806', '808', '810', '812', '813', '814', '815', '816', '817',
                    '818', '828', '830', '831', '832', '843', '845', '847', '850',
                    '856', '857', '858', '859', '860', '862', '863', '864', '865',
                    '870', '872', '878', '901', '903', '904', '906', '907', '908',
                    '909', '910', '912', '913', '914', '915', '916', '917', '918',
                    '919', '920', '925', '928', '929', '931', '936', '937', '940',
                    '941', '947', '949', '951', '952', '954', '956', '959', '970',
                    '971', '972', '973', '978', '979', '980', '984', '985', '989'
                ],
                generate: () => this.generateUSNumber()
            },
            'china': {
                name: 'China',
                flag: '🇨🇳',
                formats: [
                    'XXX-XXXX-XXXX',
                    'XXX XXXX XXXX',
                    'XXXXXXXXXXX'
                ],
                mobilePrefixes: ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
                               '147', '150', '151', '152', '153', '155', '156', '157', '158', '159',
                               '180', '181', '182', '183', '184', '185', '186', '187', '188', '189'],
                landlineCities: {
                    '010': 'Beijing',
                    '021': 'Shanghai', 
                    '022': 'Tianjin',
                    '023': 'Chongqing',
                    '025': 'Nanjing',
                    '027': 'Wuhan',
                    '028': 'Chengdu',
                    '029': 'Xi\'an'
                },
                generate: () => this.generateChinaNumber()
            },
            'uk': {
                name: 'United Kingdom',
                flag: '🇬🇧',
                formats: [
                    '+44 XXXX XXX XXX',
                    '0XXXX XXX XXX',
                    'XXXX-XXX-XXX'
                ],
                areaCodes: [
                    '020', '0121', '0131', '0141', '0151', '0161', '0191', '01132',
                    '01142', '01273', '01179', '01223', '01224', '01225', '01276',
                    '01322', '01372', '01484', '01509', '01572', '01604', '01733',
                    '01753', '01784', '01823', '01865', '01904', '01923', '01925'
                ],
                mobilePrefix: '07',
                generate: () => this.generateUKNumber()
            }
        };
        
        return data[this.country] || data['us'];
    }

    // Generate US phone number
    generateUSNumber() {
        const areaCode = this.getRandomItem(this.countryData.areaCodes);
        const exchange = this.generateRandomDigits(3, '2', '9'); // Exchange code can't start with 0 or 1
        const number = this.generateRandomDigits(4);
        
        const format = this.getRandomItem(this.countryData.formats);
        return this.formatNumber(areaCode + exchange + number, format);
    }

    // Generate China phone number
    generateChinaNumber() {
        const isMobile = Math.random() > 0.3; // 70% mobile, 30% landline
        
        if (isMobile) {
            const prefix = this.getRandomItem(this.countryData.mobilePrefixes);
            const number = this.generateRandomDigits(8);
            const fullNumber = prefix + number;
            
            const format = this.getRandomItem(this.countryData.formats);
            return this.formatNumber(fullNumber, format);
        } else {
            const areaCode = this.getRandomItem(Object.keys(this.countryData.landlineCities));
            const number = this.generateRandomDigits(8);
            return `${areaCode}-${number}`;
        }
    }

    // Generate UK phone number
    generateUKNumber() {
        const isMobile = Math.random() > 0.4; // 60% mobile, 40% landline
        
        if (isMobile) {
            const number = this.generateRandomDigits(9);
            return `${this.countryData.mobilePrefix}${number}`;
        } else {
            const areaCode = this.getRandomItem(this.countryData.areaCodes);
            const localLength = areaCode.length === 3 ? 8 : 7;
            const number = this.generateRandomDigits(localLength);
            return `${areaCode} ${number}`;
        }
    }

    // Helper functions
    generateRandomDigits(length, min = '0', max = '9') {
        let result = '';
        for (let i = 0; i < length; i++) {
            const minCode = min.charCodeAt(0);
            const maxCode = max.charCodeAt(0);
            const randomCode = Math.floor(Math.random() * (maxCode - minCode + 1)) + minCode;
            result += String.fromCharCode(randomCode);
        }
        return result;
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    formatNumber(number, format) {
        let formatted = format;
        for (let i = 0; i < number.length; i++) {
            formatted = formatted.replace('X', number[i]);
        }
        return formatted;
    }

    // Initialize the generator
    init() {
        this.setupEventListeners();
        this.updateCounter();
    }

    // Setup event listeners
    setupEventListeners() {
        const generateBtn = document.getElementById('generateBtn');
        const clearBtn = document.getElementById('clearBtn');
        
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generateAndAdd());
        }
        
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearAll());
        }
    }

    // Generate and add new number
    generateAndAdd() {
        const newNumber = this.countryData.generate();
        this.generatedNumbers.push({
            id: Date.now(),
            number: newNumber,
            timestamp: new Date()
        });
        
        this.renderNumbers();
        this.updateCounter();
        
        // Add animation effect
        const generateBtn = document.getElementById('generateBtn');
        generateBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            generateBtn.style.transform = 'scale(1)';
        }, 150);
    }

    // Render the numbers list
    renderNumbers() {
        const numbersList = document.getElementById('numbersList');
        const emptyState = document.getElementById('emptyState');
        
        if (this.generatedNumbers.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            if (numbersList) numbersList.innerHTML = '';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        
        if (numbersList) {
            numbersList.innerHTML = this.generatedNumbers
                .slice()
                .reverse() // Show newest first
                .map(item => this.createNumberItem(item))
                .join('');
            
            // Add event listeners for copy and delete buttons
            this.setupNumberItemListeners();
        }
    }

    // Create HTML for a number item
    createNumberItem(item) {
        const copyText = window.i18n ? window.i18n.t('copy') : 'Copy';
        const deleteText = window.i18n ? window.i18n.t('delete') : 'Delete';
        
        return `
            <div class="number-item" data-id="${item.id}">
                <span class="number-value">${item.number}</span>
                <div class="number-actions">
                    <button class="copy-btn" onclick="phoneGenerator.copyNumber('${item.number}')">${copyText}</button>
                    <button class="delete-btn" onclick="phoneGenerator.deleteNumber(${item.id})">${deleteText}</button>
                </div>
            </div>
        `;
    }

    // Setup event listeners for number items
    setupNumberItemListeners() {
        // Click to copy functionality
        document.querySelectorAll('.number-value').forEach(element => {
            element.addEventListener('click', () => {
                this.copyNumber(element.textContent);
            });
        });
    }

    // Copy number to clipboard
    copyNumber(number) {
        navigator.clipboard.writeText(number).then(() => {
            this.showCopyNotification();
            
            // Visual feedback for copy buttons
            document.querySelectorAll('.copy-btn').forEach(btn => {
                if (btn.onclick.toString().includes(number)) {
                    btn.textContent = window.i18n ? window.i18n.t('copied') : 'Copied!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.textContent = window.i18n ? window.i18n.t('copy') : 'Copy';
                        btn.classList.remove('copied');
                    }, 2000);
                }
            });
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            this.fallbackCopyTextToClipboard(number);
        });
    }

    // Fallback copy method
    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showCopyNotification();
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        
        document.body.removeChild(textArea);
    }

    // Show copy notification
    showCopyNotification() {
        let notification = document.getElementById('copyNotification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'copyNotification';
            notification.className = 'copy-notification';
            const notificationText = window.i18n ? window.i18n.t('phoneCopied') : 'Phone number copied to clipboard!';
            notification.textContent = notificationText;
            document.body.appendChild(notification);
        }
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Delete a specific number
    deleteNumber(id) {
        this.generatedNumbers = this.generatedNumbers.filter(item => item.id !== id);
        this.renderNumbers();
        this.updateCounter();
    }

    // Clear all numbers
    clearAll() {
        if (this.generatedNumbers.length === 0) return;
        
        const confirmText = window.i18n ? window.i18n.t('confirmClear') : 'Are you sure you want to clear all generated numbers?';
        if (confirm(confirmText)) {
            this.generatedNumbers = [];
            this.renderNumbers();
            this.updateCounter();
        }
    }

    // Update the counter display
    updateCounter() {
        const counter = document.getElementById('numbersCount');
        if (counter) {
            const count = this.generatedNumbers.length;
            const numbersText = window.i18n ? 
                (count === 1 ? window.i18n.t('numberGenerated') : window.i18n.t('numbersGenerated')) :
                (count === 1 ? 'number generated' : 'numbers generated');
            counter.innerHTML = `${count} <span data-i18n="${count === 1 ? 'numberGenerated' : 'numbersGenerated'}">${numbersText}</span>`;
        }
    }

    // Export numbers as text
    exportNumbers() {
        if (this.generatedNumbers.length === 0) {
            alert('No numbers to export!');
            return;
        }
        
        const text = this.generatedNumbers
            .map(item => `${item.number} (Generated: ${item.timestamp.toLocaleString()})`)
            .join('\n');
        
        const blob = new Blob([text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.countryData.name.toLowerCase().replace(' ', '_')}_phone_numbers.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
}

// Global variable for the generator instance
let phoneGenerator;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get country from page data or URL
    const countryElement = document.getElementById('countryCode');
    const country = countryElement ? countryElement.textContent : 'us';
    
    // Initialize the phone generator
    phoneGenerator = new PhoneNumberGenerator(country);
});