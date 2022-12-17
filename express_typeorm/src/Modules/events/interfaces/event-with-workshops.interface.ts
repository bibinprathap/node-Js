import { Event } from "../entities/event.entity";
import { Workshop } from "../entities/workshop.entity";

export interface EventWithWorkshop extends Event {
  workshops: Array<Workshop>;
}
