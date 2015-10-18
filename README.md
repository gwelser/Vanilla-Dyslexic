# Vanilla-Dyslexic

Based on the Dyslexia plugin for Vanilla Forums by [adrianspeyer](https://github.com/adrianspeyer) located at [https://github.com/adrianspeyer/VanExtend/tree/master/Plugins/Dyslexia](https://github.com/adrianspeyer/VanExtend/tree/master/Plugins/Dyslexia).

## Changes

The `!important` attribute forces all elements to use the Open-Dyslexic. This causes icon fonts to be rendered incorrectly. I've removed the `!important` attribute and added some javascript that parse the through all elements in the `body`. If the font applied to the element is Font-Awesome the element is skipped. Otherwise, the font-family is set to Open-Dyslexic.