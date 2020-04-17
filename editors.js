/**
 * A class that handles editing the CSS of a specified element
 */
class CSSEditor {
    /**
     * Initializes css editor with variant number
     * @param {*} variant 
     */
    constructor(variant) {
        this.variant = variant;
    }

    /**
     * Changes element css if variant number is 1
     * @param {Element} element 
     */
    element(element) {
        if(this.variant == 1) element.setAttribute('style', 'animation: MoveUpDown 1s infinite alternate;');
    }
}

/**
 * A class that handles editing heading elements
 */
class HeadingEditor {
    /**
     * Initializes heading editor with variant number
     * @param {*} variant 
     */
    constructor(variant) {
        this.variant = variant;
    }

    /**
     * Changes heading element to option corresponding to variant number
     * @param {Element} element 
     */
    element(element) {
        let content = this.variant == 1 ? 'You will be a CF Intern!' : 'You were passed over by CF.';
        element.setInnerContent(content);
    }
}

/**
 * A class that handles editing text elements
 */
class TextEditor {
    /**
     * Initializes text editor with variant number
     * @param {*} variant 
     */
    constructor(variant) {
        this.variant = variant;
    }

    /**
     * Changes text element to option corresponding to variant number
     * @param {Element} element 
     */
    element(element) {
        let content = this.variant == 1 ? 'Time to celebrate! First, let\'s flex on LinkedIn.' : 'No problem! I know what\'ll cheer you up.';
        element.setInnerContent(content);
    }
}

/**
 * A class that handles editing <a> elements
 */
class LinkEditor {
    /**
     * Initializes link editor with variant number
     * @param {*} variant 
     */
    constructor(variant) {
        this.variant = variant;
    }

    /**
     * Changes link element to option corresponding to variant number
     * @param {Element} element 
     */
    element(element) {
        let content = this.variant == 1 ? 'Go to LinkedIn' : 'It\'s a surprise';
        let link = this.variant == 1 ? 'https://www.linkedin.com/' : 'https://www.reddit.com/r/aww/';
        element.setInnerContent(content);
        element.setAttribute('href', link);
    }
}

module.exports = { CSSEditor, HeadingEditor, TextEditor, LinkEditor }