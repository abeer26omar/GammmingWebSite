import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

//   transform(games:any[],searchText:string): any {
//     if(!games){
//     return [];
//   }
//   if(!searchText){
//     return games;
//   }
//   searchText=searchText.toLocaleLowerCase();
//   return games.filter(games => {
//     return games.title.toLocaleLowerCase().includes(searchText);
//   });
// }
transform(items: any[], searchText: string): any[] {
  if (!items) {
    return [];
  }
  if (!searchText) {
    return items;
  }
  searchText = searchText.toLocaleLowerCase();

  return items.filter(it => {
    return it.title.toLocaleLowerCase().includes(searchText);
  });
}

}