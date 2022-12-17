import { MenuItem } from "../entities/menu-item.entity";

export interface MenuItemWithChildren extends MenuItem {
  children: Array<MenuItemWithChildren>;
}
