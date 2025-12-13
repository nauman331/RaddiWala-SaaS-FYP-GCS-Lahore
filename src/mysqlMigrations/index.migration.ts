import { userMigration } from "./user.migration";
import { bookingsMigration } from "./bookings.migration";
import { categoriesMigration } from "./categories.migration";
import { chatsMigration } from "./chats.migration";

export async function runMigrations() {
  await userMigration();
  await categoriesMigration();
  await bookingsMigration();
  await chatsMigration();
}