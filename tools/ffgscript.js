
const FilledSquareMap = {
    A: '🅰', B: '🅱', C: '🅲', D: '🅳', E: '🅴', F: '🅵', G: '🅶', H: '🅷',
    I: '🅸', J: '🅹', K: '🅺', L: '🅻', M: '🅼', N: '🅽', O: '🅾', P: '🅿',
    Q: '🆀', R: '🆁', S: '🆂', T: '🆃', U: '🆄', V: '🆅', W: '🆆', X: '🆇',
    Y: '🆈', Z: '🆉', a: '🅰', b: '🅱', c: '🅲', d: '🅳', e: '🅴', f: '🅵',
    g: '🅶', h: '🅷', i: '🅸', j: '🅹', k: '🅺', l: '🅻', m: '🅼', n: '🅽',
    o: '🅾', p: '🅿', q: '🆀', r: '🆁', s: '🆂', t: '🆃', u: '🆄', v: '🆅',
    w: '🆆', x: '🆇', y: '🆈', z: '🆉'
  };
  const boldCharMap = {"0":"𝟎","1":"𝟏","2":"𝟐","3":"𝟑","4":"𝟒","5":"𝟓","6":"𝟔","7":"𝟕","8":"𝟖","9":"𝟗","a":"𝐚","b":"𝐛","c":"𝐜","d":"𝐝","e":"𝐞","f":"𝐟","g":"𝐠","h":"𝐡","i":"𝐢","j":"𝐣","k":"𝐤","l":"𝐥","m":"𝐦","n":"𝐧","o":"𝐨","p":"𝐩","q":"𝐪","r":"𝐫","s":"𝐬","t":"𝐭","u":"𝐮","v":"𝐯","w":"𝐰","x":"𝐱","y":"𝐲","z":"𝐳","A":"𝐀","B":"𝐁","C":"𝐂","D":"𝐃","E":"𝐄","F":"𝐅","G":"𝐆","H":"𝐇","I":"𝐈","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝐌","N":"𝐍","O":"𝐎","P":"𝐏","Q":"𝐐","R":"𝐑","S":"𝐒","T":"𝐓","U":"𝐔","V":"𝐕","W":"𝐖","X":"𝐗","Y":"𝐘","Z":"𝐙"};
    const cursiveCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":"𝓺","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃","A":"𝓐","B":"𝓑","C":"𝓒","D":"𝓓","E":"𝓔","F":"𝓕","G":"𝓖","H":"𝓗","I":"𝓘","J":"𝓙","K":"𝓚","L":"𝓛","M":"𝓜","N":"𝓝","O":"𝓞","P":"𝓟","Q":"𝓠","R":"𝓡","S":"𝓢","T":"𝓣","U":"𝓤","V":"𝓥","W":"𝓦","X":"𝓧","Y":"𝓨","Z":"𝓩"};
    const oldEnglishCharMap = {"a":"𝔞","b":"𝔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷","A":"𝔄","B":"𝔅","C":"ℭ","D":"𝔇","E":"𝔈","F":"𝔉","G":"𝔊","H":"ℌ","I":"ℑ","J":"𝔍","K":"𝔎","L":"𝔏","M":"𝔐","N":"𝔑","O":"𝔒","P":"𝔓","Q":"𝔔","R":"ℜ","S":"𝔖","T":"𝔗","U":"𝔘","V":"𝔙","W":"𝔚","X":"𝔛","Y":"𝔜","Z":"ℨ"};
    const wideTextCharMap = {"q" : "ｑ","w" : "ｗ","e" : "ｅ","r" : "ｒ","t" : "ｔ","y" : "ｙ","u" : "ｕ","i" : "ｉ","o" : "ｏ","p" : "ｐ","Q" : "Ｑ","W" : "Ｗ","E" : "Ｅ","R" : "Ｒ","T" : "Ｔ","Y" : "Ｙ","U" : "Ｕ","I" : "Ｉ","O" : "Ｏ","P" : "Ｐ","a" : "ａ","s" : "ｓ","d" : "ｄ","f" : "ｆ","g" : "ｇ","h" : "ｈ","j" : "ｊ","k" : "ｋ","l" : "ｌ","A" : "Ａ","S" : "Ｓ","D" : "Ｄ","F" : "Ｆ","G" : "Ｇ","H" : "Ｈ","J" : "Ｊ","K" : "Ｋ","L" : "Ｌ","z" : "ｚ","x" : "ｘ","c" : "ｃ","v" : "ｖ","b" : "ｂ","n" : "ｎ","m" : "ｍ","Z" : "Ｚ","X" : "Ｘ","C" : "Ｃ","V" : "Ｖ","B" : "Ｂ","N" : "Ｎ","M" : "Ｍ"};
     const squiggle5CharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ą","b":"ც","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɠ","h":"ɧ","i":"ı","j":"ʝ","k":"ƙ","l":"Ɩ","m":"ɱ","n":"ŋ","o":"ơ","p":"℘","q":"զ","r":"ཞ","s":"ʂ","t":"ɬ","u":"ų","v":"۷","w":"ῳ","x":"ҳ","y":"ყ","z":"ʑ","A":"ą","B":"ც","C":"ƈ","D":"ɖ","E":"ɛ","F":"ʄ","G":"ɠ","H":"ɧ","I":"ı","J":"ʝ","K":"ƙ","L":"Ɩ","M":"ɱ","N":"ŋ","O":"ơ","P":"℘","Q":"զ","R":"ཞ","S":"ʂ","T":"ɬ","U":"ų","V":"۷","W":"ῳ","X":"ҳ","Y":"ყ","Z":"ʑ"};
    
    const EmojiMap = {      q:"🍳",w:"🔱",e:"𝓔",r:"🌱",t:"🍄",y:"🏋",u:"🌵",i:"🕴",o:"😀",p:"🅿",a:"🅰",s:"💲",d:"🐬",f:"🔩",g:"🎸",h:"🅷",j:"🎷",k:"🎉",l:"👢",z:"💤",x:"💀",c:"🌜",v:"🥦",b:"🅱",n:"🥄",m:"🅼" }; 
    
  
  
    const subscriptMap = {"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","a":"ₐ","b":"b","c":"c","d":"d","e":"ₑ","f":"f","g":"g","h":"ₕ","i":"ᵢ","j":"ⱼ","k":"ₖ","l":"ₗ","m":"ₘ","n":"ₙ","o":"ₒ","p":"ₚ","q":"q","r":"ᵣ","s":"ₛ","t":"ₜ","u":"ᵤ","v":"ᵥ","w":"w","x":"ₓ","y":"y","z":"z","A":"ₐ","B":"B","C":"C","D":"D","E":"ₑ","F":"F","G":"G","H":"ₕ","I":"ᵢ","J":"ⱼ","K":"ₖ","L":"ₗ","M":"ₘ","N":"ₙ","O":"ₒ","P":"ₚ","Q":"Q","R":"ᵣ","S":"ₛ","T":"ₜ","U":"ᵤ","V":"ᵥ","W":"W","X":"ₓ","Y":"Y","Z":"Z"};
    const superscriptMap = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","a":"ᵃ","b":"ᵇ","c":"ᶜ","d":"ᵈ","e":"ᵉ","f":"ᶠ","g":"ᵍ","h":"ʰ","i":"ⁱ","j":"ʲ","k":"ᵏ","l":"ˡ","m":"ᵐ","n":"ⁿ","o":"ᵒ","p":"ᵖ","q":"q","r":"ʳ","s":"ˢ","t":"ᵗ","u":"ᵘ","v":"ᵛ","w":"ʷ","x":"ˣ","y":"ʸ","z":"ᶻ","A":"ᴬ","B":"ᴮ","C":"ᶜ","D":"ᴰ","E":"ᴱ","F":"ᶠ","G":"ᴳ","H":"ᴴ","I":"ᴵ","J":"ᴶ","K":"ᴷ","L":"ᴸ","M":"ᴹ","N":"ᴺ","O":"ᴼ","P":"ᴾ","Q":"Q","R":"ᴿ","S":"ˢ","T":"ᵀ","U":"ᵁ","V":"ⱽ","W":"ᵂ","X":"ˣ","Y":"ʸ","Z":"ᶻ"};
     const medievalMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝖆","b":"𝖇","c":"𝖈","d":"𝖉","e":"𝖊","f":"𝖋","g":"𝖌","h":"𝖍","i":"𝖎","j":"𝖏","k":"𝖐","l":"𝖑","m":"𝖒","n":"𝖓","o":"𝖔","p":"𝖕","q":"𝖖","r":"𝖗","s":"𝖘","t":"𝖙","u":"𝖚","v":"𝖛","w":"𝖜","x":"𝖝","y":"𝖞","z":"𝖟","A":"𝕬","B":"𝕭","C":"𝕮","D":"𝕯","E":"𝕰","F":"𝕱","G":"𝕲","H":"𝕳","I":"𝕴","J":"𝕵","K":"𝕶","L":"𝕷","M":"𝕸","N":"𝕹","O":"𝕺","P":"𝕻","Q":"𝕼","R":"𝕽","S":"𝕾","T":"𝕿","U":"𝖀","V":"𝖁","W":"𝖂","X":"𝖃","Y":"𝖄","Z":"𝖅"};
  
     const mirrorMap = {a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ɓ",h:"ɥ",i:"ı",j:"ɾ",k:"ʞ",l:"l",m:"ɯ",n:"u",r:"ɹ",t:"ʇ",v:"ʌ",w:"ʍ",y:"ʎ",A:"∀",B:"ᙠ",C:"Ɔ",D:"ᗡ",E:"Ǝ",F:"Ⅎ",G:"⅁",J:"ſ",K:"⋊",L:"˥",M:"W",P:"Ԁ",Q:"Ό",R:"ᴚ",T:"⊥",U:"∩",V:"Λ",Y:"⅄",1:"!",2:"ᄅ",3:"Ɛ",4:"ㄣ",5:"ގ",6:"9",7:"ㄥ","&":"⅋",".":"˙",'"':"„",";":"؛","[":"]","(":")","{":"}","?":"¿","!":"¡","'":",","<":">","‾":"_","¯":"_","‿":"⁀","⁅":"⁆","∴":"∵","\r":"\n","ß":"ᙠ","̈":"̤","ä":"ɐ̤","ö":"o̤","ü":"n̤","Ä":"∀̤","Ö":"O̤","Ü":"∩̤","´":" ̗","é":"ǝ̗","á":"ɐ̗","ó":"o̗","ú":"n̗","É":"Ǝ̗","Á":"∀̗","Ó":"O̗","Ú":"∩̗","`":" ̖","è":"ǝ̖","à":"ɐ̖","ò":"o̖","ù":"n̖","È":"Ǝ̖","À":"∀̖","Ò":"O̖","Ù":"∩̖","^":" ̮","ê":"ǝ̮","â":"ɐ̮","ô":"o̮","û":"n̮","Ê":"Ǝ̮","Â":"∀̮","Ô":"O̮","Û":"∩̮"};
    
    const symbolsMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"å","b":"ß","c":"c","d":"Ð","e":"ê","f":"f","g":"g","h":"h","i":"ï","j":"j","k":"k","l":"l","m":"m","n":"ñ","o":"ð","p":"p","q":"q","r":"r","s":"$","t":"t","u":"µ","v":"v","w":"w","x":"x","y":"y","z":"z","A":"Ä","B":"ß","C":"Ç","D":"Ð","E":"È","F":"F","G":"G","H":"H","I":"Ì","J":"J","K":"K","L":"L","M":"M","N":"ñ","O":"Ö","P":"þ","Q":"Q","R":"R","S":"$","T":"t","U":"Ú","V":"V","W":"W","X":"X","Y":"y","Z":"Z"};
    const squiggle2Map = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ค","b":"๒","c":"ς","d":"๔","e":"є","f":"Ŧ","g":"ﻮ","h":"ђ","i":"เ","j":"ן","k":"к","l":"ɭ","m":"๓","n":"ภ","o":"o","p":"ק","q":"ợ","r":"г","s":"ร","t":"Շ","u":"ย","v":"ש","w":"ฬ","x":"א","y":"ץ","z":"չ","A":"ค","B":"๒","C":"ς","D":"๔","E":"є","F":"Ŧ","G":"ﻮ","H":"ђ","I":"เ","J":"ן","K":"к","L":"ɭ","M":"๓","N":"ภ","O":"O","P":"ק","Q":"ợ","R":"г","S":"ร","T":"Շ","U":"ย","V":"ש","W":"ฬ","X":"א","Y":"ץ","Z":"չ"};
    const boldItalicMap ={ 'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯',
      'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷',
      'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿',
      'Y': '𝒀', 'Z': '𝒁',
      'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉',
      'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑',
      'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙',
      'y': '𝒚', 'z': '𝒛'};
    const cursiveboldMap ={ 'a': '𝓐', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻',
    'g': 'g', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁',
    'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇',
    's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍',
    'y': '𝓎', 'z': '𝓏',
    'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': '𝒴', 'F': 'ℱ',
    'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': '𝒧',
    'M': '𝒨', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ',
    'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳',
    'Y': '𝒴', 'Z': '𝒵'};
  
  function convertToFancyFont() {
    const input = document.getElementById('inputText').value.trim();
    const boldCharContainer = document.getElementById('boldCharContainer');
    const cursiveCharContainer = document.getElementById('cursiveCharContainer');
    const filledSquareContainer = document.getElementById('FilledSquareContainer');
    const oldEnglishCharContainer = document.getElementById('oldEnglishCharContainer');
    const wideTextCharContainer = document.getElementById('wideTextCharContainer');
    const squiggle5CharContainer = document.getElementById('squiggle5CharContainer');
    const EmojiContainer = document.getElementById('EmojiContainer');
    const subscriptContainer = document.getElementById('subscriptContainer');
    const superscriptContainer = document.getElementById('superscriptContainer');
    const medievalContainer = document.getElementById('medievalContainer');
    const mirrorContainer = document.getElementById('mirrorContainer');
   const symbolsContainer = document.getElementById('symbolsContainer');
    const squiggle2Container = document.getElementById('squiggle2Container');
    const boldItalicContainer = document.getElementById('boldItalicContainer');
    const cursiveboldContainer = document.getElementById('cursiveboldContainer');
    
    if (input) {
       boldCharContainer.style.display = 'block';
      cursiveCharContainer.style.display = 'block';
      filledSquareContainer.style.display = 'block';
      oldEnglishCharContainer.style.display = 'block';
      wideTextCharContainer.style.display = 'block';
      squiggle5CharContainer.style.display = 'block';
      EmojiContainer.style.display = 'block';
      subscriptContainer.style.display = 'block';
      superscriptContainer.style.display = 'block';
      medievalContainer.style.display = 'block';
      mirrorContainer.style.display = 'block';
      symbolsContainer.style.display = 'block';
      squiggle2Container.style.display = 'block';
      boldItalicContainer.style.display = 'block';
      cursiveboldContainer.style.display = 'block';
    
      
      
      let boldCharResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        boldCharResult += boldCharMap[char] || char;
      }
      document.getElementById('boldCharResult').textContent = boldCharResult;
      
      let cursiveCharResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        cursiveCharResult += cursiveCharMap[char] || char;
      }
      document.getElementById('cursiveCharResult').textContent = cursiveCharResult;
      
  let filledSquareResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        filledSquareResult += FilledSquareMap[char] || char;
      }
      document.getElementById('FilledSquareResult').textContent = filledSquareResult;
      let oldEnglishCharResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        oldEnglishCharResult += oldEnglishCharMap[char] || char;
      }
      document.getElementById('oldEnglishCharResult').textContent = oldEnglishCharResult;
  let wideTextCharResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        wideTextCharResult += wideTextCharMap[char] || char;
      }
      document.getElementById('wideTextCharResult').textContent = wideTextCharResult;
  let squiggle5CharResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        squiggle5CharResult += squiggle5CharMap[char] || char;
      }
      document.getElementById('squiggle5CharResult').textContent = squiggle5CharResult;
  let EmojiResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        EmojiResult += EmojiMap[char] || char;
      }
      document.getElementById('EmojiResult').textContent = EmojiResult;
     let subscriptResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        subscriptResult += subscriptMap[char] || char;
      }
      document.getElementById('subscriptResult').textContent = subscriptResult;
  let superscriptResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        superscriptResult += superscriptMap[char] || char;
      }
      document.getElementById('superscriptResult').textContent = superscriptResult;
  let medievalResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        medievalResult += medievalMap[char] || char;
      }
      document.getElementById('medievalResult').textContent = medievalResult;
   let mirrorResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        mirrorResult += mirrorMap[char] || char;
      }
      document.getElementById('mirrorResult').textContent = mirrorResult;
      let symbolsResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        symbolsResult += symbolsMap[char] || char;
      }
      document.getElementById('symbolsResult').textContent = symbolsResult;
  let squiggle2Result = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        squiggle2Result += squiggle2Map[char] || char;
      }
      document.getElementById('squiggle2Result').textContent = squiggle2Result;
  let boldItalicResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        boldItalicResult += boldItalicMap[char] || char;
      }
      document.getElementById('boldItalicResult').textContent = boldItalicResult;
  let cursiveboldResult = '';
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        cursiveboldResult += cursiveboldMap[char] || char;
      }
      document.getElementById('cursiveboldResult').textContent = cursiveboldResult;
  
    
    } else {
  
      boldCharContainer.style.display = 'none';
      filledSquareContainer.style.display = 'none';
      cursiveCharContainer.style.display = 'none';
      oldEnglishCharContainer.style.display = 'none';
      wideTextCharContainer.style.display = 'none';
      squiggle5CharContainer.style.display = 'none';
      EmojiContainer.style.display = 'none';
       subscriptContainer.style.display = 'none';
      superscriptContainer.style.display = 'none';
      medievalContainer.style.display = 'none';
     mirrorContainer.style.display = 'none';
      symbolsContainer.style.display = 'none';
      squiggle2Container.style.display = 'none';
  boldItalicContainer.style.display = 'none';
      cursiveboldContainer.style.display = 'none';
    }
  }
  
  function copyToClipboard(elementId, buttonId) {
    const content = document.getElementById(elementId).textContent;
    const textarea = document.createElement('textarea');
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const button = document.getElementById(buttonId);
    button.textContent = 'Copied';
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 2500);
  }
  