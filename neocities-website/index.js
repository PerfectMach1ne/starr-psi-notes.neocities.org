/*
 * NeoReactCities.js, world's #best JavaScript (script for being interpreted by JVM) "framework"!
 *
 * Copyleft StarRflowerR -i2024
*/

var this_variable_is_soooooooooo_important_slash_j = undefined;

// I put methods I plan to use for this website into static classes
// to make code cleaner and the whole thing easier to comprehend as
// what it is doing at any given time.
class ContentAdders {
  static footer = document.getElementById("footer-paster");
  static #footerPasteContent = `
        <div class="cooler-footer">
          <footer class="footer-display">
            <img 
              src="assets/images/neocities.png"
              onerror="this.src='../assets/images/neocities.png';"
              alt="Neocities logo with a caption &quot;Powered by Neocities&quot;">
            <p>02.2024 - THIS_VERY_FEMTOSECOND, by ME</p>
          </footer>
        </div>
        <div class="post-footer">
          <a href="https://github.com/PerfectMach1ne/starr-psi-notes.neocities.org">#."GitHub repo"_</a>
        </div>
        <div class="post-footer">
          <p>#.EOF_</p>
        </div>
`;

  static footerPaster() {
    this.footer.innerHTML = this.#footerPasteContent;
  }
}

class SelectorClassAdders {
  static #cssSelectors = {
    marginPaddingSaviour: "margin-padding-saviour"
  }
  
  static saveMarginsPaddings(htmlTag) {
    var elements = document.getElementsByTagName(htmlTag);

    for (var i = 0; i < elements.length; i++) {
      elements.item(i).classList.add(this.#cssSelectors.marginPaddingSaviour);
    }
  }
}

// All the ordinary utility function calls are below.
ContentAdders.footerPaster();

SelectorClassAdders.saveMarginsPaddings("ol");
SelectorClassAdders.saveMarginsPaddings("ul");
SelectorClassAdders.saveMarginsPaddings("dl");
SelectorClassAdders.saveMarginsPaddings("dt");
SelectorClassAdders.saveMarginsPaddings("dd");

// Shoutout to Vim motions girls (myself including)
