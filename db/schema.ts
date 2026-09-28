import { integer, boolean, text, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    user_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    username: varchar({ length: 255 }).notNull(),
    passwordHash: varchar({ length: 255 }).notNull(),
});

export const mapsTable = pgTable("maps", {
    map_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: text().unique().notNull(),
    api_url: text().notNull(),
    auth: text()
});

export const simulationsTable = pgTable("simulations", {
    sim_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    user_id: integer("user_id").references(() => usersTable.user_id).notNull(),
    map_id: integer("map_id").references(() => mapsTable.map_id).notNull(),
    length: integer().notNull(),
    completed: boolean().notNull()
});

export const callsTable = pgTable("calls", {
    call_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    sim_id: integer("sim_id").references(() => simulationsTable.sim_id),
    startTime: integer().notNull(),
    length: integer().notNull(),
    type: integer().notNull(),
    completed: boolean().notNull()
});

export const scenesTable = pgTable("scenes", {
    scene_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    sim_id: integer("sim_id").references(() => simulationsTable.sim_id),
    priority: integer().notNull(),
    startTime: integer().notNull(),
    length: integer().notNull(),
    completed: boolean().notNull()
});

const logsTable = pgTable("logs", {
    log_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    sim_id: integer("sim_id").references(() => simulationsTable.sim_id),
    call_id: integer("call_id").references(() => callsTable.call_id),
    scene_id: integer("scene_id").references(() => scenesTable.scene_id)
});

const formsTable = pgTable("forms", {
    form_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    log_id: integer("log_id").references(() => logsTable.log_id),
    type: text().notNull()
});

const fieldsTable = pgTable("fields", {
    field_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: text().notNull(),
    value: text().notNull(),
    form_id: integer("form_id").references(() => forms.field_id)
});

const faultsTable = pgTable("faults", {
    fault_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    call_id: integer("call_id").references(() => callsTable.call_id),
    scene_id: integer("scene_id").references(() => scenesTable.scene_id),
    log_id: integer("log_id").references(() => logsTable.log_id),
    severity: integer().notNull(),
    description: text().notNull()
});
