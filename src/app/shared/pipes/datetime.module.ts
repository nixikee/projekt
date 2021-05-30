import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimePipe } from './datetime.pipe';

@NgModule({
    declarations: [DatetimePipe],
    imports: [CommonModule],
    exports: [DatetimePipe],
    providers: [],
})
export class PowModule { }
