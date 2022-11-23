$(document).ready(function(){
    // $(function() {
      var isoCountries = [{
          id: "af",
          text: "Afrikaans"
        },
        {
          id: "sq",
          text: "Albanian"
        },
        {
          id: "ar-sa",
          text: "Arabic (Saudi Arabia)"
        },
        {
          id: "ar-iq",
          text: "Arabic (Iraq)"
        },
        {
          id: "ar-eg",
          text: "Arabic (Egypt)"
        },
        {
          id: "ar-ly",
          text: "Arabic (Libya)"
        },
        {
          id: "ar-dz",
          text: "Arabic (Algeria)"
        },
        {
          id: "ar-ma",
          text: "Arabic (Morocco)"
        },
        {
          id: "ar-tn",
          text: "Arabic (Tunisia)"
        },
        {
          id: "ar-om",
          text: "Arabic (Oman)"
        },
        {
          id: "ar-ye",
          text: "Arabic (Yemen)"
        },
        {
          id: "ar-sy",
          text: "Arabic (Syria)"
        },
        {
          id: "ar-jo",
          text: "Arabic (Jordan)"
        },
        {
          id: "ar-lb",
          text: "Arabic (Lebanon)"
        },
        {
          id: "ar-kw",
          text: "Arabic (Kuwait)"
        },
        {
          id: "ar-ae",
          text: "Arabic (U.A.E.)"
        },
        {
          id: "ar-bh",
          text: "Arabic (Bahrain)"
        },
        {
          id: "ar-qa",
          text: "Arabic (Qatar)"
        },
        {
          id: "eu",
          text: "Basque (Basque)"
        },
        {
          id: "bg",
          text: "Bulgarian"
        },
        {
          id: "be",
          text: "Belarusian"
        },
        {
          id: "ca",
          text: "Catalan"
        },
        {
          id: "zh-tw",
          text: "Chinese (Taiwan)"
        },
        {
          id: "zh-cn",
          text: "Chinese (PRC)"
        },
        {
          id: "zh-hk",
          text: "Chinese (Hong Kong SAR)"
        },
        {
          id: "zh-sg",
          text: "Chinese (Singapore)"
        },
        {
          id: "hr",
          text: "Croatian"
        },
        {
          id: "cs",
          text: "Czech"
        },
        {
          id: "da",
          text: "Danish"
        },
        {
          id: "nl",
          text: "Dutch (Standard)"
        },
        {
          id: "nl-be",
          text: "Dutch (Belgium)"
        },
        {
          id: "en",
          text: "English"
        },
        {
          id: "en-us",
          text: "English (United States)"
        },
        {
          id: "en-gb",
          text: "English (United Kingdom)"
        },
        {
          id: "en-au",
          text: "English (Australia)"
        },
        {
          id: "en-ca",
          text: "English (Canada)"
        },
        {
          id: "en-nz",
          text: "English (New Zealand)"
        },
        {
          id: "en-ie",
          text: "English (Ireland)"
        },
        {
          id: "en-za",
          text: "English (South Africa)"
        },
        {
          id: "en-jm",
          text: "English (Jamaica)"
        },
        {
          id: "en",
          text: "English (Caribbean)"
        },
        {
          id: "en-bz",
          text: "English (Belize)"
        },
        {
          id: "en-tt",
          text: "English (Trinidad)"
        },
        {
          id: "et",
          text: "Estonian"
        },
        {
          id: "fo",
          text: "Faeroese"
        },
        {
          id: "fa",
          text: "Farsi"
        },
        {
          id: "fi",
          text: "Finnish"
        },
        {
          id: "fr",
          text: "French (Standard)"
        },
        {
          id: "fr-be",
          text: "French (Belgium)"
        },
        {
          id: "fr-ca",
          text: "French (Canada)"
        },
        {
          id: "fr-ch",
          text: "French (Switzerland)"
        },
        {
          id: "fr-lu",
          text: "French (Luxembourg)"
        },
        {
          id: "gd",
          text: "Gaelic (Scotland)"
        },
        {
          id: "ga",
          text: "Irish"
        },
        {
          id: "de",
          text: "German (Standard)"
        },
        {
          id: "de-ch",
          text: "German (Switzerland)"
        },
        {
          id: "de-at",
          text: "German (Austria)"
        },
        {
          id: "de-lu",
          text: "German (Luxembourg)"
        },
        {
          id: "de-li",
          text: "German (Liechtenstein)"
        },
        {
          id: "el",
          text: "Greek"
        },
        {
          id: "he",
          text: "Hebrew"
        },
        {
          id: "hi",
          text: "Hindi"
        },
        {
          id: "hu",
          text: "Hungarian"
        },
        {
          id: "is",
          text: "Icelandic"
        },
        {
          id: "id",
          text: "Indonesian"
        },
        {
          id: "it",
          text: "Italian (Standard)"
        },
        {
          id: "it-ch",
          text: "Italian (Switzerland)"
        },
        {
          id: "ja",
          text: "Japanese"
        },
        {
          id: "ko",
          text: "Korean"
        },
        {
          id: "ko",
          text: "Korean (Johab)"
        },
        {
          id: "lv",
          text: "Latvian"
        },
        {
          id: "lt",
          text: "Lithuanian"
        },
        {
          id: "mk",
          text: "Macedonian (FYROM)"
        },
        {
          id: "ms",
          text: "Malaysian"
        },
        {
          id: "mt",
          text: "Maltese"
        },
        {
          id: "no",
          text: "Norwegian (Bokmal)"
        },
        {
          id: "no",
          text: "Norwegian (Nynorsk)"
        },
        {
          id: "pl",
          text: "Polish"
        },
        {
          id: "pt-br",
          text: "Portuguese (Brazil)"
        },
        {
          id: "pt",
          text: "Portuguese (Portugal)"
        },
        {
          id: "rm",
          text: "Rhaeto-Romanic "
        },
        {
          id: "ro",
          text: "Romanian"
        },
        {
          id: "ro-mo",
          text: "Romanian (Republic of Moldova)"
        },
        {
          id: "ru",
          text: "Russian"
        },
        {
          id: "ru-mo",
          text: "Russian (Republic of Moldova)"
        },
        {
          id: "sz",
          text: "Sami (Lappish)"
        },
        {
          id: "sr",
          text: "Serbian (Cyrillic)"
        },
        {
          id: "sr",
          text: "Serbian (Latin)"
        },
        {
          id: "sk",
          text: "Slovak"
        },
        {
          id: "sl",
          text: "Slovenian"
        },
        {
          id: "sb",
          text: "Sorbian"
        },
        {
          id: "es",
          text: "Spanish (Spain)"
        },
        {
          id: "es-mx",
          text: "Spanish (Mexico)"
        },
        {
          id: "es-gt",
          text: "Spanish (Guatemala)"
        },
        {
          id: "es-cr",
          text: "Spanish (Costa Rica)"
        },
        {
          id: "es-pa",
          text: "Spanish (Panama)"
        },
        {
          id: "es-do",
          text: "Spanish (Dominican Republic)"
        },
        {
          id: "es-ve",
          text: "Spanish (Venezuela)"
        },
        {
          id: "es-co",
          text: "Spanish (Colombia)"
        },
        {
          id: "es-pe",
          text: "Spanish (Peru)"
        },
        {
          id: "es-ar",
          text: "Spanish (Argentina)"
        },
        {
          id: "es-ec",
          text: "Spanish (Ecuador)"
        },
        {
          id: "es-cl",
          text: "Spanish (Chile)"
        },
        {
          id: "es-uy",
          text: "Spanish (Uruguay)"
        },
        {
          id: "es-py",
          text: "Spanish (Paraguay)"
        },
        {
          id: "es-bo",
          text: "Spanish (Bolivia)"
        },
        {
          id: "es-sv",
          text: "Spanish (El Salvador)"
        },
        {
          id: "es-hn",
          text: "Spanish (Honduras)"
        },
        {
          id: "es-ni",
          text: "Spanish (Nicaragua)"
        },
        {
          id: "es-pr",
          text: "Spanish (Puerto Rico)"
        },
        {
          id: "sx",
          text: "Sutu"
        },
        {
          id: "sv",
          text: "Swedish"
        },
        {
          id: "sv-fi",
          text: "Swedish (Finland)"
        },
        {
          id: "th",
          text: "Thai"
        },
        {
          id: "ts",
          text: "Tsonga"
        },
        {
          id: "tn",
          text: "Tswana"
        },
        {
          id: "tr",
          text: "Turkish"
        },
        {
          id: "uk",
          text: "Ukrainian"
        },
        {
          id: "ur",
          text: "Urdu"
        },
        {
          id: "ve",
          text: "Venda"
        },
        {
          id: "vi",
          text: "Viettextse"
        },
        {
          id: "xh",
          text: "Xhosa"
        },
        {
          id: "ji",
          text: "Yiddish"
        },
        {
          id: "zu",
          text: "Zulu"
        }
      ];
  
      $("[name='country']").select2({
        placeholder: "Select a country",
        data: isoCountries
      });
    // });
})