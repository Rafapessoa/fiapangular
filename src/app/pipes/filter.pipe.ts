import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any, filterBy: string) {
        console.log("...")
        console.log(filterBy)

        const filterName = items.filter(items => items.name.includes(filterBy));

        return filterName;
    }
}


//loadsl orderby