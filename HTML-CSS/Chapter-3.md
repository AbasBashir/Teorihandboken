## HC 1.3 Tillgänglighet inom webb

Accessibility regarding a website refers to how accessible a website is to all users, specifically users with disabilities. As a web developer, building a website that is accessible by everyone is crucial. There are many reasons for having a website that is accessible, however, the main reason is to facilitate users to visit the website, to get a higher SEO ranking and have greater profits.
There are 3 ways to implement accessibility in a website. The first method is called Accessible Rich Internet Applications [ARIA]. The ARIA method uses roles and attributes from HTML to make web applications and its content more accessible for users with disabilities. ARIA roles could be applied to HTML tags that have no meaning such as div tags. This will broaden the understanding of the tag’s usage to users with disabilities. For instance, ```<div role=”progressbar”> </div> ``` describes the div as representing a progress bar. The ARIA role adds meaning to div and sends information to the web browser.

The second method to implement accessibility is by using Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA). WAI-ARIA was created by the World Wide Web Consortium (W3C) and its purpose is to enhance accessibility by providing more HTML attributes that can be implemented on elements. WAI-ARIA uses roles, properties and states to accomplish accessibility in dynamic content implemented through mainly JavaScript. Roles are used to describe what an element is or does, this could be for example <code> role="navigation" </code>   to inform that the role of a particular tag is a navigation. The property feature is used to give additional information about an element. For instance, aria-required = “true” informs screen readers that form is valid once it has been filled. Lastly, the states feature is applied to notify screen readers about the current state of an element. For example, <code> aria-disabled="true" </code> tells screen readers that a form input is no longer valid. 

The third method is following the Web Content Accessibility Guidelines [WCAG] made by Wide Web Consortium (W3C). The WCAGH are international guidelines set to implement accessibility to websites for users with disabilities. An example guideline recommended is to implement guideline 1.1 which states that websites should provide text for non-text content such as describing picture with text.

# **Sources**:  

1. [chasacademy.instructure.com](https://chasacademy.instructure.com/)
    - PowerPoint [Tisdag 19.9] - HTML och CSS
    - PowerPoint [Tisdag 20.9] - CSS positionering
    - PowerPoint [Torsdag 21.9] - CSS grid, flexbox och responsivitet
2. [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
3. [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
4. [w3schools.com](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html#:~:text=Guideline%201.1%3A%20Provide%20text%20alternatives,speech%2C%20symbols%20or%20simpler%20language.)