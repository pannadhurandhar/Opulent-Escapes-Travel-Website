import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const travelEnquiryTypeEnum = pgEnum("travel_enquiry_type", [
  "package",
  "custom",
  "contact",
]);

export const travelEnquiriesTable = pgTable("travel_enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  destination: text("destination").notNull(),
  travelDates: text("travel_dates"),
  travellers: integer("travellers").notNull(),
  message: text("message"),
  enquiryType: travelEnquiryTypeEnum("enquiry_type").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertTravelEnquirySchema = createInsertSchema(
  travelEnquiriesTable,
).omit({
  id: true,
  createdAt: true,
});

export type InsertTravelEnquiry = z.infer<typeof insertTravelEnquirySchema>;
export type TravelEnquiry = typeof travelEnquiriesTable.$inferSelect;
