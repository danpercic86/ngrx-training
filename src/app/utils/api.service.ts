import {Injectable} from "@angular/core";
import {Items} from "./item.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getItems(): Items {
    return [
      {id: 1, title: 'Pizza', description: "Margherita"},
      {id: 2, title: 'Burger', description: "Cu bacon"},
      {id: 3, title: 'Spaghete', description: "Margherita"},
      {id: 4, title: 'Ceva', description: "Margherita"},
      {id: 5, title: 'Pizza 2', description: "Margherita"},
      {id: 6, title: 'Pizza 4', description: "Margherita"},
      {id: 7, title: 'Pizza 5', description: "Margherita"},
      {id: 8, title: 'Pizza 6', description: "Margherita"},
      {id: 9, title: 'Pizza 7', description: "Margherita"},
      {id: 10, title: 'Pizza 8', description: "Margherita"},
      {id: 11, title: 'Pizza 9', description: "Margherita"},
      {id: 12, title: 'Pizza 12', description: "Margherita"},
    ] as const;
  }
}
