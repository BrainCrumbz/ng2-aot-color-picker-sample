The original code for this component has been copied from

  https://github.com/Alberplz/angular2-color-picker

on commit

> https://github.com/Alberplz/angular2-color-picker/commit/611f4a1e906a89b2d340282b7479917763931395
> Added new options to readme.md

Custom changes:

* in templates/default/, rename color-picker.* to color-picker.component.*
* exclude .ts files from linting
* add newline to end of file in .ts files (tslint was complaining anyway)
* export class DynamicCpModule
* import DynamicCpModule in ColorPickerModule
* remove private qualifier from a number of ColorPickerDirective properties