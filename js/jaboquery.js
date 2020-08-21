/**
 * Jabo Query v1.0.0
 * Developed by Jabo [https://github.com/jabo-bernardo/]
 * Github Repository: https://github.com/jabo-bernardo/jabo-query
 */

/**
 * Main Class
 */
class JaboQueryElement {

    /**
     * 
     * @param {string} selector 
     */
    constructor(element) {
        this.elements = element;
        return this;
    }

    /**
     * 
     * @param {string} content 
     */
    text(content) {
        this.elements.forEach(element => {
            element.innerHTML = content;
        });
        return this;
    }

    /**
     * Adds a class on the elements
     * 
     * @param {string} className 
     */
    addClass(className) {
        this.elements.forEach(element => {
            element.classList.add(className);
        });
        return this;
    }

    /**
     * Removes a class on the elements
     * 
     * @param {string} className 
     */
    removeClass(className) {
        this.elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;
    }

    /**
     * 
     * @returns First element of the selected elements
     */
    first() {
        return $(this.elements[0]);
    }

    /**
     * 
     * @returns X element of the selected elements
     */
    nth(index) {
        return $(this.elements[index]);
    }

    /**
     * 
     * @returns Last element of the selected elements
     */
    last() {
        return $(this.elements[this.elements.length - 1]);
    }

    /**
     * 
     * A CSS API for JaboQuery
     * 
     * @param {string} property CSS Property
     * @param {string} value 
     */
    css(property, value=null) {
        let res = [];
        if(!property) throw new SyntaxError(`css(); requires at least 1 parameter.`);
        if(!value) {
            this.elements.forEach(element => {
                res.push(element.style[property]);
            })
            return res;
        }
        this.elements.forEach(element => {
            element.style[property] = value;
        })
        return this;
    }
}

/**
 * 
 * @param {string} selector 
 */
function $(selector) {
    if(typeof selector === "string")
        return new JaboQueryElement(document.querySelectorAll(selector));
    if(typeof selector === "object")
        return new JaboQueryElement([selector]);
}