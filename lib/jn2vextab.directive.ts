import { Directive } from '@angular/core';
import { Jn2VextabService } from './jn2vextab.service';
@Directive({ selector: '[jn2abc]' })
export class Jn2VextabDirective{
        constructor(private jn2VextabService:Jn2VextabService) {}
}
