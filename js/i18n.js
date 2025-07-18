// Internationalization (i18n) Library for Phone Number Generator

class I18n {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.translations = this.getTranslations();
        this.languagePacksLoaded = false;
        this.init();
    }

    // Detect browser language or use stored preference
    detectLanguage() {
        const stored = localStorage.getItem('phoneGenerator_language');
        if (stored && this.isLanguageSupported(stored)) {
            return stored;
        }
        
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        return this.isLanguageSupported(langCode) ? langCode : 'en';
    }

    isLanguageSupported(lang) {
        return ['en', 'zh', 'es', 'hi', 'ar'].includes(lang);
    }

    // Get all translations
    getTranslations() {
        return {
            en: {
                // Common
                home: "Home",
                backToHome: "← Back to All Generators",
                privacyPolicy: "Privacy Policy",
                termsOfService: "Terms of Service",
                allRightsReserved: "All rights reserved.",
                
                // Home page
                phoneNumberGenerator: "Phone Number Generator",
                homeSubtitle: "Generate valid phone numbers for any country. Perfect for testing, development, and privacy protection.",
                
                // Country cards
                usPhoneGenerator: "US Phone Number Generator",
                usDescription: "Generate valid US phone numbers with proper area codes and formatting. Includes all 50 states and follows North American Numbering Plan (NANP) standards.",
                
                chinaPhoneGenerator: "China Phone Number Generator", 
                chinaDescription: "Create authentic Chinese mobile and landline phone numbers. Supports all major carriers including China Mobile, China Unicom, and China Telecom.",
                
                ukPhoneGenerator: "UK Phone Number Generator",
                ukDescription: "Generate UK phone numbers including London, Manchester, Birmingham and other major cities. Supports both mobile and landline formats.",
                
                canadaPhoneGenerator: "Canada Phone Number Generator",
                canadaDescription: "Create Canadian phone numbers for all provinces and territories. Follows NANP standards with proper area code allocation.",
                
                australiaPhoneGenerator: "Australia Phone Number Generator",
                australiaDescription: "Generate Australian phone numbers including mobile, landline, and toll-free numbers. Covers all states and territories.",
                
                germanyPhoneGenerator: "Germany Phone Number Generator",
                germanyDescription: "Create German phone numbers with proper city codes and mobile prefixes. Supports all German states and major cities.",
                
                francePhoneGenerator: "France Phone Number Generator",
                franceDescription: "Generate French phone numbers including Paris, Lyon, Marseille and other regions. Supports both mobile and landline formats.",
                
                japanPhoneGenerator: "Japan Phone Number Generator",
                japanDescription: "Create Japanese phone numbers with proper area codes for Tokyo, Osaka, and other prefectures. Includes mobile and landline options.",
                
                southKoreaPhoneGenerator: "South Korea Phone Number Generator",
                southKoreaDescription: "Generate South Korean phone numbers for Seoul, Busan, and other major cities. Supports both mobile and landline formats.",
                
                indiaPhoneGenerator: "India Phone Number Generator",
                indiaDescription: "Create Indian phone numbers with proper state codes and mobile prefixes. Covers all states and union territories.",
                
                brazilPhoneGenerator: "Brazil Phone Number Generator",
                brazilDescription: "Generate Brazilian phone numbers including São Paulo, Rio de Janeiro, and other states. Supports mobile and landline formats.",
                
                russiaPhoneGenerator: "Russia Phone Number Generator",
                russiaDescription: "Create Russian phone numbers for Moscow, St. Petersburg, and other federal subjects. Includes mobile and landline options.",
                
                // Generator pages
                generatePhoneNumbers: "Generate Phone Numbers",
                generateButton: "Generate Phone Number",
                generatedPhoneNumbers: "Generated Phone Numbers",
                numbersGenerated: "numbers generated",
                numberGenerated: "number generated",
                noNumbersYet: "No phone numbers generated yet. Click the button above to start.",
                clearAllNumbers: "Clear All Numbers",
                confirmClear: "Are you sure you want to clear all generated numbers?",
                
                // Generator options
                numberFormat: "Number Format",
                numberType: "Number Type",
                mobileAndLandline: "Mobile & Landline",
                mobileOnly: "Mobile Only",
                landlineOnly: "Landline Only",
                randomFormat: "Random Format",
                stateRegion: "State/Region",
                allStates: "All States",
                allRegions: "All Regions",
                carrier: "Carrier",
                allCarriers: "All Carriers",
                
                // Actions
                copy: "Copy",
                copied: "Copied!",
                delete: "Delete",
                phoneCopied: "Phone number copied to clipboard!",
                
                // About sections
                aboutUSNumbers: "About US Phone Numbers",
                aboutChinaNumbers: "About Chinese Phone Numbers",
                aboutUKNumbers: "About UK Phone Numbers",
                usageNote: "Usage Note",
                usageDescription: "These generated numbers are for testing and development purposes only. They should not be used for actual communication attempts.",
                
                // Language selector
                selectLanguage: "Select Language",
                english: "English",
                chinese: "中文",
                spanish: "Español", 
                hindi: "हिन्दी",
                arabic: "العربية"
            },
            
            zh: {
                // Common
                home: "首页",
                backToHome: "← 返回所有生成器",
                privacyPolicy: "隐私政策",
                termsOfService: "服务条款",
                allRightsReserved: "保留所有权利。",
                
                // Home page
                phoneNumberGenerator: "电话号码生成器",
                homeSubtitle: "为任何国家生成有效的电话号码。非常适合测试、开发和隐私保护。",
                
                // Country cards
                usPhoneGenerator: "美国电话号码生成器",
                usDescription: "生成具有正确区号和格式的有效美国电话号码。包括所有50个州并遵循北美编号计划(NANP)标准。",
                
                chinaPhoneGenerator: "中国电话号码生成器",
                chinaDescription: "创建真实的中国移动和固定电话号码。支持所有主要运营商，包括中国移动、中国联通和中国电信。",
                
                ukPhoneGenerator: "英国电话号码生成器", 
                ukDescription: "生成英国电话号码，包括伦敦、曼彻斯特、伯明翰和其他主要城市。支持移动和固定电话格式。",
                
                canadaPhoneGenerator: "加拿大电话号码生成器",
                canadaDescription: "为所有省份和地区创建加拿大电话号码。遵循NANP标准，具有正确的区号分配。",
                
                australiaPhoneGenerator: "澳大利亚电话号码生成器",
                australiaDescription: "生成澳大利亚电话号码，包括移动、固定和免费电话号码。覆盖所有州和地区。",
                
                germanyPhoneGenerator: "德国电话号码生成器",
                germanyDescription: "创建具有正确城市代码和移动前缀的德国电话号码。支持所有德国州和主要城市。",
                
                francePhoneGenerator: "法国电话号码生成器",
                franceDescription: "生成法国电话号码，包括巴黎、里昂、马赛和其他地区。支持移动和固定电话格式。",
                
                japanPhoneGenerator: "日本电话号码生成器",
                japanDescription: "为东京、大阪和其他县创建具有正确区号的日本电话号码。包括移动和固定电话选项。",
                
                southKoreaPhoneGenerator: "韩国电话号码生成器",
                southKoreaDescription: "为首尔、釜山和其他主要城市生成韩国电话号码。支持移动和固定电话格式。",
                
                indiaPhoneGenerator: "印度电话号码生成器",
                indiaDescription: "创建具有正确州代码和移动前缀的印度电话号码。覆盖所有州和联邦领土。",
                
                brazilPhoneGenerator: "巴西电话号码生成器",
                brazilDescription: "生成巴西电话号码，包括圣保罗、里约热内卢和其他州。支持移动和固定电话格式。",
                
                russiaPhoneGenerator: "俄罗斯电话号码生成器",
                russiaDescription: "为莫斯科、圣彼得堡和其他联邦主体创建俄罗斯电话号码。包括移动和固定电话选项。",
                
                // Generator pages
                generatePhoneNumbers: "生成电话号码",
                generateButton: "生成电话号码",
                generatedPhoneNumbers: "已生成的电话号码",
                numbersGenerated: "个号码已生成",
                numberGenerated: "个号码已生成",
                noNumbersYet: "尚未生成任何电话号码。点击上面的按钮开始。",
                clearAllNumbers: "清空所有号码",
                confirmClear: "您确定要清除所有生成的号码吗？",
                
                // Generator options
                numberFormat: "号码格式",
                numberType: "号码类型",
                mobileAndLandline: "手机和固话",
                mobileOnly: "仅手机",
                landlineOnly: "仅固话",
                randomFormat: "随机格式",
                stateRegion: "州/地区",
                allStates: "所有州",
                allRegions: "所有地区",
                carrier: "运营商",
                allCarriers: "所有运营商",
                
                // Actions
                copy: "复制",
                copied: "已复制！",
                delete: "删除",
                phoneCopied: "电话号码已复制到剪贴板！",
                
                // About sections
                aboutUSNumbers: "关于美国电话号码",
                aboutChinaNumbers: "关于中国电话号码",
                aboutUKNumbers: "关于英国电话号码",
                usageNote: "使用说明",
                usageDescription: "这些生成的号码仅用于测试和开发目的。不应用于实际通信尝试。",
                
                // Language selector
                selectLanguage: "选择语言",
                english: "English",
                chinese: "中文",
                spanish: "Español",
                hindi: "हिन्दी",
                arabic: "العربية"
            },
            
            es: {
                // Common
                home: "Inicio",
                backToHome: "← Volver a Todos los Generadores",
                privacyPolicy: "Política de Privacidad",
                termsOfService: "Términos de Servicio",
                allRightsReserved: "Todos los derechos reservados.",
                
                // Home page
                phoneNumberGenerator: "Generador de Números de Teléfono",
                homeSubtitle: "Genera números de teléfono válidos para cualquier país. Perfecto para pruebas, desarrollo y protección de privacidad.",
                
                // Country cards
                usPhoneGenerator: "Generador de Números de Teléfono de EE.UU.",
                usDescription: "Genera números de teléfono válidos de EE.UU. con códigos de área y formato apropiados. Incluye los 50 estados y sigue los estándares del Plan de Numeración de América del Norte (NANP).",
                
                chinaPhoneGenerator: "Generador de Números de Teléfono de China",
                chinaDescription: "Crea números de teléfono móviles y fijos chinos auténticos. Soporta todas las operadoras principales incluyendo China Mobile, China Unicom y China Telecom.",
                
                ukPhoneGenerator: "Generador de Números de Teléfono del Reino Unido",
                ukDescription: "Genera números de teléfono del Reino Unido incluyendo Londres, Manchester, Birmingham y otras ciudades principales. Soporta formatos móviles y de línea fija.",
                
                canadaPhoneGenerator: "Generador de Números de Teléfono de Canadá",
                canadaDescription: "Crea números de teléfono canadienses para todas las provincias y territorios. Sigue los estándares NANP con asignación apropiada de códigos de área.",
                
                australiaPhoneGenerator: "Generador de Números de Teléfono de Australia",
                australiaDescription: "Genera números de teléfono australianos incluyendo móviles, líneas fijas y números gratuitos. Cubre todos los estados y territorios.",
                
                germanyPhoneGenerator: "Generador de Números de Teléfono de Alemania",
                germanyDescription: "Crea números de teléfono alemanes con códigos de ciudad y prefijos móviles apropiados. Soporta todos los estados alemanes y ciudades principales.",
                
                francePhoneGenerator: "Generador de Números de Teléfono de Francia",
                franceDescription: "Genera números de teléfono franceses incluyendo París, Lyon, Marsella y otras regiones. Soporta formatos móviles y de línea fija.",
                
                japanPhoneGenerator: "Generador de Números de Teléfono de Japón",
                japanDescription: "Crea números de teléfono japoneses con códigos de área apropiados para Tokio, Osaka y otras prefecturas. Incluye opciones móviles y de línea fija.",
                
                southKoreaPhoneGenerator: "Generador de Números de Teléfono de Corea del Sur",
                southKoreaDescription: "Genera números de teléfono de Corea del Sur para Seúl, Busan y otras ciudades principales. Soporta formatos móviles y de línea fija.",
                
                indiaPhoneGenerator: "Generador de Números de Teléfono de India",
                indiaDescription: "Crea números de teléfono indios con códigos de estado y prefijos móviles apropiados. Cubre todos los estados y territorios de la unión.",
                
                brazilPhoneGenerator: "Generador de Números de Teléfono de Brasil",
                brazilDescription: "Genera números de teléfono brasileños incluyendo São Paulo, Río de Janeiro y otros estados. Soporta formatos móviles y de línea fija.",
                
                russiaPhoneGenerator: "Generador de Números de Teléfono de Rusia",
                russiaDescription: "Crea números de teléfono rusos para Moscú, San Petersburgo y otros sujetos federales. Incluye opciones móviles y de línea fija.",
                
                // Generator pages
                generatePhoneNumbers: "Generar Números de Teléfono",
                generateButton: "Generar Número de Teléfono",
                generatedPhoneNumbers: "Números de Teléfono Generados",
                numbersGenerated: "números generados",
                numberGenerated: "número generado",
                noNumbersYet: "Aún no se han generado números de teléfono. Haz clic en el botón de arriba para comenzar.",
                clearAllNumbers: "Limpiar Todos los Números",
                confirmClear: "¿Estás seguro de que quieres limpiar todos los números generados?",
                
                // Generator options
                numberFormat: "Formato de Número",
                numberType: "Tipo de Número",
                mobileAndLandline: "Móvil y Fijo",
                mobileOnly: "Solo Móvil",
                landlineOnly: "Solo Fijo",
                randomFormat: "Formato Aleatorio",
                stateRegion: "Estado/Región",
                allStates: "Todos los Estados",
                allRegions: "Todas las Regiones",
                carrier: "Operadora",
                allCarriers: "Todas las Operadoras",
                
                // Actions
                copy: "Copiar",
                copied: "¡Copiado!",
                delete: "Eliminar",
                phoneCopied: "¡Número de teléfono copiado al portapapeles!",
                
                // About sections
                aboutUSNumbers: "Sobre los Números de Teléfono de EE.UU.",
                aboutChinaNumbers: "Sobre los Números de Teléfono Chinos",
                aboutUKNumbers: "Sobre los Números de Teléfono del Reino Unido",
                usageNote: "Nota de Uso",
                usageDescription: "Estos números generados son solo para propósitos de prueba y desarrollo. No deben usarse para intentos de comunicación real.",
                
                // Language selector
                selectLanguage: "Seleccionar Idioma",
                english: "English",
                chinese: "中文",
                spanish: "Español",
                hindi: "हिन्दी",
                arabic: "العربية"
            },
            
            hi: {
                // Common
                home: "होम",
                backToHome: "← सभी जेनरेटर पर वापस जाएं",
                privacyPolicy: "गोपनीयता नीति",
                termsOfService: "सेवा की शर्तें",
                allRightsReserved: "सभी अधिकार सुरक्षित।",
                
                // Home page
                phoneNumberGenerator: "फोन नंबर जेनरेटर",
                homeSubtitle: "किसी भी देश के लिए वैध फोन नंबर जेनरेट करें। टेस्टिंग, डेवलपमेंट और प्राइवेसी प्रोटेक्शन के लिए परफेक्ट।",
                
                // Country cards
                usPhoneGenerator: "अमेरिकी फोन नंबर जेनरेटर",
                usDescription: "सही एरिया कोड और फॉर्मेटिंग के साथ वैध अमेरिकी फोन नंबर जेनरेट करें। सभी 50 राज्यों को शामिल करता है और नॉर्थ अमेरिकन नंबरिंग प्लान (NANP) मानकों का पालन करता है।",
                
                chinaPhoneGenerator: "चीनी फोन नंबर जेनरेटर",
                chinaDescription: "प्रामाणिक चीनी मोबाइल और लैंडलाइन फोन नंबर बनाएं। चाइना मोबाइल, चाइना यूनिकॉम और चाइना टेलीकॉम सहित सभी प्रमुख कैरियर का समर्थन करता है।",
                
                ukPhoneGenerator: "यूके फोन नंबर जेनरेटर",
                ukDescription: "लंदन, मैनचेस्टर, बर्मिंघम और अन्य प्रमुख शहरों सहित यूके फोन नंबर जेनरेट करें। मोबाइल और लैंडलाइन दोनों फॉर्मेट का समर्थन करता है।",
                
                canadaPhoneGenerator: "कनाडाई फोन नंबर जेनरेटर",
                canadaDescription: "सभी प्रांतों और क्षेत्रों के लिए कनाडाई फोन नंबर बनाएं। सही एरिया कोड आवंटन के साथ NANP मानकों का पालन करता है।",
                
                australiaPhoneGenerator: "ऑस्ट्रेलियाई फोन नंबर जेनरेटर",
                australiaDescription: "मोबाइल, लैंडलाइन और टोल-फ्री नंबर सहित ऑस्ट्रेलियाई फोन नंबर जेनरेट करें। सभी राज्यों और क्षेत्रों को कवर करता है।",
                
                germanyPhoneGenerator: "जर्मन फोन नंबर जेनरेटर",
                germanyDescription: "सही सिटी कोड और मोबाइल प्रीफिक्स के साथ जर्मन फोन नंबर बनाएं। सभी जर्मन राज्यों और प्रमुख शहरों का समर्थन करता है।",
                
                francePhoneGenerator: "फ्रांसीसी फोन नंबर जेनरेटर",
                franceDescription: "पेरिस, ल्यों, मार्सिले और अन्य क्षेत्रों सहित फ्रांसीसी फोन नंबर जेनरेट करें। मोबाइल और लैंडलाइन दोनों फॉर्मेट का समर्थन करता है।",
                
                japanPhoneGenerator: "जापानी फोन नंबर जेनरेटर",
                japanDescription: "टोक्यो, ओसाका और अन्य प्रीफेक्चर के लिए सही एरिया कोड के साथ जापानी फोन नंबर बनाएं। मोबाइल और लैंडलाइन विकल्प शामिल हैं।",
                
                southKoreaPhoneGenerator: "दक्षिण कोरियाई फोन नंबर जेनरेटर",
                southKoreaDescription: "सियोल, बुसान और अन्य प्रमुख शहरों के लिए दक्षिण कोरियाई फोन नंबर जेनरेट करें। मोबाइल और लैंडलाइन दोनों फॉर्मेट का समर्थन करता है।",
                
                indiaPhoneGenerator: "भारतीय फोन नंबर जेनरेटर",
                indiaDescription: "सही राज्य कोड और मोबाइल प्रीफिक्स के साथ भारतीय फोन नंबर बनाएं। सभी राज्यों और केंद्र शासित प्रदेशों को कवर करता है।",
                
                brazilPhoneGenerator: "ब्राजीलियाई फोन नंबर जेनरेटर",
                brazilDescription: "साओ पाउलो, रियो डी जनेरियो और अन्य राज्यों सहित ब्राजीलियाई फोन नंबर जेनरेट करें। मोबाइल और लैंडलाइन फॉर्मेट का समर्थन करता है।",
                
                russiaPhoneGenerator: "रूसी फोन नंबर जेनरेटर",
                russiaDescription: "मॉस्को, सेंट पीटर्सबर्ग और अन्य संघीय विषयों के लिए रूसी फोन नंबर बनाएं। मोबाइल और लैंडलाइन विकल्प शामिल हैं।",
                
                // Generator pages
                generatePhoneNumbers: "फोन नंबर जेनरेट करें",
                generateButton: "फोन नंबर जेनरेट करें",
                generatedPhoneNumbers: "जेनरेट किए गए फोन नंबर",
                numbersGenerated: "नंबर जेनरेट किए गए",
                numberGenerated: "नंबर जेनरेट किया गया",
                noNumbersYet: "अभी तक कोई फोन नंबर जेनरेट नहीं किया गया। शुरू करने के लिए ऊपर का बटन क्लिक करें।",
                clearAllNumbers: "सभी नंबर साफ़ करें",
                confirmClear: "क्या आप वाकई सभी जेनरेट किए गए नंबर साफ़ करना चाहते हैं?",
                
                // Generator options
                numberFormat: "नंबर फॉर्मेट",
                numberType: "नंबर प्रकार",
                mobileAndLandline: "मोबाइल और लैंडलाइन",
                mobileOnly: "केवल मोबाइल",
                landlineOnly: "केवल लैंडलाइन",
                randomFormat: "रैंडम फॉर्मेट",
                stateRegion: "राज्य/क्षेत्र",
                allStates: "सभी राज्य",
                allRegions: "सभी क्षेत्र",
                carrier: "कैरियर",
                allCarriers: "सभी कैरियर",
                
                // Actions
                copy: "कॉपी",
                copied: "कॉपी हो गया!",
                delete: "डिलीट",
                phoneCopied: "फोन नंबर क्लिपबोर्ड में कॉपी हो गया!",
                
                // About sections
                aboutUSNumbers: "अमेरिकी फोन नंबर के बारे में",
                aboutChinaNumbers: "चीनी फोन नंबर के बारे में",
                aboutUKNumbers: "यूके फोन नंबर के बारे में",
                usageNote: "उपयोग नोट",
                usageDescription: "ये जेनरेट किए गए नंबर केवल टेस्टिंग और डेवलपमेंट उद्देश्यों के लिए हैं। इन्हें वास्तविक संचार प्रयासों के लिए उपयोग नहीं किया जाना चाहिए।",
                
                // Language selector
                selectLanguage: "भाषा चुनें",
                english: "English",
                chinese: "中文",
                spanish: "Español",
                hindi: "हिन्दी",
                arabic: "العربية"
            },
            
            ar: {
                // Common
                home: "الرئيسية",
                backToHome: "← العودة إلى جميع المولدات",
                privacyPolicy: "سياسة الخصوصية",
                termsOfService: "شروط الخدمة",
                allRightsReserved: "جميع الحقوق محفوظة.",
                
                // Home page
                phoneNumberGenerator: "مولد أرقام الهاتف",
                homeSubtitle: "قم بإنشاء أرقام هواتف صحيحة لأي دولة. مثالي للاختبار والتطوير وحماية الخصوصية.",
                
                // Country cards
                usPhoneGenerator: "مولد أرقام الهاتف الأمريكي",
                usDescription: "قم بإنشاء أرقام هواتف أمريكية صحيحة مع رموز المناطق والتنسيق المناسب. يشمل جميع الولايات الـ50 ويتبع معايير خطة الترقيم لأمريكا الشمالية (NANP).",
                
                chinaPhoneGenerator: "مولد أرقام الهاتف الصيني",
                chinaDescription: "إنشاء أرقام هواتف محمولة وثابتة صينية أصيلة. يدعم جميع شركات الاتصالات الكبرى بما في ذلك China Mobile و China Unicom و China Telecom.",
                
                ukPhoneGenerator: "مولد أرقام الهاتف البريطاني",
                ukDescription: "قم بإنشاء أرقام هواتف بريطانية بما في ذلك لندن ومانشستر وبرمنغهام والمدن الكبرى الأخرى. يدعم تنسيقات الهاتف المحمول والثابت.",
                
                canadaPhoneGenerator: "مولد أرقام الهاتف الكندي",
                canadaDescription: "إنشاء أرقام هواتف كندية لجميع المقاطعات والأقاليم. يتبع معايير NANP مع تخصيص رموز المناطق المناسبة.",
                
                australiaPhoneGenerator: "مولد أرقام الهاتف الأسترالي",
                australiaDescription: "قم بإنشاء أرقام هواتف أسترالية بما في ذلك المحمول والثابت والأرقام المجانية. يغطي جميع الولايات والأقاليم.",
                
                germanyPhoneGenerator: "مولد أرقام الهاتف الألماني",
                germanyDescription: "إنشاء أرقام هواتف ألمانية مع رموز المدن والبادئات المحمولة المناسبة. يدعم جميع الولايات الألمانية والمدن الكبرى.",
                
                francePhoneGenerator: "مولد أرقام الهاتف الفرنسي",
                franceDescription: "قم بإنشاء أرقام هواتف فرنسية بما في ذلك باريس وليون ومرسيليا والمناطق الأخرى. يدعم تنسيقات الهاتف المحمول والثابت.",
                
                japanPhoneGenerator: "مولد أرقام الهاتف الياباني",
                japanDescription: "إنشاء أرقام هواتف يابانية مع رموز المناطق المناسبة لطوكيو وأوساكا والمحافظات الأخرى. يشمل خيارات الهاتف المحمول والثابت.",
                
                southKoreaPhoneGenerator: "مولد أرقام الهاتف الكوري الجنوبي",
                southKoreaDescription: "قم بإنشاء أرقام هواتف كورية جنوبية لسيول وبوسان والمدن الكبرى الأخرى. يدعم تنسيقات الهاتف المحمول والثابت.",
                
                indiaPhoneGenerator: "مولد أرقام الهاتف الهندي",
                indiaDescription: "إنشاء أرقام هواتف هندية مع رموز الولايات والبادئات المحمولة المناسبة. يغطي جميع الولايات والأقاليم الاتحادية.",
                
                brazilPhoneGenerator: "مولد أرقام الهاتف البرازيلي",
                brazilDescription: "قم بإنشاء أرقام هواتف برازيلية بما في ذلك ساو باولو وريو دي جانيرو والولايات الأخرى. يدعم تنسيقات الهاتف المحمول والثابت.",
                
                russiaPhoneGenerator: "مولد أرقام الهاتف الروسي",
                russiaDescription: "إنشاء أرقام هواتف روسية لموسكو وسانت بطرسبرغ والكيانات الفيدرالية الأخرى. يشمل خيارات الهاتف المحمول والثابت.",
                
                // Generator pages
                generatePhoneNumbers: "إنشاء أرقام الهاتف",
                generateButton: "إنشاء رقم هاتف",
                generatedPhoneNumbers: "أرقام الهاتف المُنشأة",
                numbersGenerated: "أرقام تم إنشاؤها",
                numberGenerated: "رقم تم إنشاؤه",
                noNumbersYet: "لم يتم إنشاء أي أرقام هاتف بعد. انقر على الزر أعلاه للبدء.",
                clearAllNumbers: "مسح جميع الأرقام",
                confirmClear: "هل أنت متأكد من أنك تريد مسح جميع الأرقام المُنشأة؟",
                
                // Generator options
                numberFormat: "تنسيق الرقم",
                numberType: "نوع الرقم",
                mobileAndLandline: "محمول وثابت",
                mobileOnly: "محمول فقط",
                landlineOnly: "ثابت فقط",
                randomFormat: "تنسيق عشوائي",
                stateRegion: "الولاية/المنطقة",
                allStates: "جميع الولايات",
                allRegions: "جميع المناطق",
                carrier: "شركة الاتصالات",
                allCarriers: "جميع شركات الاتصالات",
                
                // Actions
                copy: "نسخ",
                copied: "تم النسخ!",
                delete: "حذف",
                phoneCopied: "تم نسخ رقم الهاتف إلى الحافظة!",
                
                // About sections
                aboutUSNumbers: "حول أرقام الهاتف الأمريكية",
                aboutChinaNumbers: "حول أرقام الهاتف الصينية",
                aboutUKNumbers: "حول أرقام الهاتف البريطانية",
                usageNote: "ملاحظة الاستخدام",
                usageDescription: "هذه الأرقام المُنشأة مخصصة لأغراض الاختبار والتطوير فقط. يجب عدم استخدامها في محاولات التواصل الفعلية.",
                
                // Language selector
                selectLanguage: "اختر اللغة",
                english: "English",
                chinese: "中文",
                spanish: "Español",
                hindi: "हिन्दी",
                arabic: "العربية"
            }
        };
    }

    // Initialize the i18n system
    init() {
        this.applyLanguage(this.currentLanguage);
        this.setupLanguageSelector();
        this.setupLanguageStorage();
    }

    // Apply language translations to the page
    applyLanguage(lang) {
        this.currentLanguage = lang;
        const translations = this.translations[lang];
        
        if (!translations) return;

        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update text direction for Arabic
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Find and translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'button') {
                    element.value = translations[key];
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });

        // Update document title if it has a translation key
        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement) {
            const key = titleElement.getAttribute('data-i18n');
            if (translations[key]) {
                document.title = translations[key];
            }
        }

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
        if (metaDesc) {
            const key = metaDesc.getAttribute('data-i18n');
            if (translations[key]) {
                metaDesc.content = translations[key];
            }
        }

        // Store language preference
        localStorage.setItem('phoneGenerator_language', lang);
        
        // Update language selector
        this.updateLanguageSelector();
        
        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    // Setup language selector dropdown
    setupLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (!selector) return;

        const languages = [
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'zh', name: '中文', flag: '🇨🇳' },
            { code: 'es', name: 'Español', flag: '🇪🇸' },
            { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
            { code: 'ar', name: 'العربية', flag: '🇸🇦' }
        ];

        selector.innerHTML = languages.map(lang => 
            `<option value="${lang.code}" ${lang.code === this.currentLanguage ? 'selected' : ''}>
                ${lang.flag} ${lang.name}
            </option>`
        ).join('');

        selector.addEventListener('change', async (e) => {
            const selectedLang = e.target.value;
            console.log(`Language selector changed to: ${selectedLang}`);
            
            // Force apply the language with debugging
            await this.forceApplyLanguage(selectedLang);
        });
    }

    // Update language selector to reflect current language
    updateLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = this.currentLanguage;
        }
    }

    // Setup language preference storage
    setupLanguageStorage() {
        // Listen for storage changes (for multi-tab sync)
        window.addEventListener('storage', (e) => {
            if (e.key === 'phoneGenerator_language' && e.newValue) {
                this.applyLanguage(e.newValue);
            }
        });
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get translation for a specific key
    t(key) {
        return this.translations[this.currentLanguage]?.[key] || key;
    }

    // Check if current language is RTL
    isRTL() {
        return this.currentLanguage === 'ar';
    }

    // Load language pack dynamically from JSON file
    async loadLanguagePack(lang) {
        try {
            const response = await fetch(`js/lang/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load language pack: ${response.status}`);
            }
            const langPack = await response.json();
            
            // Update translations for this language
            if (langPack.translations) {
                this.translations[lang] = langPack.translations;
            }
            
            return langPack;
        } catch (error) {
            console.warn(`Could not load language pack for ${lang}:`, error);
            return null;
        }
    }

    // Load all language packs
    async loadAllLanguagePacks() {
        const languages = ['en', 'zh', 'es', 'hi', 'ar'];
        const loadPromises = languages.map(lang => this.loadLanguagePack(lang));
        
        try {
            const results = await Promise.allSettled(loadPromises);
            const loadedCount = results.filter(result => result.status === 'fulfilled' && result.value).length;
            
            console.log(`Loaded ${loadedCount} language packs`);
            this.languagePacksLoaded = true;
            
            // Re-apply current language if it was loaded from external pack
            if (this.currentLanguage && this.translations[this.currentLanguage]) {
                this.applyLanguage(this.currentLanguage);
            }
            
            return loadedCount;
        } catch (error) {
            console.error('Error loading language packs:', error);
            return 0;
        }
    }

    // Enhanced apply language method with dynamic loading
    async applyLanguageAsync(lang) {
        // If language pack not loaded, try to load it
        if (!this.translations[lang] && !this.languagePacksLoaded) {
            await this.loadLanguagePack(lang);
        }
        
        // Apply the language
        this.applyLanguage(lang);
    }

    // Force reload and apply language (for debugging)
    async forceApplyLanguage(lang) {
        console.log(`Forcing language application: ${lang}`);
        
        // Always try to load the language pack
        await this.loadLanguagePack(lang);
        
        // Apply the language
        this.applyLanguage(lang);
        
        console.log(`Language applied: ${lang}`, this.translations[lang]);
    }
}

// Global i18n instance
let i18n;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    i18n = new I18n();
    
    // Make i18n globally available
    window.i18n = i18n;
    
    // Load language packs dynamically (optional, fallback to embedded)
    try {
        await i18n.loadAllLanguagePacks();
    } catch (error) {
        console.log('Using embedded language packs as fallback');
    }
});