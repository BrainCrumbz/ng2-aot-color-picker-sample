import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ColorPickerService} from './color-picker.service';
import {ColorPickerDirective, DialogComponent, DynamicCpModule} from './color-picker.directive';

@NgModule({
    imports: [CommonModule, DynamicCpModule],
    providers: [ColorPickerService],
    declarations: [ColorPickerDirective],
    entryComponents: [DialogComponent],
    exports: [CommonModule, ColorPickerDirective]
})
export class ColorPickerModule {}
